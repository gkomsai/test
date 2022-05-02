const searchNews=async (value) =>{
try{
    const url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=${value}`
    const res= await fetch (url);
    const data=await res.json();
    return data.articles;

}catch(err){
console.log(err);
}
}

const searchQuery=async (value) =>{
    try{
        const url=`https://masai-mock-api.herokuapp.com/news?q=${value}`
        const res= await fetch (url);
        const data=await res.json();
        return data.articles;
    
    }catch(err){
    console.log(err);
    }
    }

const appendNews=(data,container)=>{
    data.forEach(el => {
      let div=document.createElement("div");
      div.setAttribute("class", "news");
      let img=document.createElement("img");
      img.src=el.urlToImage;
      let h3=document.createElement("h3");
      h3.innerText=el.title;
      let p=document.createElement("p");
      p.innerText=el.description;  
      div.append(img,h3,p);
      let title=el.title;
      let urlToImage=el.urlToImage;
      let description=el.description;
      let clickedNews={
        title,urlToImage,description
      }
      div.onclick=()=>{
          showNews(clickedNews);
      }
      container.append(div);
    });

   
}
function showNews(x){
    window.location.href="news.html";
    localStorage.setItem("news",JSON.stringify(x));
}



export {searchNews,searchQuery,appendNews};