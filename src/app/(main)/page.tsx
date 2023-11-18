import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import Home from "@/page/home@";

const HomePage = async () => {
  let postedData = {
    page_number: 1,
    page_size: 200,
  };

  const data = await GetStaticDatasAPI({
    endPoint: "/BrandModelType/Get/All",
    data: postedData,
    method: "post",
  });

  return <Home brandModelTypes={data?.brandModelTypes ?? []} />;
};

export default HomePage;
