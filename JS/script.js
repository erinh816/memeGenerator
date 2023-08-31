// grab elements on the page, urlinput, button and the div for images
const imageUrl = document.getElementById('imageUrl');
const appendImageButton = document.getElementById('submitButton');
const imageContainer = document.getElementById('imageContainer');

const topText = document.getElementById('topText');
const bottomText = document.getElementById('bottomText');



// add function to button with cick functionality
appendImageButton.addEventListener('click', function () {
  //get the input url
  const imageUrlVariable = imageUrl.value;
  const topTextInput = topText.value;
  const bottomTextInput = bottomText.value;

  //create a subdiv for each image with text to be added to the div container, easier to style
  const singleContainer = document.createElement('div');
  singleContainer.classList.add('single-container');

  //create the image with input url and class for potential styling
  const singlImage = document.createElement('img');
  singlImage.src = imageUrlVariable;
  singlImage.classList.add('individualImage');

  // Append the image
  singleContainer.appendChild(singlImage);

  //create text on top
  const topTextElement = document.createElement('div');
  topTextElement.textContent = topTextInput;
  topTextElement.classList.add('textInput', 'top-text'); // Apply styling to the caption
  singleContainer.appendChild(topTextElement);

  // create text on bottom
  const bottomTextElement = document.createElement('div');
  bottomTextElement.textContent = bottomTextInput;
  bottomTextElement.classList.add('textInput', 'bottom-text'); // Apply styling to the caption
  singleContainer.appendChild(bottomTextElement);


  // // Append single image&text bundle to the original div in html
  imageContainer.appendChild(singleContainer);


  //delete inputs from last submission
  imageUrl.value = '';
  topText.value = '';
  bottomText.value = '';


  //add a delete feature on the image&text bundle
  // opposite as line 44, instead of appendChild, use removeChild
  singlImage.addEventListener('click', function () {

    imageContainer.removeChild(singleContainer);

  });

});
