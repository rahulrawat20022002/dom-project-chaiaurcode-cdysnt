const clock=document.getElementById("clock");

setInterval(()=>{
  const d=new Date();
  let time=d.toLocaleTimeString();
  clock.innerHTML=time
},1000)
