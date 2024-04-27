var x = document.getElementById('show-pass');
var y = document.getElementById('pass');
var img = x.querySelector("img")
x.addEventListener('click' , function() {
   if(y.type === 'password'){
        y.type ='text';
   }else{
    y.type='password';
   }
   if(img.src.includes('open')){
        img.src='images/eye close.svg';
   }
   else{
        img.src='images/eye open.svg';
   }
})