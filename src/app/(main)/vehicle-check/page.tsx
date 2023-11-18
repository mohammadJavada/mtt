import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import VehicleCheck from "@/page/vehicle-check";
import React from "react";

const page = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };
  const data = await GetStaticDatasAPI({
    endPoint: "/BrandModelType/Get/All",
    data: postedData,
    method: "post",
  });
  return (
    <div>
      <VehicleCheck cars={data} />
    </div>
  );
};

export default page;
