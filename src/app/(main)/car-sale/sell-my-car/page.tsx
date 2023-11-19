import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasNotSSRAPI from "@/apis/static-datas/get-static-datas-not-ssr.api";
import dynamic from "next/dynamic";

const SellMyCar = dynamic(() => import("@/page/car-sale/sell-my-car"), {
  ssr: false,
});

export default async function CarsaleSellMyCarPage() {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };
  const brandData = await GetStaticDatasNotSSRAPI({
    endPoint: "/BrandModelType/Get/All",
    data: postedData,
    method: "post",
  });
  const { cities } = await GetStaticDatasAPI({
    endPoint: "/City/Get/All",
  });
  const { colors } = await GetStaticDatasAPI({
    endPoint: "/Color/Get/All",
  });

  return <SellMyCar cars={brandData} cities={cities} colors={colors} />;
}
