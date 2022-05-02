// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

// https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

import {searchNews,searchQuery,appendNews} from "./fetch.js";
function defaul (){
    let value="in"
    searchNews(value).then((data)=>{
        console.log(data);
        let container=document.querySelector("#results");
        container.innerHTML=null;
        appendNews(data,container);
    })
}
defaul();

let search=(e)=>{
    if(e.key=="Enter"){
        window.location.href="search.html"
        let value=document.querySelector("#search_input").value;
        localStorage.setItem("searched value",value);
        // searchNews(value).then((data)=>{
        //     console.log(data);
        //     localStorage.setItem("data")
        //     let container=document.querySelector("#results").value;
        //     appendNews(data,container);
        // })
    }
}

document.querySelector("#search_input").addEventListener("keydown",search);






let countries=document.querySelector("#sidebar").children;
for(let el of countries){
    el.addEventListener("click",cSearch);
}
function cSearch(){
    console.log(this.id);
    
    searchNews(this.id).then((data)=>{
        console.log(data);
        let container=document.querySelector("#results");
        container.innerHTML=null;
        appendNews(data,container);
    })
}



