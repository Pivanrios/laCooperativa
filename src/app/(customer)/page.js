//Components
import DishGallery from "@/src/components/DishSection/DishGallery";
import HomeBanner from "@/src/components/HomeBanner";
import RegisterForm from "@/src/components/RegisterForm";
import React from "react";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <DishGallery title={'Dishes'}/>
      <RegisterForm/>
    </div>
  );
}
