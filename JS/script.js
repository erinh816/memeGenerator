// grab elements
const imageUrl = document.getElementById('imageUrl');
const appendImageButton = document.getElementById('submitButton');
const imageContainer = document.getElementById('imageContainer');


const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');


// add functionalities to the submitbutton with cick functionality
appendImageButton.addEventListener('click', function () {
  //get the input url
  const imageUrlVariable = imageUrl.value;
  const topTextInput = topText.value;
  const bottomTextInput = bottomText.value;

  //create a subdiv for each image with text to be added to the div container
  //easier to style later as a whole
  const singleContainer = document.createElement('div');
  singleContainer.classList.add('single-container');

  //create the image with input url and class
  const singlImage = document.createElement('img');
  singlImage.src = imageUrlVariable;
  singlImage.classList.add('individualImage');
  singleContainer.appendChild(singlImage);

  //create text on top with input and class
  const topTextElement = document.createElement('div');
  topTextElement.textContent = topTextInput;
  topTextElement.classList.add('textInput', 'top-text');
  singleContainer.appendChild(topTextElement);

  // create text on bottom with input and class
  const bottomTextElement = document.createElement('div');
  bottomTextElement.textContent = bottomTextInput;
  bottomTextElement.classList.add('textInput', 'bottom-text');
  singleContainer.appendChild(bottomTextElement);


  //Append single image&text bundle to the existing image div in html
  imageContainer.appendChild(singleContainer);


  //delete inputs from last submission
  imageUrl.value = '';
  topText.value = '';
  bottomText.value = '';

  //add a delete feature on the image&text bundle
  // opposite as line 43, instead of appendChild, use removeChild
  singlImage.addEventListener('click', function () {
    imageContainer.removeChild(singleContainer);
  });
});
