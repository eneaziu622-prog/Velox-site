/* =============================================================
   VELOX — atmosphere layer
   Injects soft color orbs behind the content and drifts them
   gently as the page scrolls. Pure decoration: aria-hidden,
   pointer-events none, transform-only, respects reduced motion.
   ============================================================= */
(function () {
  var layer = document.querySelector('.bg-layer');
  if (!layer) {
    layer = document.createElement('div');
    layer.className = 'bg-layer';
    layer.setAttribute('aria-hidden', 'true');
    document.body.insertBefore(layer, document.body.firstChild);
  }

  /* Orbs: [variant class, scroll parallax factor] */
  var defs = [['orb-a', 0.05], ['orb-b', 0.09], ['orb-c', 0.035]];
  var orbs = defs.map(function (d) {
    var wrap = document.createElement('div');
    wrap.className = 'orb-wrap ' + d[0];
    var orb = document.createElement('div');
    orb.className = 'orb';
    wrap.appendChild(orb);
    layer.appendChild(wrap);
    return { el: wrap, factor: d[1] };
  });

  var noise = document.createElement('div');
  noise.className = 'bg-noise';
  layer.appendChild(noise);

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY || window.pageYOffset || 0;
      for (var i = 0; i < orbs.length; i++) {
        orbs[i].el.style.transform = 'translate3d(0,' + (-y * orbs[i].factor).toFixed(1) + 'px,0)';
      }
      ticking = false;
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
