function toggleMenu() {
  const dropdown = document.getElementById('menuDropdown');
  dropdown.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
  const menu = document.getElementById('menu');
  const dropdown = document.getElementById('menuDropdown');
  
  if (!menu.contains(event.target)) {
    dropdown.classList.remove('active');
  }
});


// // Handle menu position on scroll
// window.addEventListener('scroll', function() {
//   const menu = document.getElementById('menu');
//   const header = document.getElementById('header');
  
//   if (header) {
//     const headerBottom = header.offsetTop + header.offsetHeight;
    
//     if (window.scrollY > headerBottom - 60) {
//       menu.classList.add('fixed');
//     } else {
//       menu.classList.remove('fixed');
//     }
//   }
// });

// Handle menu position on scroll
// let menuRightPosition = null;

// window.addEventListener('scroll', function() {
//   const menu = document.getElementById('menu');
//   const header = document.getElementById('header');
  
//   if (header && menu) {
//     const headerBottom = header.offsetTop + header.offsetHeight;
    
//     if (window.scrollY > headerBottom - 60) {
//       // Calculate right position only once, when first becoming fixed
//       if (menuRightPosition === null) {
//         const menuRect = menu.getBoundingClientRect();
//         menuRightPosition = window.innerWidth - menuRect.right;
//       }
      
//       menu.classList.add('fixed');
//       menu.style.right = menuRightPosition + 'px';
//     } else {
//       menu.classList.remove('fixed');
//       menu.style.right = '';
//       menuRightPosition = null; // Reset for next time
//     }
//   }
// });

// Set menu position to align with header
window.addEventListener('load', function() {
  const menu = document.getElementById('menu');
  const header = document.getElementById('header');
  const container = document.getElementById('container');
  
  if (menu && header && container) {
    // Calculate right position based on header's right edge
    const headerRect = header.getBoundingClientRect();
    const rightPos = window.innerWidth - headerRect.right; // 20px from right edge
    menu.style.right = rightPos + 'px';
  }
});

// Recalculate on window resize
window.addEventListener('resize', function() {
  const menu = document.getElementById('menu');
  const header = document.getElementById('header');
  
  if (menu && header) {
    const headerRect = header.getBoundingClientRect();
    const rightPos = window.innerWidth - headerRect.right;
    menu.style.right = rightPos + 'px';
  }
});