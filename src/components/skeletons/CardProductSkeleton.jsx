import React from "react";
import Skeleton from "react-loading-skeleton";

const cardProductSkeleton = ({ card }) => {
  return Array(card)
    .fill(0)
    .map((_, i) => (
      <div
        key={i}
        className="product-card pointer-events-auto w-[48%] shrink-0 cursor-pointer overflow-hidden rounded-xl lg:w-[24%]"
      >
        <div className="group relative h-52 overflow-hidden from-black/10 from-5% to-white/0 p-4 after:absolute after:inset-0 after:z-10 after:w-full after:bg-gradient-to-t">
          <Skeleton
            className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
            alt=""
          />
        </div>
        <div className="flex h-[100px] flex-col bg-white px-4 py-2.5">
          <Skeleton className="h-8"></Skeleton>
          <div className="mt-1">
            <Skeleton className="h-4"></Skeleton>
          </div>
        </div>
      </div>
    ));
};

export default cardProductSkeleton;
