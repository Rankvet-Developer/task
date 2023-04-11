import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function Category() {
  return (
    <section className="bg-[#C4ADEB] dark:bg-dark h-[400px] sm:h-full">
      <div className="flex flex-col justify-center px-10 py-4 sm:px-4 w-4/5 mx-auto h-full sm:py-10 sm:w-full">
        <div className="flex justify-between sm:flex-col sm:gap-5">
          <h2 className="font-bold text-2xl">Design for what you need</h2>
          <div className="flex items-center">
            <h3>View all design categories</h3>
            <MdKeyboardDoubleArrowRight className="ml-4" />
          </div>
        </div>
        <div className="flex sm:flex-col gap-4 mt-8 justify-between sm:items-center">
          <div className="h-52 w-52 relative">
            <Image
              src="/cate1.png"
              alt=""
              className="rounded"
              fill
            />
          </div>
          <div className="h-52 w-52 relative">
            <Image
              src="/cate2.png"
              alt=""
              fill
              className="rounded"
            />
          </div>
          <div className="h-52 w-52 relative">
            <Image
              src="/cate3.png"
              alt=""
              fill
              className="rounded"
            />
          </div>
          <div className="h-52 w-52 relative">
            <Image
              src="/cate4.png"
              alt=""
              fill
              className="rounded"
            />
          </div>
          <div className="h-52 w-52 relative">
            <Image
              src="/cate5.png"
              alt=""
              fill
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
