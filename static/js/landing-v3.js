(function () {
  'use strict';

  var yearEl = document.getElementById('wYear');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var age = document.getElementById('wAge');
  var yes = document.getElementById('wAgeYes');
  var no = document.getElementById('wAgeNo');
  var key = 'wAgeConfirmed';

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

  var bottles = window.W_BOTTLES || [];
  var idx = 0;
  var figure = document.getElementById('wFigure');
  var img = document.getElementById('wBottle');
  var nameEl = document.getElementById('wName');
  var typeEl = document.getElementById('wType');
  var nextBtn = document.getElementById('wNext');

  function show(i) {
    if (!bottles.length || !img) return;
    idx = (i + bottles.length) % bottles.length;
    var item = bottles[idx];

    if (figure) figure.classList.add('is-switching');

    window.setTimeout(function () {
      img.src = item.src;
      img.alt = item.name;
      if (nameEl) nameEl.textContent = item.name;
      if (typeEl) typeEl.textContent = item.type;
      if (figure) figure.classList.remove('is-switching');
    }, 180);
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      show(idx + 1);
    });
  }
})();
