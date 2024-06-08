'use client'
import { getReviews } from "@/src/lib/review";
import { useEffect, useState } from "react";



function ReviewsGallery() {
  const [reviews, setReviews] = useState([]);

  useEffect(()=>{
    const setData = async ()=>{
      try {
        console.log("getting reviews...")
        const res = await getReviews("UNWak3Y4yXx2AIWCetQC");
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
        <div className=" flex flex-row p-2 gap-2 overflow-hidden">
          {reviews.map((r)=>{
            return (
              <div key={crypto.randomUUID} className=" flex flex-col bg-yellow-400 p-2" id="review">
                <span><p>{r.auth}</p><p>{r.rating}</p></span>
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