## Context

De Toha theme bundelt alle JS via Hugo's esbuild pipeline. Het entrypoint is `assets/scripts/application.js` (uit de vendor), die via `./pages` uiteindelijk `./pages/home.js` importeert. Hugo's module-systeem geeft project-eigen assets voorrang boven vendor-assets: een bestand op `assets/scripts/pages/home.js` in het project overschrijft de vendor-versie transparant.

De vendor `home.js` heeft deze asymmetrie (zie proposal.md - Why):
```js
strings.forEach((string, index) => {
  typeItInstance = typeItInstance.type(string)
  if (index < strings.length - 1) {   // laatste string mist .delete()
    typeItInstance = typeItInstance.delete(string.length)
  }
})
```

## Goals / Non-Goals

**Goals:**
- Gelijkmatig animatieritme voor alle strings (inclusief de laatste)
- Pauze van ~1500ms na typen, ~400ms na wissen

**Non-Goals:**
- Aanpassen van type- of delete-snelheid
- Andere instellingen van TypeIt wijzigen
- Vendorcode aanpassen

## Decisions

**Override via `assets/scripts/pages/home.js`**

Hugo's asset-mount volgorde: project-eigen assets winnen van vendor. Door `assets/scripts/pages/home.js` aan te maken neemt Hugo automatisch dit bestand. Alternatief (vendorbestand direct aanpassen) is geen optie: dat wordt overschreven bij `hugo mod vendor`.

**Expliciete `.delete()` voor alle strings + `.pause()` na typen en wissen**

```js
strings.forEach((string) => {
  typeItInstance = typeItInstance
    .type(string)
    .pause(1500)
    .delete(string.length)
    .pause(400)
})
```

Met `loop: true` herstart TypeIt de keten na de laatste string. Doordat ook de laatste string nu expliciet verwijderd wordt, start de loop met een lege cursor — identiek aan hoe elke andere string eindigt.

Alternatief (alleen `.pause()` toevoegen voor de loop-overgang) lost alleen het symptoom op voor de laatste string en maakt de code minder leesbaar.

## Risks / Trade-offs

- **Vendor-update**: Als Toha de logica in `home.js` wijzigt, moet de override manueel gesynchroniseerd worden. Risico is klein (de fix is bewust, niet toevallig).
- **`loop: true` gedrag**: Met alle strings expliciet verwijderd en `loop: true` reset TypeIt de keten en herstart. Dit is het verwachte gedrag; getest via TypeIt docs.
