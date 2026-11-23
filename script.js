const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => {
  if (event.target.closest('a')) { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
});

document.querySelectorAll('.quiz-card').forEach(card => {
  const feedback = card.querySelector('.quiz-feedback');
  card.querySelectorAll('[data-choice]').forEach(button => {
    button.addEventListener('click', () => {
      const correct = button.dataset.choice === card.dataset.answer;
      card.querySelectorAll('[data-choice]').forEach(option => {
        option.setAttribute('aria-pressed', String(option === button));
      });
      feedback.textContent = `${correct ? 'Isso mesmo!' : 'Boa tentativa!'} ${card.dataset.explanation}`;
    });
  });
});
