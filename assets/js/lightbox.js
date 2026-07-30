// Visor de pantalla completa con zoom para galerías de fotos — reutilizable en cualquier ficha de propiedad.
var Lightbox = (function(){
  var images = [];
  var index = 0;
  var scale = 1, tx = 0, ty = 0;
  var overlay, imgEl, counterEl;
  var isPanning = false, panStartX = 0, panStartY = 0, startTx = 0, startTy = 0;
  var pinchStartDist = 0, pinchStartScale = 1;

  function touchDist(touches){
    var dx = touches[0].clientX - touches[1].clientX;
    var dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function applyTransform(){
    imgEl.style.transform = 'translate(' + tx + 'px,' + ty + 'px) scale(' + scale + ')';
    imgEl.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  function resetZoom(){
    scale = 1; tx = 0; ty = 0;
    applyTransform();
  }

  function toggleZoom(){
    if (scale === 1){ scale = 2.2; } else { resetZoom(); return; }
    applyTransform();
  }

  function render(){
    var item = images[index];
    imgEl.src = item.full;
    imgEl.alt = item.alt || '';
    resetZoom();
    if (counterEl) counterEl.textContent = (index + 1) + ' / ' + images.length;
  }

  function go(dir){
    index = (index + dir + images.length) % images.length;
    render();
  }

  function build(){
    overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML =
      '<button type="button" class="lightbox-close" aria-label="Cerrar">&#10005;</button>' +
      '<button type="button" class="lightbox-nav lightbox-prev" aria-label="Anterior">&#8249;</button>' +
      '<button type="button" class="lightbox-nav lightbox-next" aria-label="Siguiente">&#8250;</button>' +
      '<div class="lightbox-stage"><img class="lightbox-img" alt=""></div>' +
      '<div class="lightbox-counter"></div>';
    document.body.appendChild(overlay);

    imgEl = overlay.querySelector('.lightbox-img');
    counterEl = overlay.querySelector('.lightbox-counter');

    overlay.querySelector('.lightbox-close').addEventListener('click', close);
    overlay.querySelector('.lightbox-prev').addEventListener('click', function(){ go(-1); });
    overlay.querySelector('.lightbox-next').addEventListener('click', function(){ go(1); });
    overlay.addEventListener('click', function(e){ if (e.target === overlay) close(); });

    imgEl.addEventListener('dblclick', toggleZoom);

    imgEl.addEventListener('mousedown', function(e){
      if (scale === 1) return;
      isPanning = true; panStartX = e.clientX; panStartY = e.clientY; startTx = tx; startTy = ty;
      e.preventDefault();
    });
    window.addEventListener('mousemove', function(e){
      if (!isPanning) return;
      tx = startTx + (e.clientX - panStartX);
      ty = startTy + (e.clientY - panStartY);
      applyTransform();
    });
    window.addEventListener('mouseup', function(){ isPanning = false; });

    imgEl.addEventListener('touchstart', function(e){
      if (e.touches.length === 1 && scale > 1){
        isPanning = true;
        panStartX = e.touches[0].clientX; panStartY = e.touches[0].clientY;
        startTx = tx; startTy = ty;
      } else if (e.touches.length === 2){
        pinchStartDist = touchDist(e.touches);
        pinchStartScale = scale;
      }
    }, { passive: true });

    imgEl.addEventListener('touchmove', function(e){
      if (e.touches.length === 1 && isPanning){
        tx = startTx + (e.touches[0].clientX - panStartX);
        ty = startTy + (e.touches[0].clientY - panStartY);
        applyTransform();
      } else if (e.touches.length === 2){
        var d = touchDist(e.touches);
        scale = Math.min(4, Math.max(1, pinchStartScale * (d / pinchStartDist)));
        applyTransform();
      }
    }, { passive: true });

    imgEl.addEventListener('touchend', function(e){
      if (e.touches.length === 0){
        isPanning = false;
        if (scale < 1.05) resetZoom();
      }
    });

    window.addEventListener('keydown', function(e){
      if (!overlay.classList.contains('active')) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    });
  }

  function open(imgs, startIndex){
    if (!overlay) build();
    images = imgs;
    index = startIndex || 0;
    render();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close(){
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  return { open: open, close: close };
})();
