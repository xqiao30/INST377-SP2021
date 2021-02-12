function arraymethod() {
  const rightButton = doucment.querySelector('scrollright');
  const leftButton = document.querySelector('scrollLeft');
  rightButton.addEventListener('click', (event) => {
    //const array1 = [1, 2, 3, 4, 5]; 
    const layout = document.querySelector('layout1');
    const classes = layout.classList;
    console.log(classes.value);
    let track = 1;
    let className;
    if (track !== 5) {
      if (classes.value === 'layout1') {
        className = 'layout2';
        track = 2;
      }
      else if (classes.value === 'layout2') {
        className = 'layout3';
        track = 3;
      }
      else if (classes.value === 'layout3') {
        className = 'layout4';
        track = 4;
      }
      else if (classes.value === 'layout4') {
        className = 'layout5';
        track = 5;
      }
    }
    console.log(className);
    layout.classlist = className;
  })
  leftButton.addEventListener('click', (event) => {
    const layout = document.querySelector('layout1');
    const classes = layout.classList;
    console.log(classes.value);
    let track = 5;
    let className;
    if (track !== 1) {
      if (classes.value === 'layout2') {
        className = 'layout1';
        track = 1;
      }
      else if (classes.value === 'layout3') {
        className = 'layout2';
        track = 2;
      }
      else if (classes.value === 'layout4') {
        className = 'layout3';
        track = 3;
      }
      else if (classes.value === 'layout5') {
        className = 'layout4';
        track = 4;
      }
    }
    console.log(className);
    layout.classlist = className;
})
}
window.onload = arraymethod;