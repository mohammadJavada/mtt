// import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import Pricing from "@/page/pricing";

const PricingPage = async () => {
  // let postedData = {
  //   page_number: 1,
  //   page_size: 200,
  // };
  // const brandData = await GetStaticDatasAPI({
  //   endPoint: "/BrandModelType/Get/All",
  //   data: postedData,
  //   method: "post",
  // });

  return <Pricing brandModel={[]} />;
};

export default PricingPage;
