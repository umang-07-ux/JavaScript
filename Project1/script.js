const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function(button) {
    console.log(button);
    
    //Event Listener JavaScript ka ek method hai jo kisi HTML element par hone wale event ko detect karta hai aur uske according code execute karta hai.
    button.addEventListener('click',function(e) {
        console.log(e)
        console.log(e.target) //'.target' ka matlab hai jis HTML element par actual event hua hai, us element ko access karna.
        if(e.target.id==='grey') {
                body.style.backgroundColor=e.target.id; //this will change the background color by clicking on grey
        }
        if(e.target.id==='white') {
                body.style.backgroundColor=e.target.id; //this will change the background color by clicking on white
        }
        if(e.target.id==='blue') {
                body.style.backgroundColor=e.target.id; //this will change the background color by clicking on blue
        }
        if(e.target.id==='yellow') {
                body.style.backgroundColor=e.target.id; //this will change the background color by clicking on yellow
        }
        if(e.target.id==='purple') {
            body.style.backgroundColor=e.target.id; //this will change the background color by clicking on purple
        }
    })
});
