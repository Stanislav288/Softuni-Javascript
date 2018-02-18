function attachEventsListeners() {
  let daysBtn=document.getElementById('daysBtn');
  let hoursBtn=document.getElementById('hoursBtn');
  let minutesBtn=document.getElementById('minutesBtn');
  let secondsBtn=document.getElementById('secondsBtn');

  let days=document.getElementById('days');
  let hours=document.getElementById('hours');
  let minutes=document.getElementById('minutes');
  let seconds=document.getElementById('seconds');

  daysBtn.addEventListener('click',(event)=>{
    hours.value=24*Number(days.value);
    minutes.value=24*60*Number(days.value);
    seconds.value=24*60*60*Number(days.value);
  });

    hoursBtn.addEventListener('click',(event)=>{
        days.value=Number(hours.value)/24;
        minutes.value=60*Number(hours.value);
        seconds.value=60*60*Number(hours.value);
    });

    minutesBtn.addEventListener('click',(event)=>{
        days.value=Number(minutes.value)/(24*60);
        hours.value=Number(minutes.value)/60;
        seconds.value=60*Number(minutes.value);
    });

    secondsBtn.addEventListener('click',(event)=>{
        days.value=Number(seconds.value)/(24*60*60);
        hours.value=Number(seconds.value)/(60*60);
        minutes.value=Number(seconds.value)/60;
    });
}
