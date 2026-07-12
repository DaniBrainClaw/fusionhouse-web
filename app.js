// Fusion House — JS mínimo (sin dependencias)
// Funcionalidad: nav móvil + FAQ accesible con animación suave

(function () {
  'use strict';

  // === NAV MÓVIL ===
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('nav ul');
  if (navToggle && navList) {
    navToggle.addEventListener('click', function () {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navList.classList.toggle('open', !expanded);
    });

    // Cerrar nav al hacer clic en un enlace (móvil)
    navList.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
      });
    });
  }

  // === FAQ accesible ===
  // El <details>/<summary> nativo ya funciona, pero le añadimos:
  // 1. Smooth height animation al abrir/cerrar
  // 2. Cierre automático al abrir otro (acordeón opcional)
  // 3. Scroll-into-view considerando el header fixed
  const faqItems = document.querySelectorAll('.faq-item');
  const HEADER_OFFSET = 90;

  faqItems.forEach(function (item) {
    const summary = item.querySelector('summary');
    const body = item.querySelector('.faq-body');

    if (!summary || !body) return;

    // Marcar abierto/cerrado para CSS
    item.classList.toggle('open', item.open);

    summary.addEventListener('click', function (e) {
      e.preventDefault();
      const willOpen = !item.open;

      // Cerrar todos los demás (modo acordeón — solo uno abierto a la vez)
      faqItems.forEach(function (other) {
        if (other !== item && other.open) {
          other.open = false;
          other.classList.remove('open');
        }
      });

      // Toggle del actual
      item.open = willOpen;
      item.classList.toggle('open', willOpen);

      // Scroll-into-view considerando header fixed
      if (willOpen) {
        // Esperar al siguiente frame para que el contenido sea visible
        requestAnimationFrame(function () {
          const rect = summary.getBoundingClientRect();
          if (rect.top < HEADER_OFFSET || rect.top > window.innerHeight * 0.6) {
            const top = window.scrollY + rect.top - HEADER_OFFSET - 16;
            window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
          }
        });
      }
    });

    // Accesibilidad teclado: Enter/Space ya nativos en <summary>
  });

  // === Header shadow al hacer scroll ===
  const header = document.querySelector('header');
  let lastScroll = 0;
  function onScroll() {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', y > 8);
    }
    lastScroll = y;
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();