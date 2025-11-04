const rightNav = document.getElementById('right-nav');
const leftBar = document.getElementById('left-bar');
const about = document.getElementById('about');

// Show sidebars when user scrolls past the top of the About section and keep them visible
if (about && rightNav && leftBar) {
  const toggleShow = (show) => {
    if (show) {
      rightNav.classList.remove('translate-x-8','opacity-0','pointer-events-none');
      rightNav.classList.add('translate-x-0','opacity-100','pointer-events-auto');

      leftBar.classList.remove('-translate-x-8','opacity-0','pointer-events-none');
      leftBar.classList.add('translate-x-0','opacity-100','pointer-events-auto');
    } else {
      rightNav.classList.add('translate-x-8','opacity-0','pointer-events-none');
      rightNav.classList.remove('translate-x-0','opacity-100','pointer-events-auto');

      leftBar.classList.add('-translate-x-8','opacity-0','pointer-events-none');
      leftBar.classList.remove('translate-x-0','opacity-100','pointer-events-auto');
    }
  };

  // Compute a threshold near the top of About — once user scrolls past this, show the bars and keep them visible
  let triggerOffset = about.offsetTop - (window.innerHeight * 0.25);

  const recalcTrigger = () => {
    triggerOffset = about.offsetTop - (window.innerHeight * 0.25);
  };

  const onScroll = () => {
    const shouldShow = window.scrollY >= triggerOffset;
    toggleShow(shouldShow);
  };

  // Run on load in case page was opened scrolled down
  window.addEventListener('load', () => {
    recalcTrigger();
    onScroll();
  });

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', () => {
    recalcTrigger();
    onScroll();
  });
}

const cursor = document.getElementById('cursor');
const cursorSize = 600; // You can change this number to adjust cursor size

// Set initial cursor size
cursor.style.width = cursorSize + 'px';
cursor.style.height = cursorSize + 'px';

window.addEventListener('mousemove', (e) => {
    // Move the div to mouse position
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    cursor.style.transform = `translate3d(${mouseX - cursorSize/2}px, ${mouseY - cursorSize/2}px, 0)`;
});
const videoThumb = document.getElementById("videoThumb");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");

videoThumb.addEventListener("click", () => {
    videoModal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    videoModal.classList.add("hidden");
});
