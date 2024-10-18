// Your code here
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 10}px`;
    }
  }
  

  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (left < 360) { 
      dodger.style.left = `${left + 10}px`;
    }
  }
  
