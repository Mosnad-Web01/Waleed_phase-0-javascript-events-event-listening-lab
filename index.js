function addingEventListener() {
  const input = document.getElementById("button");

  // Anonymous function for the click event
  input.addEventListener("click", function () {
    alert("I was clicked!");
  });

  // Named function for the click event
  function clickAlert() {
    alert("I was clicked!");
  }

  input.addEventListener("click", clickAlert);
}

// Call the function to set up the event listeners
addingEventListener();
