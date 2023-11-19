import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasNotSSRAPI from "@/apis/static-datas/get-static-datas-not-ssr.api";
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

  const brandData = await GetStaticDatasNotSSRAPI({
    endPoint: "/BrandModelType/Get/All",
    data: postedData,
    method: "post",
  });
  return (
    <AdvancedSearch colors={colors} models={brandData?.brandModelTypes ?? []} />
  );
}
