import { useEffect, useState } from "react";
import { BDD_URL } from "../../App";
import box from "../img/boxFree.png";

type Subscription = {
  title: string;
  price: number | "Free";
  benefits: string[];
  currency: "U$S" | "$ARG";
  type: "monthly" | "daily" | "weekly";
}

const Plan = () => {

  const [sub, setSub] = useState<Subscription[]>([]);


  useEffect(() => {
    fetch(`${BDD_URL}/api/subscription`)
      .then((response) => {
        response.json().then((result) => {
          setSub(result);
        });
      })
  }, []);

  return (

    <div className="pt-20 pb-20" style={{ background: 'linear-gradient(to bottom, #F8F8F8 0%, #FFFF 100%)' }}>
    <div className="container mx-auto max-w ">
      <div className="mb-20">
        <h2 className="text-3xl md:text-4xl font-medium text-center">Choose your Plan</h2>
        <p className="text-lg md:text-xl mt-4 md:mt-8 text-center text-[#4F5665]">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
      </div>
      <div className="flex flex-col md:flex-row justify-center md:space-x-16 space-y-8 md:space-y-0 w-full">
        {sub.map((subscription) => (
          <div className="flex flex-col p-6 md:p-16 bg-white shadow-md items-center rounded-lg" key={subscription.title}>

            <img src={box} alt="Imagen 3" className="mb-4 max-w-full" />

            <h2 className="mt-5 text-xl font-medium mb-4">{subscription.title}</h2>

            <div className="mb-6">
              {subscription.benefits.map((benefit) => (
                <div className="flex items-baseline mb-2">
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.4487 9.27956C5.31743 9.27983 5.1874 9.25417 5.06608 9.20406C4.94475 9.15395 4.83452 9.08038 4.7417 8.98756L0.499696 4.74456C0.404122 4.65238 0.327864 4.54209 0.27537 4.42013C0.222877 4.29816 0.1952 4.16696 0.193953 4.03418C0.192706 3.9014 0.217915 3.76971 0.268109 3.64678C0.318303 3.52385 0.392477 3.41214 0.486302 3.31819C0.580128 3.22423 0.691726 3.1499 0.814585 3.09953C0.937444 3.04916 1.0691 3.02377 1.20188 3.02482C1.33466 3.02588 1.4659 3.05337 1.58794 3.1057C1.70998 3.15802 1.82038 3.23412 1.9127 3.32956L5.44769 6.86456L11.8127 0.501562C12.0002 0.313921 12.2546 0.208453 12.5198 0.208359C12.7851 0.208265 13.0396 0.313553 13.2272 0.501061C13.4148 0.68857 13.5203 0.942938 13.5204 1.20821C13.5205 1.47348 13.4152 1.72792 13.2277 1.91556L6.15569 8.98756C6.06287 9.08038 5.95264 9.15395 5.83131 9.20406C5.70999 9.25417 5.57996 9.27983 5.4487 9.27956Z" fill="#2FAB73" />
                  </svg>
                  <p className="ml-3 text-sm mt-2 text-[#4F5665]">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <p className="mb-4 text-center text-xl font-medium">{subscription.currency && `${subscription.currency}`}{subscription.price}/mo</p>
              <button className="text-base button-color-basic font-semibold border border-[#F53838] px-4 py-2 rounded-full cursor-pointer pl-10 pr-10">Select</button>
            </div>

          </div>
        ))}


      </div>
    </div>
    </div>
  );

}

export default Plan;