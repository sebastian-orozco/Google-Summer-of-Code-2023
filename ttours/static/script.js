const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

$(document).ready(function() {
    // Get the button element
    var getLocationButton = document.getElementById("n");

    // Add a click event listener to the button
    getLocationButton.addEventListener("click", function() {
      // Check if the Geolocation API is supported by the browser
      if (navigator.geolocation) {
        // Call the getCurrentPosition() method to get the user's location
        navigator.geolocation.getCurrentPosition(sendLocationToServer, handleLocationError);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    });
  });

  // Function to handle the successful retrieval of location
  function sendLocationToServer(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Set the location data in the hidden input fields
    document.getElementById("latitudeInput").value = latitude;
    document.getElementById("longitudeInput").value = longitude;

    // Submit the form
    document.getElementById("locationForm").submit();
  }

  // Function to handle errors in retrieving location
  function handleLocationError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

document.addEventListener('DOMContentLoaded', function () {
  const defaultDiv = document.getElementById('defaultDiv');
  const alternateDiv = document.getElementById('alternateDiv');
  const additionalDivs = document.querySelector('.additional-divs');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');

  rightButton.addEventListener('click', function () {
    defaultDiv.style.display = 'none';
    alternateDiv.style.display = 'block';
    additionalDivs.style.display = 'block';

    rightButton.classList.add('button-underlined');
    leftButton.classList.remove('button-underlined');
  });

  leftButton.addEventListener('click', function () {
    defaultDiv.style.display = 'block';
    alternateDiv.style.display = 'none';
    additionalDivs.style.display = 'block';

    leftButton.classList.add('button-underlined');
    rightButton.classList.remove('button-underlined');
  });
});

  