const body=document.getElementById("body")
const button=document.querySelectorAll(".button");

button.forEach((elem)=>{
  elem.addEventListener('click',function(e){
    console.log(elem.id);
    console.log(e.target.id)

    if(e.target.id===elem.id){
      body.style.backgroundColor=e.target.id;
    }
  })
})