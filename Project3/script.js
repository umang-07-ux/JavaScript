const clock=document.getElementById('clock')

setInterval(() => {
    let date=new Date();
    // console.log(date.toLocaleTimeString()); // Just see how itnis working in console.
    clock.innerHTML=date.toLocaleTimeString();
}, 1000); //setInterval ek function hai jo ki baar baar chalega uss time gap mei jo aap ne diya hai jaise yaha par 1000 ms and value time ki humesha ms mei hi hoti hai
