import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasNotSSRAPI from "@/apis/static-datas/get-static-datas-not-ssr.api";
import VehicleCheck from "@/page/vehicle-check";
import React from "react";

const page = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };
  // const brandData = await GetStaticDatasNotSSRAPI({
  //   endPoint: "/BrandModelType/Get/All",
  //   data: postedData,
  //   method: "post",
  // });
  return (
    <div>
      <VehicleCheck />
    </div>
  );
};

export default page;
