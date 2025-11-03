document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
      const img = document.createElement('img');
      img.src = '../dierentuin/gras.jpeg';

      Object.assign(img.style, {
        position: 'absolute',
        left: Math.random() * window.innerWidth + 'px',
        top: Math.random() * window.innerHeight + 'px',
        width: '100px',
        height: 'auto',
        zIndex: '999',
        pointerEvents: 'none',
        overflow: 'hidden',
      });

      document.body.appendChild(img);
    }
  });