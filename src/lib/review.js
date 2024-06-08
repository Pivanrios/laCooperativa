import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebaseconfig";



export async function getReviews(productId){
    const reviews = []
    try {
        const res = await getDocs(collection(db, "productos", productId, "reviews"));
        res.forEach((review)=>{
            reviews.push(review.data());
        })
        console.log("response", reviews);
    } catch (error) {
        console.error(error);
    }
    return reviews
}