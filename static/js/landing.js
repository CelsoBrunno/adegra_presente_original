(function () {
  'use strict';

  var yearEl = document.getElementById('lpYear');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var age = document.getElementById('lpAge');
  var yes = document.getElementById('lpAgeYes');
  var no = document.getElementById('lpAgeNo');
  var storageKey = 'lpAgeConfirmed';

  if (age && !sessionStorage.getItem(storageKey)) {
    age.classList.add('is-open');
  }

  if (yes) {
    yes.addEventListener('click', function () {
      sessionStorage.setItem(storageKey, 'true');
      age.classList.remove('is-open');
    });
  }

  if (no) {
    no.addEventListener('click', function () {
      window.location.href = 'https://www.google.com';
    });
  }

  var reveals = document.querySelectorAll('.lp-reveal');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach(function (el) {
      el.classList.add('is-in');
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  reveals.forEach(function (el) {
    io.observe(el);
  });
})();
