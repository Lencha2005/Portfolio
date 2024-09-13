import { getReviews } from "./reviews-api";

async function getCardInfo(){
    try {
        const cardData = await getReviews();
        console.log(cardData)
    } catch(err) {
console.log(err)
    }
}

getCardInfo()