//your JS code here. If required.
// Function to handle the increment button click
    function incrementCounter() {
      // Get the current counter value
      let counterElement = document.getElementById('counter');
      let currentCounterValue = parseInt(counterElement.innerText);

      // Display an alert with the un-incremented value
      alert("Un-incremented Value: " + currentCounterValue);

      // Increment the counter value
      counterElement.innerText = currentCounterValue + 1;
    }