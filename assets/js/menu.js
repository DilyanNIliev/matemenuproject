function toggleMenu(button) {
  const nav = document.getElementById('main-nav');
  const navLinks = nav.querySelectorAll('a');

  // Превключване на класа .show
  nav.classList.toggle('show');

  // Промяна на текста на бутона
  button.textContent = nav.classList.contains('show') ? '✖' : '☰';

  // Затвори менюто при клик на някоя от връзките
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('show');
      button.textContent = '☰';
    });
  });
}
