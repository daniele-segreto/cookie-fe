// Funzione per nascondere il banner dei cookie
function hideCookieBanner() {
    let cookieBanner = document.getElementById('cookie-banner');
    cookieBanner.style.display = 'none';
    
    // Salva lo stato di accettazione dei cookie nel localStorage
    localStorage.setItem('cookiesAccepted', 'true');
}

// Funzione per rifiutare i cookie
function rejectCookies() {
    hideCookieBanner();
    // Esegui qui le azioni aggiuntive per gestire il rifiuto dei cookie
}

// Funzione per controllare lo stato di accettazione dei cookie
function checkCookieConsent() {
    let cookiesAccepted = localStorage.getItem('cookiesAccepted');
    
    if (cookiesAccepted === 'true') {
        hideCookieBanner();
    }
}

// Event listener per il pulsante di accettazione dei cookie
let acceptCookiesButton = document.getElementById('accept-cookies');
acceptCookiesButton.addEventListener('click', hideCookieBanner);

// Event listener per il pulsante di rifiuto dei cookie
let rejectCookiesButton = document.getElementById('reject-cookies');
rejectCookiesButton.addEventListener('click', rejectCookies);

// Controlla lo stato di accettazione dei cookie al caricamento della pagina
window.addEventListener('load', checkCookieConsent);
