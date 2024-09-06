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
            // Create a div for each article with inline styles
            var articleDiv = document.createElement('div');
            articleDiv.style.padding = '20px';
            articleDiv.style.margin = '10px 0';
            articleDiv.style.borderRadius = '8px';
            articleDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';
            articleDiv.style.backgroundColor = '#ffffff';
            articleDiv.style.transition = 'transform 0.3s ease';
            articleDiv.onmouseover = function() {
                this.style.transform = 'scale(1.02)';
            };
            articleDiv.onmouseout = function() {
                this.style.transform = 'scale(1)';
            };

            // Create and add the title (h2) with inline styles
            var title = document.createElement('h2');
            title.textContent = article.title;
            title.style.fontSize = '1.5em';
            title.style.color = '#333333';
            title.style.marginBottom = '10px';

            // Create and add the description (p) with inline styles
            var description = document.createElement('p');
            description.textContent = article.description;
            description.style.fontSize = '1em';
            description.style.color = '#666666';
            description.style.lineHeight = '1.6';
            description.style.marginBottom = '20px';

            // Create a header for "Ways to Achieve" with inline styles
            var waysHeader = document.createElement('h3');
            waysHeader.textContent = 'Ways to Achieve:';
            waysHeader.style.fontSize = '1.2em';
            waysHeader.style.color = '#444444';
            waysHeader.style.marginBottom = '10px';

            // Create a list (ul) for ways to achieve with inline styles
            var waysList = document.createElement('ul');
            waysList.style.listStyleType = 'disc';
            waysList.style.marginLeft = '20px';
            article.ways_to_achieve.forEach(function(way) {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                listItem.style.marginBottom = '5px';
                waysList.appendChild(listItem);
            });

            // Create a header for "Benefits" with inline styles
            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = 'Benefits:';
            benefitsHeader.style.fontSize = '1.2em';
            benefitsHeader.style.color = '#444444';
            benefitsHeader.style.marginBottom = '10px';

            // Create a list (ul) for benefits with inline styles
            var benefitsList = document.createElement('ul');
            benefitsList.style.listStyleType = 'disc';
            benefitsList.style.marginLeft = '20px';
            article.benefits.forEach(function(benefit) {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                listItem.style.marginBottom = '5px';
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
