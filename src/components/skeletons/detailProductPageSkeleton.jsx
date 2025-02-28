import React from "react";
import Skeleton from "react-loading-skeleton";

const DetailProductPageSkeleton = () => {
  return (
    <>
      <div className="h-72 w-full lg:w-96">
        <Skeleton
          className="product-image mx-auto h-full w-full object-contain lg:mx-0"
          alt=""
        />
      </div>
      <div className="h-px w-full bg-slate-200 lg:hidden"></div>
      <div className="lg:w-96">
        <Skeleton className="h-8 w-96"></Skeleton>
        <p className="mt-1 text-lg font-bold text-slate-700">
          <Skeleton className="h-6"></Skeleton>
        </p>
        <Skeleton className="mt-2 h-[120px]"></Skeleton>

        <div className="mt-4 flex w-full gap-x-2">
          <Skeleton
            className="h-[60px]"
            containerClassName="w-[158px]"
          ></Skeleton>
          <Skeleton
            className="h-[60px]"
            containerClassName="w-[410px]"
          ></Skeleton>
        </div>
      </div>
    </>
  );
};

export default DetailProductPageSkeleton;
