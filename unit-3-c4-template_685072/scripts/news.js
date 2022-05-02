// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar();
import {searchNews,searchQuery,appendNews} from "./fetch.js";

let getnews=JSON.parse(localStorage.getItem("news"));



    let container=document.querySelector("#detailed_news");
    let img=document.createElement("img");
      img.src=getnews.urlToImage;
      let h3=document.createElement("h3");
      h3.innerText=getnews.title;
      let p=document.createElement("p");
      p.innerText=getnews.description;  
      container.append(img,h3,p);
