const form=document.querySelector('form')

//These usecase will give you empty value and that we do not wanted that is why we declare it inside the function
// const height=parseInt(document.querySelector('#height').value)
// const weight=parseInt(document.querySelector('#weight').value)

form.addEventListener('submit',function(e) {
    e.preventDefault();

    //To provide values and declaring it inside the function will allow the extraction only when we will submit it-
    const height=parseFloat(document.querySelector('#height').value);
    const weight=parseFloat(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)) {
        results.innerHTML="Please give a valid height";
    }
    else if(weight==='' || weight<0 || isNaN(weight)) {
        results.innerHTML="Please give a valid weight";
    }
    else {
        //Claculate bmi
        const bmi=(weight/((height*height)/10000)).toFixed(2); //'toFixed' fix the decimals 
        
        let category;
        if(bmi<18.60) {
            category="Under Weight"
        }
        else if(bmi >=18.60 && bmi< 24.90) {
            category="Normal Weight"
        }
        else {
            category="Over Weight"
        }
        //show result
        results.innerHTML = `<span>${bmi}</span> - <span>${category}</span>`;
        //Ye ek dusra tareeka hai new element bana kar results mei add kake batana-

        // results.innerHTML=`<span>${bmi}</span>`;

        //Agar results mei sirf bmi daalte ho toh aise category add karni hogi-
        // if(bmi<18.60) {
        //     const li=document.createElement('li')
        //     li.appendChild(document.createTextNode("Under Weight"))
        //     document.querySelector('#results').appendChild(li)
        // }
        // else if(bmi>=18.60 && bmi<24.90) {
        //     const li=document.createElement('li')
        //     li.appendChild(document.createTextNode("Normal Weight"))
        //     document.querySelector('#results').appendChild(li)
        // }
        // else {
        //     const li=document.createElement('li')
        //     li.appendChild(document.createTextNode("Over Weight"))
        //     document.querySelector('#results').appendChild(li)
        // }
    }

});