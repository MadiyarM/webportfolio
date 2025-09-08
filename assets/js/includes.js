// Simple client-side includes for header and footer
(function(){
  function inject(selector, url){
    var container = document.querySelector(selector);
    if(!container) return;
    fetch(url, { cache: 'no-cache' })
      .then(function(r){ return r.text(); })
      .then(function(html){ container.innerHTML = html; })
      .catch(function(err){ console.error('Include failed:', url, err); });
  }
  document.addEventListener('DOMContentLoaded', function(){
    inject('div[data-include="header"]', 'partials/header.html');
    inject('div[data-include="footer"]', 'partials/footer.html');
  });
})();


