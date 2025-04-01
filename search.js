document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const articles = document.querySelectorAll('#debates article, .saints-grid .saint');
    
    articles.forEach(function(article) {
        const title = article.querySelector('h3').textContent.toLowerCase();
        const description = article.querySelector('p') ? article.querySelector('p').textContent.toLowerCase() : '';
        
        if (title.includes(query) || description.includes(query)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
});
