(function () {
  var NAV = [
    { href: 'publications.html',       label: 'Publications' },
    { href: 'technical_projects.html', label: 'Technical projects' },
    { href: 'random_projects.html',    label: 'Random projects' },
    { href: 'resources.html',          label: 'Resources' },
    { href: 'news.html',               label: 'News' },
    { href: 'contacts.html',           label: 'Contacts' },
  ];

  function currentFile() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  function buildHeader() {
    var file = currentFile();
    var items = NAV.map(function (link) {
      var active = link.href === file ? ' aria-current="page"' : '';
      return '<li><a href="' + link.href + '"' + active + '>' + link.label + '</a></li>';
    }).join('');
    return '<header class="site-header">'
      + '<div class="container wrap">'
      + '<a class="brand" href="index.html"><span class="dot" aria-hidden="true"></span> Robotics / AI</a>'
      + '<nav aria-label="Primary navigation">'
      + '<button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="nav-list" aria-label="Open menu">≡</button>'
      + '<ul id="nav-list">' + items + '</ul>'
      + '</nav>'
      + '</div>'
      + '</header>';
  }

  function buildFooter() {
    return '<footer>'
      + '<div class="container wrap">'
      + '<span>© <span id="y"></span> Madiyar Mukanov</span>'
      + '<span>·</span>'
      + '<a href="sitemap.xml">sitemap</a>'
      + '<span>·</span>'
      + '<a href="robots.txt">robots.txt</a>'
      + '</div>'
      + '</footer>';
  }

  function initMenu() {
    var btn = document.getElementById('menu-btn');
    var list = document.getElementById('nav-list');
    if (btn && list) {
      btn.addEventListener('click', function () {
        var open = list.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      });
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('[data-include="header"]').forEach(function (el) {
      el.outerHTML = buildHeader();
    });
    document.querySelectorAll('[data-include="footer"]').forEach(function (el) {
      el.outerHTML = buildFooter();
    });

    var yearEl = document.getElementById('y');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    initMenu();
  });
})();
