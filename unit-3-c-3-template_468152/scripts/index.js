// Store the wallet amount to your local storage with key "amount"

function addToWallet(){
    let addedamount=localStorage.getItem("amount");
// console.log(addedamount);
let amount=document.querySelector("#amount").value;
// console.log(amount);
let wallet=document.querySelector("#wallet");
   
    if( addedamount==null){
        wallet.innerText=amount;
        localStorage.setItem("amount",amount);
    }
    
    else{
        // console.log(addedamount);
        let newamount=Number(addedamount) + Number(amount);
        
        wallet.innerText=newamount;
        localStorage.setItem("amount",newamount);

    }
}
