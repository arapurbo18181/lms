import Image from "next/image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import HeroImage from "@/app/images/hero.png";
import BulbImage from "@/app/images/bulb.png";
import ShapesImage from "@/app/images/shapes.png";

const Hero = () => {

  return (
    <div className="container flex justify-center items-center my-20">
      <div className="flex flex-1 flex-col justify-center items-start space-y-4">
        <h2 className="text-7xl font-extrabold leading-[80px]">
        সফটটেক আইটি ইন্সটিটিউট
        </h2>
        <p className="">
        আমরা বিশ্বজুড়ে সেরা আইটি প্রশিক্ষণ সরবরাহ করি এবং আমরা তরুণ উদ্যোক্তা, স্টার্টআপস ও প্রতিষ্ঠিত ব্যবসাগুলিকে বড় হতে সহায়তা করি।
        </p>
        <button className="flex justify-center items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md border border-white hover:border-red-500 hover:bg-white hover:text-red-500 transition-all duration-300">
          {" "}
           <span>আমাদের কোর্স</span> <BsArrowRight className="text-lg" />
        </button>
        <div className="w-full flex justify-center items-center">
            <Image className="w-1/2 vert-move" src={BulbImage} alt="Bulb_image" />
        </div>
      </div>
      <div className="flex-1 relative">
        <Image className="z-40" src={HeroImage} alt={"hero_image"} />
        <div className="absolute -z-30 right-12 bottom-0">
            <Image className="w-3/4 vert-move" src={ShapesImage} alt="Bulb_image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
