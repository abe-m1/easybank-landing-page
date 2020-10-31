const navButton = document.querySelector('#nav-button');
navButton.addEventListener('click', (e) => {
  e.preventDefault();
  navButton.children[0].classList.toggle('hide');
  navButton.children[1].classList.toggle('show');

  document.querySelector('.modal-overlay').classList.toggle('show');
  document.querySelector('.nav-container').classList.toggle('show');

  //when modal open, set content to fixed so it can't be scrolled
  document.querySelector('.content').classList.toggle('fix');
});
