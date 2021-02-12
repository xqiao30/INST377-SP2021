const images = ['images/onigiri_1.png', 'images/onigiri_2.png', 'images/onigiri_3.png', 'images/onigiri_4.png', 'images/roll_1.png', 'images/roll_2.png', 'images/roll_3.png'];
let index = 0;
let the_image = document.getElementById("main-image");
the_image.src = images[0];

function show_image(direction)
{
  if (direction == "left")
  {
    index--;
  }
  else
  {
    index++;
    index %= images.length;
  }
  
  if (index < 0)
  {
    index = images.length - 1;
  }
  
  the_image.src = images[index];
}