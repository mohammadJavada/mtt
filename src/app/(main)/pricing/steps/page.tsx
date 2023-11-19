import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import { FRONT2DB } from "@/config/url";
import PricingSteps from "@/page/pricing/steps";

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    // cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

const PricingStepPage = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };

  const data = await postData(`${FRONT2DB}/BrandModelType/Get/All`, postedData);
  // const brandData = await GetStaticDatasAPI({
  //   endPoint: "/BrandModelType/Get/All",
  //   data: postedData,
  //   method: "post",
  // });

  // const getList = async () => {
  //   const res = fetch("/BrandModelType/Get/All", {
  //     method: "post",
  //     cache: "no-store",
  //   });
  // };
  return <PricingSteps brandModel={data?.brandModelTypes || []} />;
};

export default PricingStepPage;
