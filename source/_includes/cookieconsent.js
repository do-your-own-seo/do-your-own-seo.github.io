/*!
 * Olya Vo & ChatGPT for https://do-your-own-seo.com
 * Released under the MIT License
 */
 
var modal = document.querySelector('#modal');

// Check if consent is granted
function checkConsent() {
  var consentCookie = getCookie('cookie_consent');
  if (consentCookie && consentCookie === 'granted') {
    // Consent already granted, nothing needs to be done
    return true;
  } else {
    // Show the cookie consent modal
    showModal();
    return false;
  }
}

// Show the cookie consent modal
function showModal() {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
  }
  
  // Handle button clicks
  var acceptAllButton = document.getElementById('accept-all');
  acceptAllButton.addEventListener('click', function() {
    // Set consent cookie to 'granted' and send consent update to Analytics
    setCookie('cookie_consent', 'granted', 90);
    gtag('consent', 'update', { 'analytics_storage': 'granted'});
    closeModal();
  });
  
  var acceptNecessaryButton = document.getElementById('accept-necessary');
  acceptNecessaryButton.addEventListener('click', function() {
    // Remove all cookies starting with '_ga' and set consent cookie to 'denied'
    removeCookiesStartingWith('_ga');
    setCookie('cookie_consent', 'denied', 90);
    closeModal();
  });
}

// Close the cookie consent modal
function closeModal() {
  modal.classList.add("hidden");
  modal.replaceWith(modal.cloneNode(true)); //remove event listeners
}

// Get cookie value by name
function getCookie(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    return match[2];
  } else {
    return null;
  }
}

// Set cookie value
function setCookie(name, value, expires) {
  var date = new Date();
  date.setTime(date.getTime() + (expires * 24 * 60 * 60 * 1000));
  var expires = 'expires=' + date.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Remove cookies starting with a given prefix
function removeCookiesStartingWith(prefix) {
  var cookies = document.cookie.split(';');
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf(prefix) === 0) {
      document.cookie = cookie.split('=')[0] + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    }
  }
}

// Check consent on page load
checkConsent();
