export function createCardTemplate(cardInfo) {

    const {avatar_url, author, review} = cardInfo;
return `
<li class="reviews-item swiper-slide">
                <img 
                class="reviews-img"
                src="${avatar_url}"
                alt="user-photo"
                onerror="this.src='/img/reviews/profile-photo.png'"
                width="48"
                height="48"
                loading="lazy">
                <h3 class="reviews-title-item">${author}</h3>
                <p class="reviews-text-item">${review}</p>
            </li>`
}