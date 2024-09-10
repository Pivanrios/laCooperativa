'use client'
// components/AddReview.js
import { useState } from 'react';
import { db, auth } from '@/firebaseconfig'; 
import { setDoc, doc, addDoc, collection } from 'firebase/firestore';

export default function ReviewForm({ productId }) {
  // states
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(5);

  //on subnmit ----
  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log("on handleSubmit function for", productId, auth.currentUser.email)
    //verify if it login
    if (!auth.currentUser) {
      alert('Please sign in to submit a review');
      return;
    }
    const user = auth.currentUser;
    try {
      const docRef = await addDoc(collection(db, "productos", productId, "reviews"),{
        reviewText: reviewText,
        rating: rating,
        userId: user.uid,
        auth: user.email,
        createdAt: new Date().toDateString(),
      })
      setReviewText('');
      setRating(5);
      alert('Review submitted successfully');
    } catch (error) {
      console.error('Error adding review: ', error);
      alert('Error submitting review'); //
    }
  };
  return (
    <form onSubmit={handleSubmit}
          className='flex flex-col gap-1'>
            <label htmlFor="">Review:
              <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Write your review"
                  required
                  className='w-full'
                  ></textarea>
            </label>
            <label htmlFor="">Rating: 
              <select value={rating} 
              className=' w-10 ml-1'
              onChange={(e) => setRating(e.target.value)} required>
                        {[1, 2, 3, 4, 5].map((rate) => (
                        <option key={rate} value={rate}>
                          {rate}
                        </option>
                        ))}
              </select>
            </label>
      <button type="submit"
              className='btn self-end'>Add Review</button>
    </form>
  );
}
