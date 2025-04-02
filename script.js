document.addEventListener("DOMContentLoaded", function () {
    const popupContainer = document.getElementById("popup-container");
    const searchBar = document.getElementById("search-bar");

    // Close popup when clicking outside the box
    popupContainer.addEventListener("click", function (event) {
        if (event.target.id === "popup-container") {
            popupContainer.style.display = "none";
        }
    });

    // Hide popup when clicking the "Continue Without Account" button
    document.getElementById("continue-btn").addEventListener("click", function () {
        popupContainer.style.display = "none";
    });

    // Search functionality (basic filtering example)
    searchBar.addEventListener("input", function () {
        let query = searchBar.value.toLowerCase();
        let articles = document.querySelectorAll(".article");
        
        articles.forEach(article => {
            let text = article.textContent.toLowerCase();
            if (text.includes(query)) {
                article.style.display = "block";
            } else {
                article.style.display = "none";
            }
        });
    });
});
