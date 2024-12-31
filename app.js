const URL = "https://cat-fact.herokuapp.com/facts";
const button=document.querySelector("#btn");
const para=document.querySelector(".field");
let count=0;

button.addEventListener("click", async () => {
    try {
        const response=await fetch(URL);
        if(!response.ok) {
            throw new Error("Network response was not ok...");

        }
        console.log(response);
        //Parse the Json
        const facts=await response.json();
        if(count<5 && count<facts.length) {
            para.innerText=facts[count].text;
            count++;
        }
        else
        para.innerText=`Facts limit exceedded`;
    }

    catch(error) {
        para.innerText=`Error fetching data from the API : ${error}`;
    }
    
});
