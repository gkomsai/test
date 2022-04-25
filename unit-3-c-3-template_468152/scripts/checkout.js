// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let  amount=localStorage.getItem("amount");
let wallet=document.querySelector("#wallet");
wallet.innerText=amount;
let clickedMovie=JSON.parse(localStorage.getItem("movie"));
let movie_div=document.querySelector("#movie");
let div=document.createElement("div");
let img=document.createElement('img');
img.src=clickedMovie.Poster;
let h2=document.createElement("h2");
h2.innerText=clickedMovie.Title;
div.append(h2,img);
movie_div.append(div);

function paymentFun(){
 
    let noofseats=document.querySelector("#number_of_seats").value;
    let requiredamount=noofseats*100;
    if(requiredamount>amount){
        alert("Insufficient Balance!");
    } else{
        alert("Booking successful!");
        let newamount=amount-requiredamount;
        localStorage.setItem("amount", newamount);
        wallet.innerText=newamount;
    }
}