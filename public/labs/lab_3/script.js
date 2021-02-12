const images = ['images/onigiri_1.png', 'images/onigiri_2.png', 'images/onigiri_3.png', 'images/onigiri_4.png', 'images/roll_1.png', 'images/roll_2.png', 'images/roll_3.png'];
let index = 0;
let shownImage = document.getElementById('main-image');
shownImage.src = images[0];
function showImage(direction)
{
  if (direction === 'left') {
    index--;
  }
  else {
    index++;
    index %= images.length;
  }
  
  if (index < 0) {
    index = images.length - 1;
  }
  shownImage.src = images[index];
}