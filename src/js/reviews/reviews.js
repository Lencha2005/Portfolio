import iziToast from "izitoast";
import 'izitoast/dist/css/iziToast.min.css';
import { getReviews } from "./reviews-api";
import { createCardTemplate } from "./reviews-markup";
import './reviews-swiper';


const reviewList = document.querySelector('.reviews-list');

async function getCardInfo(){
    try {
        const cardData = await getReviews();
        const cardTemlate = cardData
        .map(cardInfo => createCardTemplate(cardInfo))
        .join('');

        reviewList.insertAdjacentHTML('beforeend', cardTemlate);
    } catch(err) {
    iziToast.show({
        message: `❌ Oh no, something went wrong`,
        color: 'red',
        position: 'topRight',
    })

        reviewList.innerHTML = `<li class="error-case">Unfortunately we can't find any reviews try again later</li>`;
    }
};

getCardInfo();

