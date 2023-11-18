"use client";
import { SelectBox } from "@/attom/form@/components@/select@/select-box";
import { AUTH_URL } from "@/config/url";
import { useRequest } from "@/hooks/useRequest";
import { InfoCircle } from "iconsax-react";
import { useEffect } from "react";

const ExpireDate = ({ formik }: { formik: any }) => {
  const { data: expireData } = useRequest({
    method: "GET",
    url: `${AUTH_URL}/Admin/Parameter/Ad/Expire/Get`,
  });

  const expirationDates = Array.from(
    { length: expireData?.AdExpireParameter },
    (_, index) => index + 1
  );

  useEffect(() => {
    let formikValue = formik.values;

    if (formik.values["expire_day_count"] !== "") {
      formik.setValues({
        ...formikValue,
        expire_day_count: "",
      });
    } else {
      formik.setValues({
        ...formikValue,
        expire_day_count: expireData?.AdExpireParameter,
      });
    }
  }, [expireData]);

  return (
    <div className="my-8">
      <span className="text-blue font-bold text-xl">
        مدت زمان اعتبار هر آگهی
      </span>
      <div className="flex items-center gap-1 mt-6">
        <InfoCircle size="24" color="#EB6E02" variant="Bold" />
        <p>
          {" "}
          مدت زمان اعتبار این آگهی از زمان انتشار بر روی پلتفرم متاخودرو{" "}
          <span className="font-extrabold text-orange text-lg">
            {expireData?.AdExpireParameter} روز
          </span>{" "}
          است. در صورت نیاز می‌توانید مدت{" "}
          <span className="font-extrabold">زمان کمتری</span> برای اعتبار آگهی
          خود انتخاب نمایید.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 items-start mt-4">
        <SelectBox
          formik={formik}
          selectValue={expireData?.AdExpireParameter}
          options={expirationDates.map((item) => ({
            value: item,
            label: item,
          }))}
          name="expire_day_count"
        />
      </div>
    </div>
  );
};

export default ExpireDate;
