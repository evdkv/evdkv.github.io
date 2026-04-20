/* ============================================================
   SHARED COMPONENTS 
   ============================================================ */

const SITE = {
  name:  'Tolya Evdokimov',         
  email: '',      
  cv:    'YOUR_CV.pdf',               
  year:  '2026',                      

  navLinks: [                         
    { label: 'About',    anchor: '#about'    },
    { label: 'Research', anchor: '#research' },
    { label: 'News',     anchor: '#news'     },
  ],
};

/* ── Internal — no edits needed below this line ─────────────── */
(function () {
  // Each page sets data-root on <body> to the relative path back to
  // the site root. Root pages use "./" ; project pages use "../../".
  const root   = document.body.dataset.root ?? './';
  const isHome = root === './';

  const homeHref = isHome ? 'index.html' : root + 'index.html';

  // Build nav link hrefs: on the homepage use bare anchors so the
  // browser doesn't navigate away; on other pages prefix with root.
  const navLinksHTML = SITE.navLinks.map(({ label, anchor }) => {
    const href = isHome ? anchor : root + 'index.html' + anchor;
    return `<li><a href="${href}">${label}</a></li>`;
  }).join('\n        ');

  const navHTML = `<nav>
    <div class="nav-inner">
      <a class="nav-name" href="${homeHref}" id="nav-name">${SITE.name}</a>
      <ul class="nav-links">
        ${navLinksHTML}
        <!--<li><a href="${root}${SITE.cv}">CV</a></li>
        -->
      </ul>
    </div>
  </nav>`;

  const footerHTML = `<footer>
    <div class="footer-inner">
      <span class="footer-copy">© ${SITE.year} ${SITE.name}</span>
      <a class="footer-email" href="mailto:${SITE.email}">${SITE.email}</a>
    </div>
  </footer>`;

  // Replace existing nav / footer elements (or insert if absent)
  const existingNav    = document.querySelector('nav');
  const existingFooter = document.querySelector('footer');

  if (existingNav)    existingNav.outerHTML    = navHTML;
  else document.body.insertAdjacentHTML('afterbegin', navHTML);

  if (existingFooter) existingFooter.outerHTML = footerHTML;
  else document.body.insertAdjacentHTML('beforeend', footerHTML);

  if (isHome) {
    const navName = document.getElementById('nav-name');
    function updateNavName() {
      const past = window.scrollY >= 60;
      navName.style.opacity      = past ? '1' : '0';
      navName.style.pointerEvents = past ? ''  : 'none';
    }
    updateNavName();
    window.addEventListener('scroll', updateNavName, { passive: true });
  }
})();
