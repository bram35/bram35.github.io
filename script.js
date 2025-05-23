document.addEventListener('keydown', function(e) {
    if (e.code === 'Space') {
      const img = document.createElement('img');
      img.src = 'Src/Beer.jpg'; // Zorg dat het pad klopt

      // Styling in JS
      Object.assign(img.style, {
        position: 'absolute',
        left: Math.random() * window.innerWidth + 'px',
        top: Math.random() * window.innerHeight + 'px',
        width: '100px',
        height: 'auto',
        zIndex: '999', // bovenop alles
        pointerEvents: 'none' // zodat je achterliggende elementen kunt blijven aanklikken
      });

      document.body.appendChild(img);
    }
  });