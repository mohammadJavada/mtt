import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import PricingSteps from "@/page/pricing/steps";

const PricingStepPage = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };
  // const brandData = await GetStaticDatasAPI({
  //   endPoint: "/BrandModelType/Get/All",
  //   data: postedData,
  //   method: "post",
  // });
  return <PricingSteps brandModel={[]} />;
};

export default PricingStepPage;
