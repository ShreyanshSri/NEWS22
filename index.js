console.log(`This is my index js`);


// Initialize the news api parameters
let source = 'bbc-news';
let apiKey = '3abe406f8d804287a8c1045183ec961f';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');


// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = " ";
        articles.forEach(function(element,index) {
                // console.log(articles[news]);
                let news = `
                <div class="card">
                <div class="card-header" id="heading${index}">
                <h2 class="mb-0">
                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapse${index}"
                aria-expanded="true" aria-controls="collapse${index}">
                <b> Breaking News ${index+1}: </b>${element["title"]}
                </button>
                </h2>
                </div>
                
            <div id="collapse${index}" class="collapse " aria-labelledby="heading${index}" data-parent="#accordion">
                <div class="card-body">
                ${element["content"]}. 
                <a href="${element['url']}" target = "_blank"> Read more </a>
                </div>
                </div>
                </div>`
                
                newsHtml += news;            
        });
            newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.error(`There is error`);
    }
}
xhr.send();



