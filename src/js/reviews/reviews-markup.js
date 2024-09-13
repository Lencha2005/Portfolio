export function createCardTemplate(cardInfo) {
return `
<li class="reviews-item">
                <img 
                class="reviews-img"
                src="${avatar_url}"
                alt="user-photo"
                onerror="this.src='/img/reviews/profile-photo.png'"
                width="48"
                height="48">
                <h3 class="reviews-title-item">${author}</h3>
                <p class="reviews-text-item">${review}</p>
            </li>`
}