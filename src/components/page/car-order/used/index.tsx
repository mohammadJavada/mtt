import React from "react";

import CarOrderFAQ from "../components/faq";
import NormalVipPurchase from "../components/normal-vip-purchase";
import { BannerCarUsedCarExchange, SliderUsedCarOrder } from "./components";
import { SliderLatestProduct } from "@/attom/slider/latest-product/slider-latest-product";

const UsedCarOrder = ({ usedData }: { usedData: any[] }) => {
  return (
    <div>
      <div className="my-4">
        <NormalVipPurchase />
      </div>
      <SliderLatestProduct link="/used" data={usedData} />
      <SliderUsedCarOrder />
      <div className="mt-20">
        <BannerCarUsedCarExchange />
      </div>
      <CarOrderFAQ />
    </div>
  );
};

export default UsedCarOrder;
