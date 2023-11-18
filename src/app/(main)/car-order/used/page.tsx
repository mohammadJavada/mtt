import { GetCarsListAPi } from "@/apis/cars-list";
import UsedCarOrder from "@/page/car-order/used";
import { ConvertAPIImagesToBase64 } from "@/utils/get-images-base64-api";

export default async function UsedCarOrderPage() {

  const data = await GetCarsListAPi("Used");
  await ConvertAPIImagesToBase64(data?.ads);

  return <UsedCarOrder usedData={data?.ads ?? []} />;
}