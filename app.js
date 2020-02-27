function fillBar(sec) {
  // Select the bar
  const bar = document.querySelector(".bar");
  const numat = document.querySelector(".num");
  // Percent where to start animating
  let atPercent = 0;

  // Every 2s animated the bar
  let timer = setInterval(function(sec) {
    // increase  by 1 every time
    atPercent++;

    // Set the width style of the bar
    // to atPercent
    bar.style.width = `${atPercent}%`;
    bar.style.backgroundColor = "green";
    //show the percentage
    numat.textContent = `${atPercent}%`;
    // Make sure that atPercent is not equal 100
    if (atPercent >= 100) {
      // if it is  then clear setInterval function
      clearInterval(timer);
    }
  }, (sec * 1000) / 100);
}
