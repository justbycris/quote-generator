let showAdvice = document.getElementById('youradvice');
var clickMe = document.getElementById('btn-advice')
var numAdvice = document.getElementById('num');
let tips = [];


function getAdvice() {
    //assign URL to variable
    const url = 'https://api.adviceslip.com/advice'

    /*I was getting the same data response since the fetch request 
    was happening to soon after each other, so I tried cleaning the cache 
    to get a new advice everytime I click the button */
    fetch(url,  { cache: "no-cache" })
    .then((res) => {return res.json()})
    .then((data) => {
        //Asign data to my tips array
        tips = data.slip;
     
        //Display the advice's id
        numAdvice.innerHTML = `${tips.id}`;
        
        //Display the advice
        showAdvice.innerHTML = `"${tips.advice}"`;
        
    })

    //Throw an Error Message if fetch fails
    .catch((err) => {
        console.error(`There was an error: ${err}`);
          });

}

//Call advice when clicking on button
clickMe.addEventListener("click", getAdvice)
