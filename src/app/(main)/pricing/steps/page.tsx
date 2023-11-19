import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasNotSSRAPI from "@/apis/static-datas/get-static-datas-not-ssr.api";
import { FRONT2DB } from "@/config/url";
import PricingSteps from "@/page/pricing/steps";

// async function postData(url = "", data = {}) {
//   const response = await fetch(url, {
//     method: "POST",
//     cache: "force-cache",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// }

const PricingStepPage = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };

  // const data = await postData(`${FRONT2DB}/BrandModelType/Get/All`, postedData);
  const brandData = await GetStaticDatasNotSSRAPI({
    endPoint: "/BrandModelType/Get/All",
    data: postedData,
    method: "post",
  });

  return <PricingSteps brandModel={brandData?.brandModelTypes || []} />;
};

export default PricingStepPage;
