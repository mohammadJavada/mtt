import GetStaticDatasAPI from "@/apis/static-datas/get-static-data.api";
import GetStaticDatasNotSSRAPI from "@/apis/static-datas/get-static-datas-not-ssr.api";
import { FRONT2DB } from "@/config/url";
import AdvancedSearch from "@/page/advanced-search";

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

export default async function AdvancedSearchPage() {
  const { colors } = await GetStaticDatasAPI({
    endPoint: "/Color/Get/All",
    method: "get",
  });
  let postedData = {
    page_number: 1,
    page_size: 200,
  };

  const brandData = postData(postedData);

  return (
    <AdvancedSearch colors={colors} models={brandData?.brandModelTypes ?? []} />
  );
}
