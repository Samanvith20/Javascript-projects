let searchInputEl=document.getElementById("searchInput")
let searchResultsE1=document.getElementById("searchResults")
 function createAndAppendSearchResult(result){
    let { link, title, description } = result;
    // To create a div element

    let resultItemEl = document.createElement("div");
    resultItemEl.classList.add("result-item");

   // Add a title using anchor tag to get the title

    let titleEl = document.createElement("a");
    titleEl.href = link;
    titleEl.target = "_blank";
    titleEl.textContent = title;
    titleEl.classList.add("result-title");
    resultItemEl.appendChild(titleEl);

     // break the line

    let titleBreakEl = document.createElement("br");
    resultItemEl.appendChild(titleBreakEl);

    // adding the  link to get the "URL"

    let urlEl = document.createElement("a");
    urlEl.classList.add("result-url");
    urlEl.href = link;
    urlEl.target = "_blank";
    urlEl.textContent = link;
    resultItemEl.appendChild(urlEl);
  
    // Break the "URL"

    let linkBreakEl = document.createElement("br");
    resultItemEl.appendChild(linkBreakEl);
   
    // Adding the description using the 'p' tag

    let descriptionEl = document.createElement("p");
    descriptionEl.classList.add("link-description");
    descriptionEl.textContent = description;
    resultItemEl.appendChild(descriptionEl);
  
    searchResultsE1.appendChild(resultItemEl);
  }

 
 function displayresults(searchResults){
    for (let result of searchResults) {
        createAndAppendSearchResult(result);
      }

 }
function searchedtext(event){
      if(event.key==="Enter"){
        searchResultsE1.textContent="";
        let searchInput = searchInputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInput;
        // console.log(url);
        const options={
            method:"GET"
        }
        fetch(url,options)
        .then (function(response){
              return response.json();
        })
        .then(function(jsondata){
          const{search_results}=jsondata
          displayresults(search_results)
        })
       
      }
}
 searchInputEl.addEventListener("keydown" ,searchedtext)