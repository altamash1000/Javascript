// Function to display the riddle
function displayRiddle(riddle) {
    const riddleContainer = document.getElementById('riddleContainer');
    riddleContainer.innerHTML = riddle;
  }
  
  // Function to handle button clicks
  function handleButtonClick(caseNumber) {
    switch (caseNumber) {
      case 0:
        displayRiddle("Riddle for Case 0: What has keys but can't open locks?");
        break;
  
      case 1:
        displayRiddle("Riddle for Case 1: What comes once in a minute, twice in a moment, but never in a thousand years?");
        break;
  
      case 2:
        displayRiddle("Riddle for Case 2: I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?");
        break;
  
      case 3:
        displayRiddle("Riddle for Case 3: I am taken from a mine, and shut in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?");
        break;
  
      case 4:
        displayRiddle("Riddle for Case 4: What has a heart that doesn't beat?");
        break;
  
      case 5:
        displayRiddle("Riddle for Case 5: What has cities but no houses, forests but no trees, and rivers but no water?");
        break;
  
      default:
        displayRiddle("Invalid case number");
        break;
    }
  }
  