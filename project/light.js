const uMissedMessage = document.querySelector('#u-missed')
const shootingButton = document.querySelector('#shoot-him')

shootingButton.addEventListener('click', bullet.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      bullet.style.right = timePassed / 5 + 'px';
      bullet.style.top = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer), 
      uMissedMessage.style.display = 'block';

    }, 20);
  })

