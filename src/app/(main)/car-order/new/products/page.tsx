import { GetCarsListAPi } from "@/apis/cars-list";
import GetStaticDataAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import NewProductListPage from "@/page/car-order/new/products";

export default async function Product() {

  const data = await GetCarsListAPi("New");

  let pagedata = { page_number: 1, page_size: 100 };

  const brandData = await GetStaticDatasAPI({
    endPoint: "/BrandModelType/Get/All",
    data: pagedata,
    method: "post",
  });

  const { colors } = await GetStaticDataAPI({
    method: "get",
    endPoint: "/Color/Get/All",
  });
  
  const { cities } = await GetStaticDataAPI({
    method: "get",
    endPoint: "/City/Get/All",
  });

  return (
    <NewProductListPage
      ads={data.ads}
      models={brandData?.brandModelTypes || []}
      colors={colors}
      cities={cities}
    />
  );
}
