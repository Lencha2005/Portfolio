import { getReviews } from "./reviews-api";

async function getCardInfo(){
    try {
        const cardData = await getReviews();
        const cardTemlate = cardData.map(cardInfo =>)
    } catch(err) {
console.log(err)
    }
}

getCardInfo()