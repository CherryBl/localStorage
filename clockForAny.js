const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  let hours = date.getHours();
    if(hours<10){hours="0"+hours};
  let minutes = date.getMinutes();
    if(minutes<10){minutes="0"+minutes};
  let seconds = date.getSeconds();
    if(seconds<10){seconds="0"+seconds};
  clockTitle.innerText = hours+":"+minutes+":"+seconds;
}

function init(){
  getTime();
  setInterval(getTime, 1000)
}
init();
