const results=document.getElementById("results")
const form=document.querySelector("form");


function calculate(){
  form.addEventListener('submit',function(e){
    const ht=parseInt(document.getElementById("height").value);
    const wt=parseInt(document.getElementById("weight").value);
    let result=((wt)/((ht*ht)/10000))
    console.log(result)
    

    e.preventDefault();
    if(result<18.6){
      results.innerHTML="Under Weight";
      
    }
    else if(result>=18.6 && result<24.9){
      results.innerHTML="Normal Range";

    }
    else {
      results.innerHTML="OverWeight";

    }
  })
}

calculate();