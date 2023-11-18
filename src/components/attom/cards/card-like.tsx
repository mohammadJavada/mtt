import Logo from "@/assets/images/Logo.svg";
import httpService from "@/services/http-service";
import { FRONT2DB, FRONT2MESSAGE } from "@/config/url";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { NumberSeprator } from "@/utils/number-seprator";
import { Puff } from "react-loading-icons";
import { useRouter } from "next/navigation";
import { checkExistWindow } from "@/utils/check-exist-window";
import { CiBookmark } from "react-icons/ci";
import { IoMdBookmark } from "react-icons/io";

interface PropTypes {
  index: string | number;
  item: any;
}

export default function CardLiked({ item, index }: PropTypes) {
  const [data, setData] = useState<any[] | string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useRouter();

  useEffect(() => {
    var config = {
      responseType: "blob",
    };

    let arrayImage = null;

    if (item.image_guids?.length > 0) {
      arrayImage = item.image_guids?.split(",");
    }

    if (arrayImage?.length > 0 && typeof window !== "undefined") {
      httpService
        .get(`${FRONT2DB}/Images/Id/${arrayImage[0]}`, config)
        .then((res) => {
          setData([
            ...data,
            ...(checkExistWindow()
              ? [window.URL.createObjectURL(res.data)]
              : []),
          ]);
          setLoading(false);
        });
    }

    if (arrayImage == null) {
      setLoading(false);
    }
  }, []);

  const navigateHandler = () => {
    navigate.push(`/products/${item.ad_code}`);
  };

  return (
    <div
      className="border border-blue rounded bg-[#F4F7F9] grid md:grid-cols-3 grid-cols-1 gap-4 items-center cursor-pointer"
      onClick={navigateHandler}
    >
      {loading && (
        <div className="w-full h-full object-cover flex flex-col items-center justify-center text-blue ">
          <Puff stroke="#1242E0" strokeOpacity={0.125} speed={0.75} />
        </div>
      )}

      {!loading && data && (
        <img
          src={String(data)}
          alt="product"
          className=" w-full h-full object-cover"
        />
      )}

      {item?.image_guids?.length == 0 && (
        <div className="w-full h-full object-cover flex flex-col items-center justify-center bg-white p-8">
          <img src={Logo.src} alt="logo" className="w-full" />
        </div>
      )}

      <div className="flex md:col-span-2 flex-col gap-2 py-2 px-2 w-full">
        <span className="block font-medium">
          {item?.brand} - {item?.model}{" "}
        </span>
        <div>
          <span className="text-gray-400 font-light text-sm block">
            مدل {item?.year_of_manufacture}
          </span>
          <span className="text-gray-400 font-light text-sm block mb-2">
            {" "}
            {item?.mileage} کیلومتر
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-1 text-blue items-center">
            <span className="font-bold">
              {NumberSeprator(item?.announced_price)}
            </span>
            <span className="text-sm">تومان</span>
          </div>
        </div>

        <LikeComp advertiser_id={item?.advertiser_id} index={index} />
      </div>
    </div>
  );
}

interface Inputs {
  advertiser_id: string | number;
  index: string | number;
  ad_liked?: boolean;
}

export const LikeComp = ({ advertiser_id, index, ad_liked = true }: Inputs) => {
  const [isLiked, setIsliked] = useState(ad_liked);

  const handleLikeClick = (
    e: React.MouseEvent<SVGElement, MouseEvent>,
    position: string | number
  ) => {
    e.stopPropagation();
    if (isLiked) {
      httpService
        .get(`${FRONT2MESSAGE}/AdSale/Id/${advertiser_id}/UnLike`)
        .then((res) => {
          if (position == index) {
            setIsliked(!isLiked);
          }
        })
        .catch(() => toast.error("متاسفانه خطایی رخ داده است"));
    }
    if (!isLiked) {
      httpService
        .get(`${FRONT2MESSAGE}/AdSale/Id/${advertiser_id}/Like`)
        .then((res) => {
          if (position == index) {
            setIsliked(!isLiked);
          }
        })
        .catch(() => toast.error("متاسفانه خطایی رخ داده است"));
    }
  };

  return isLiked ? (
    <IoMdBookmark
      onClick={(e) => handleLikeClick(e, index)}
      className="cursor-pointer"
      size="25"
      // color="#FB4432"
    />
  ) : (
    <CiBookmark
      onClick={(e) => handleLikeClick(e, index)}
      className="cursor-pointer"
      size="25"
      // color="#FB4432"
    />
  );
};
