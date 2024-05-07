import DishGallery from "../components/DishGallery";
import HomeBanner from "../components/HomeBanner";
import RegisterForm from "../components/RegisterForm";
import ReviewsGallery from "../components/ReviewsGallery";
//data

import React from "react";


export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <DishGallery/>
      <RegisterForm/>
      <ReviewsGallery/>
    </div>
  );
}
