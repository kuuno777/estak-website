/* ESTAK marketing site — minimal progressive enhancement.
   Mobile nav toggle + close on navigation. No dependencies, no build step. */
(function () {
  'use strict';
  var header = document.getElementById('siteHeader');
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!header || !toggle || !links) return;

  function setOpen(open) {
    header.classList.toggle('nav-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  toggle.addEventListener('click', function () {
    setOpen(!header.classList.contains('nav-open'));
  });

  // Close the menu after tapping a link (mobile)
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
