// grab elements on the page, urlinput, button and the div for images
const imageUrl = document.getElementById('imageUrl');
const appendImageButton = document.getElementById('submitButton');
const imageContainer = document.getElementById('imageContainer');

// add function to button with cick functionality
appendImageButton.addEventListener('click', function () {
  //get the input url
  const imageUrlVariable = imageUrl.value;

  //create the image with input url and class for potential styling
  const singlImage = document.createElement('img');
  singlImage.src = imageUrlVariable;
  singlImage.classList.add('individualImage');

  // Append the image
  imageContainer.appendChild(singlImage);
});
