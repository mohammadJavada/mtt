import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import AdvancedSearch from "@/page/advanced-search";

export default async function AdvancedSearchPage() {
  const { colors } = await GetStaticDatasAPI({
    endPoint: "/Color/Get/All",
    method: "get",
  });
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
    <AdvancedSearch colors={colors} models={data?.brandModelTypes ?? []} />
  );
}
