'use client'
import { getReviews } from "@/src/lib/review";
import { useEffect, useState } from "react";


function ReviewsGallery({productId}) {
  //states
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    //set our data
    const setData = async ()=>{
      try {
        console.log("getting reviews...")
        const res = await getReviews(productId);
        setReviews(res);
      } catch (error) {
        console.error(error);
      }
    }
    setData();// invoke function
  },[]);
  return (
    <section className="bg-yellow-500 p-5">
      <div className="flex flex-col items-center  py-5">
        <h3 className="text-2xl font-bold">Reviews</h3>
        <div className=" flex flex-col sm:flex-row p-2 gap-2 ">
          {//conditional statement to see if me have reviews
          reviews.length < 1 ? <p> No reviews  yet </p> : reviews.map((r,i)=>{
            return (
              <div key={i} className=" flex flex-col bg-yellow-400 p-2 w-full " id="review">
                <span><p><strong>auth: </strong>{r.auth} <strong>rate: </strong>{r.rating}</p></span>
                <p>{r.reviewText}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ReviewsGallery