// script.js

// Function to check the answer and display the result in a popup
function checkAnswer(option) {
    const correctAnswer = 2; // Assume Option 2 is correct
  
    const popupMessage = document.getElementById('popup-message');
    const popupText = document.getElementById('popup-text');
  
    // Check if the selected answer is correct
    if (option === correctAnswer) {
      popupText.textContent = 'You are right!';
      popupMessage.style.backgroundColor = 'green';
    } else {
      popupText.textContent = 'Sorry, that\'s wrong!';
      popupMessage.style.backgroundColor = 'red';
    }
  
    popupMessage.style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup() {
    document.getElementById('popup-message').style.display = 'none';
  }
  