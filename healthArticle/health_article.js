var xhr = new XMLHttpRequest();
var url = './health_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function() {
    if (xhr.status >= 200 && xhr.status < 300) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById('articles');

        // Clear any existing content in the articlesDiv
        articlesDiv.innerHTML = '';

        // Iterate through each article using forEach
        articles.forEach(function(article) {
            // Create a div for each article
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            // Create and add the title (h2)
            var title = document.createElement('h2');
            title.textContent = article.title;

            // Create and add the description (p)
            var description = document.createElement('p');
            description.textContent = article.description;

            // Create a header for "Ways to Achieve"
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';

            // Create a list (ul) for ways to achieve
            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            // Create a header for "Benefits"
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';

            // Create a list (ul) for benefits
            var benefitsList = document.createElement('ul');
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            // Append title, description, ways, and benefits to articleDiv
            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(waysHeader);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            // Append articleDiv to articlesDiv
            articlesDiv.appendChild(articleDiv);
        });
    } else {
        console.log("Failed to load data. Status:", xhr.status);
    }
};

xhr.send();