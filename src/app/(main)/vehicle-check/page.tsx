import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import { FRONT2DB } from "@/config/url";
import VehicleCheck from "@/page/vehicle-check";
import React from "react";

async function postData(data = {}) {
  const response = await fetch(`${FRONT2DB}/BrandModelType/Get/All`, {
    method: "POST",
    cache: "force-cache",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
const page = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };

  const brandData = await postData(postedData);
  return (
    <div>
      <VehicleCheck cars={brandData} />
    </div>
  );
};

export default page;
