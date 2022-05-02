// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();

import {searchNews,searchQuery,appendNews} from "./fetch.js";



function def (){
    let value=localStorage.getItem("searched value");
    searchQuery(value).then((data)=>{
            console.log(data);
            // localStorage.setItem("data")
            let container=document.querySelector("#results");
            container.innerHTML=null;
            appendNews(data,container);
        }) 
}
def();

let search=(e)=>{
    if(e.key=="Enter"){
     
        let value=document.querySelector("#search_input").value;
        // localStorage.setItem("searched value",value);
        searchQuery(value).then((data)=>{
            console.log(data);
            // localStorage.setItem("data")
            let container=document.querySelector("#results");
            container.innerHTML=null;
            appendNews(data,container);
        })
    }
}

document.querySelector("#search_input").addEventListener("keydown",search);
