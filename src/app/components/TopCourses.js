import Image from "next/image";
import React from "react";
import Course1Image from "@/app/images/course1.jpg";
import Course2Image from "@/app/images/course2.jpg";
import Course3Image from "@/app/images/course3.jpg";
import { BsBook } from "react-icons/bs";
import { PiStudent } from "react-icons/pi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const courses = [
  {
    name: "ওয়ার্ডপ্রেস ডেভেলপমেন্ট অনলাইন",
    desc: "সফটটেক-আইটি ইন্সটিটিউট আয়োজন করেছে অ্যাডভান্সড ওয়ার্ডপ্রেস ডেভেলপমেন্ট অনলাইন ব্যাচ এবং ফ্রিল্যান্সিং প্রশিক্ষন ।...",
    lessons: 200,
    students: 80,
    image: Course1Image,
    price: 60,
  },
  {
    name: "গ্রাফিক ডিজাইন অনলাইন",
    desc: "এই কোর্সে গ্রাফিক ডিজাইন এর একদম ব্যাসিক থেকে শুরু করে অ্যাডবি ফটোশপ, অ্যাডবি ইলাস্ট্রেটর, অ্যাডবি ইনডিজাইন এর ...",
    lessons: 150,
    students: 70,
    image: Course2Image,
    price: 80,
  },
  {
    name: "ডিজিটাল মার্কেটিং অনলাইন",
    desc: "একবিংশ শতাব্দীর ডিজিটাল যুগে প্রতিটি কোম্পানি এখন অনলাইন মার্কেটিং এর উপর নির্ভরশীল হয়ে উঠেছে। বিশেষ করে...",
    lessons: 250,
    students: 90,
    image: Course3Image,
    price: 90,
  },
];

const TopCourses = () => {
  return (
    <div className="py-20 bg-pink-50 w-full flex flex-col justify-center items-center">
      <div className="w-full flex flex-col justify-center items-center space-y-4 container ">
        <h5 className="text-sm text-red-600 font-semibold">
          GO AT YOUR OWN PACE
        </h5>
        <h2 className="text-4xl font-bold">আমাদের কোর্স</h2>
        <p className="text-slate-600 w-[700px] text-center">
          আমরা বিশ্বজুড়ে সেরা আইটি প্রশিক্ষণ সরবরাহ করি এবং আমরা তরুণ
          উদ্যোক্তা, স্টার্টআপস ও প্রতিষ্ঠিত ব্যবসাগুলিকে বড় হতে সহায়তা করি।
        </p>
      </div>
      <div className="grid grid-cols-3 gap-5 my-10 container">
        {courses.map((item, i) => {
          return (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden drop-shadow-xl"
            >
              <div className="relative">
                <Image
                  className="cursor-pointer"
                  src={item.image}
                  alt={item.name}
                />
                <div className="absolute rounded-full w-16 h-16 bg-red-500 right-5 -bottom-8 flex justify-center items-center">
                  <h2 className="text-white text-xl font-semibold">
                    ${item.price}
                  </h2>
                </div>
              </div>
              <div className="px-6 py-6 ">
                <div className="space-y-2">
                  <Link href={"/"} className="text-xl font-bold cursor-pointer">
                    {item.name}
                  </Link>
                  <p className="leading-7 text-slate-600">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <h3 className="flex justify-center items-center space-x-2">
                    {" "}
                    <BsBook className="text-red-600" />{" "}
                    <span>{item.lessons} Lessons</span>{" "}
                  </h3>
                  <h3 className="flex justify-center items-center space-x-2">
                    {" "}
                    <PiStudent className="text-red-600" />{" "}
                    <span>{item.students} Students</span>{" "}
                  </h3>
                </div>
                <Link href={"/"} className="flex justify-center items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-md border border-white hover:border-red-500 hover:bg-white hover:text-red-500 transition-all duration-300 mt-4">
                  {" "}
                  <span>বিস্তারিত</span> <BsArrowRight className="text-lg" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopCourses;
