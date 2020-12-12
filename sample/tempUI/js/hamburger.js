const toggle = () => {
  document.getElementById('line1').classList.toggle('line_1');
  document.getElementById('line2').classList.toggle('line_2');
  document.getElementById('line3').classList.toggle('line_3');
  document.getElementById('sidebar').classList.toggle('active');
  document.getElementById('overlay').classList.toggle('visible');
};
//sidebar外をクリックしてsidebarを閉じる
const close = () => {
  document.getElementById('sidebar').classList.remove('active');
  document.getElementById('line1').classList.remove('line_1');
  document.getElementById('line2').classList.remove('line_2');
  document.getElementById('line3').classList.remove('line_3');
  document.getElementById('overlay').classList.remove('visible');
};
document.getElementById('hamburger').addEventListener('click', toggle);
document
  .getElementsByClassName('container')[0]
  .addEventListener('click', close);
