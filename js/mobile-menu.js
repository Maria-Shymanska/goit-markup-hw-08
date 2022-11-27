(() => {
  const menueBtnRef = document.querySelector('[data-menue-btn]');
  const mobileMenueRef = document.querySelector('[data-menue]');

  menueBtnRef.addEventListener('click', () => {
    const expanded = menueBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menueBtnRef.classList.toggle('is-open');
    menueBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenueRef.classList.toggle('is-open');
  });
})();
