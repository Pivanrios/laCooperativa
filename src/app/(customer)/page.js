//Components
import DishGallery from "@/src/components/DishSection/DishGallery";
import HomeBanner from "@/src/components/HomeBanner";
import RegisterForm from "@/src/components/RegisterForm";
import ReviewsGallery from "@/src/components/ReviewsGallery";
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
