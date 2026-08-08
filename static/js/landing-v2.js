(function () {
  'use strict';

  var yearEl = document.getElementById('v2Year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var age = document.getElementById('v2Age');
  var yes = document.getElementById('v2AgeYes');
  var no = document.getElementById('v2AgeNo');
  var key = 'v2AgeConfirmed';

  if (age && !sessionStorage.getItem(key)) {
    age.classList.add('is-open');
  }

  if (yes) {
    yes.addEventListener('click', function () {
      sessionStorage.setItem(key, 'true');
      age.classList.remove('is-open');
    });
  }

  if (no) {
    no.addEventListener('click', function () {
      window.location.href = 'https://www.google.com';
    });
  }

  var reveals = document.querySelectorAll('.v2-reveal');
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
    { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
  );

  reveals.forEach(function (el) {
    io.observe(el);
  });
})();
