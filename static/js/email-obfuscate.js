// Email obfuscation to prevent scraping (base64 + character reversal)
(function() {
    'use strict';

    // Base64 decode helper
    function b64d(str) {
        try {
            return decodeURIComponent(atob(str).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));
        } catch (e) {
            return atob(str);
        }
    }

    function deobfuscateEmails() {
        // Find all obfuscated email elements
        var emailElements = document.querySelectorAll('[data-email-obf]');

        emailElements.forEach(function(elem) {
            var b64Email = elem.getAttribute('data-email-obf');
            try {
                // Decode base64 to reveal the email
                var email = b64d(b64Email);
                
                // Create mailto link
                var link = document.createElement('a');
                link.href = 'mailto:' + email;
                link.textContent = email;
                link.className = elem.className;
                
                // Replace the obfuscated element
                elem.parentNode.replaceChild(link, elem);
            } catch (e) {
                console.error('Failed to decode email:', e);
            }
        });
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', deobfuscateEmails);
    } else {
        deobfuscateEmails();
    }
})();
