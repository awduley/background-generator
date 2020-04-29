window.onload = onStart;

function onStart() {
  gradientGenerator.style.backgroundColor = '#ffffff';
}

// Variables for the DOM elements and the hex array
const direction = document.querySelector('.direction');
const hexNum1 = document.querySelector('.hex-number1')
const hexNum2 = document.querySelector('.hex-number2')
const rgbNum1 = document.querySelector('.rgb-number1')
const rgbNum2 = document.querySelector('.rgb-number2')
const firstDirection = document.querySelector('.first-direction');
const secondDirection = document.querySelector('.second-direction');
const gradientGenerator = document.querySelector('.gradient-generator');

const gradientButton = document.querySelector('.gradient-generator__button')
const sound = document.querySelector('.sound');

const hexArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
const directionArray = ['top','top right', 'right', 'bottom right', 'bottom', 'bottom left', 'left', 'top left'];

let hexColor1 = '#';
let hexColor2 = '#';
let finalRgbNum1;
let finalRgbNum2;
let secondDir;
let randDir;

// Function to generate 2 random hex numbers and convert
// them to rgb values
function getHexColor() {

  for(let i = 0; i < 12; i ++) {
    let randNum = Math.floor(Math.random() * hexArray.length);
    hexColor1.length <= 6 ? hexColor1 += hexArray[randNum] : hexColor2 += hexArray[randNum]
  }

  hexSplitColor1 = hexColor1.split('');
  hexSplitColor2 = hexColor2.split('');

  // Converting letters into numbers for the first hex color
  hexFinal1 = hexSplitColor1.map(char => {
    if(char === 'a') {
      return char = 10;
    } else if(char === 'b') {
      return char = 11;
    } else if(char === 'c') {
      return char = 12;
    } else if(char === 'd') {
      return char = 13;
    } else if(char === 'e') {
      return char = 14;
    } else if(char === 'f') {
      return char = 15;
    } else {
      return char = parseInt(char)
    }
  });

  // Converting letters into numbers for the second hex color
  hexFinal2 = hexSplitColor2.map(char => {
    if(char === 'a') {
      return char = 10;
    } else if(char === 'b') {
      return char = 11;
    } else if(char === 'c') {
      return char = 12;
    } else if(char === 'd') {
      return char = 13;
    } else if(char === 'e') {
      return char = 14;
    } else if(char === 'f') {
      return char = 15;
    } else {
      return char = parseInt(char)
    }
  });

  // Using array methods to get the final resut for the first rgb number
  let r1 = hexFinal1.slice(1,3);
  let g1 = hexFinal1.slice(3,5);
  let b1 = hexFinal1.slice(5,7);

  let r1Computed = (r1[0] * 16) + r1[1];
  let g1Computed = (g1[0] * 16) + g1[1];
  let b1Computed = (b1[0] * 16) + b1[1];

  // Using array methods to get the final resut for the second rgb number
  let r2 = hexFinal2.slice(1,3);
  let g2 = hexFinal2.slice(3,5);
  let b2 = hexFinal2.slice(5,7);

  let r2Computed = (r2[0] * 16) + r2[1];
  let g2Computed = (g2[0] * 16) + g2[1];
  let b2Computed = (b2[0] * 16) + b2[1];
  
  // Final rgb numbers
  finalRgbNum1 = `rgb(${r1Computed}, ${g1Computed}, ${b1Computed})`;
  finalRgbNum2 = `rgb(${r2Computed}, ${g2Computed}, ${b2Computed})`;

  // Picking a random direction for the gradient
  let randNum2 = Math.floor(Math.random() * directionArray.length);
  randDir = directionArray[randNum2];

  switch(randDir) {
    case 'top':
      secondDir = 'bottom';
      break;
    case 'top right':
      secondDir = 'bottom left'
      break;
    case 'right':
      secondDir = 'left';
      break;
    case 'bottom right':
      secondDir = 'top left';
      break;
    case 'bottom':
      secondDir = 'top';
      break;
    case 'bottom left':
      secondDir = 'top right';
      break;
    case 'left':
      secondDir = 'right';
      break;
    case 'top left':
      secondDir = 'bottom right'
  }
}

// Event handler for the gradient button 
gradientButton.addEventListener('click', () => {
  sound.currentTime = 0;
  sound.volume = .1;
  sound.play();
  
  getHexColor()
  hexNum1.textContent = hexColor1;
  hexNum1.style.color = hexColor1;

  hexNum2.textContent = hexColor2;
  hexNum2.style.color = hexColor2;

  rgbNum1.textContent = finalRgbNum1;
  rgbNum1.style.color = hexColor1;

  rgbNum2.textContent = finalRgbNum2;
  rgbNum2.style.color = hexColor2;

  gradientGenerator.style.background = `linear-gradient(to ${secondDir}, ${hexColor1}, ${hexColor2})`;
  firstDirection.textContent = randDir;
  secondDirection.textContent = secondDir;
  hexColor1 = '#';
  hexColor2 = '#';
  finalRgbNum1 = 'rgb';
  finalRgbNum2 = 'rgb'; 
});