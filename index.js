const form=document.querySelector('form')

form.addEventListener('submit',function(e){
e.preventDefault()
const temp=parseInt(document.querySelector('#temp').value)

const results=document.querySelector('#results')

if (temp===""||temp<0||isNaN(temp)) {
results.innerHTML=`please give a valid height ${temp}`;
    
}

else {
   const tempe=((9*temp)/5+32).toFixed(2);
   //show the results
   results.innerHTML=`<span>${tempe} : F</span>`;

  
}

 
})