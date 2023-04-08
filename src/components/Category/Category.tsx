import Image from "next/image";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
export default function Category() {
  return (
    <section className="bg-[#C4ADEB] dark:bg-dark h-[400px]">
      <div className="flex flex-col justify-center px-10 py-4 sm:px-4 w-4/5 mx-auto h-full sm:w-full">
        <div className="flex justify-between">
          <h2 className="font-bold text-2xl">Design for what you need</h2>
          <div className="flex items-center">
            <h3>View all design categories</h3>
            <MdKeyboardDoubleArrowRight className="ml-4" />
          </div>
        </div>
        <div className="flex gap-4 mt-8 justify-between">
          <div className="h-32">
            <Image
              src="/cate1.png"
              alt=""
              width={215}
              height={215}
              className="rounded"
            />
          </div>
          <div>
            <Image
              src="/cate2.png"
              alt=""
              width={215}
              height={215}
              className="rounded"
            />
          </div>
          <div>
            <Image
              src="/cate3.png"
              alt=""
              width={215}
              height={215}
              className="rounded"
            />
          </div>
          <div>
            <Image
              src="/cate4.png"
              alt=""
              width={215}
              height={215}
              className="rounded"
            />
          </div>
          <div>
            <Image
              src="/cate5.png"
              alt=""
              width={215}
              height={215}
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
