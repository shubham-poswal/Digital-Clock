
function updateClock() {
    const clock = document.getElementById("clock");
    const now = new Date();
  
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // if 0 -> 12
  
    const formattedTime = [
      hours.toString().padStart(2, '0'),
      minutes.toString().padStart(2, '0'),
      seconds.toString().padStart(2, '0')
    ].join(':') + ' ' + ampm;
  
    clock.textContent = formattedTime;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // Initial call
  