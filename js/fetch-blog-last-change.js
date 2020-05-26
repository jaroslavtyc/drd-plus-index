window.addEventListener('DOMContentLoaded', () => {
    getLastArticleDate().then(lastArticleDate => {
        const blogLastChange = document.getElementById('blog').getElementsByClassName('date')[0];
        const dateOfLastChange = new Date(lastArticleDate);
        blogLastChange.textContent = dateOfLastChange.toLocaleDateString('cs');
    });
});

/**
 * @return {Promise<{string}>}
 */
async function getLastArticleDate() {
    const lastArticleDateJson = await httpGet('https://update.blog.draciodkaz.cz/last_article_date.php');
    return lastArticleDateJson['last_article_date'];
}

/**
 * @param {string} url
 * @return {Promise<{object}>}
 */
function httpGet(url) {
    const request = new Request(url);
    return fetch(request)
        .then(response => response.json());
}