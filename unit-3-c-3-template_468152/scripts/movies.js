// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page



// http://www.omdbapi.com/?i=tt3896198&apikey=15680150&s=avengers
let  amount=localStorage.getItem("amount");
let wallet=document.querySelector("#wallet");
wallet.innerText=amount;



let id;
let movie_div=document.querySelector("#movies");
async function searchMovies(){
    try{
        const query=document.querySelector("#search").value;
        const url=`http://www.omdbapi.com/?i=tt3896198&apikey=15680150&s=${query}`;
        const res=await fetch(url);
        const data=await res.json();
        // console.log(data.Search);
        // appendMovies(data.Search)
        return data.Search;

    }catch(err){
        console.log(err);
    }
}
function appendMovies(data){
    movie_div.innerHTML=null;
data.forEach(el => {
    let div=document.createElement("div");
    div.setAttribute("class","movie_tab")
    let img=document.createElement("img");
    img.src=el.Poster;
    let title=document.createElement("p");
    title.innerText=el.Title;
    let btn=document.createElement("button");
    btn.innerText="Book Now"
    btn.onclick=()=>{
        bookFun(el);
    }
    btn.setAttribute("class","book_now");
    div.append(img,title,btn,);
    movie_div.append(div);
});
}
async function main(){
    let data=await searchMovies();
    if(data==undefined){
        return false;
    }
    appendMovies(data);
}
function debounce(main,delay){
    if(id){clearTimeout(id);

    };
    id=setTimeout(function(){
        main();
    },delay);
}
function bookFun(el){
    window.location.href="checkout.html";
    localStorage.setItem("movie",JSON.stringify(el));
}