import CtaWithImage from "@/components/CtaWithImage";
import FeaturesThreeColumns from "@/components/FeaturesThreeColumn";
import Hero from "@/components/Hero";
import StepsSimple from "@/components/StepsSimple";
import type { NextPage } from "next";
import HeaderBgImage from "@/components/HeaderBgImage";
import Faq from "@/components/Faq";
import Process from "@/components/Process";
import Promo from "@/components/Promo";
import Form from "@/components/Form";

const Schedule: NextPage = () => {
  return (
    <>
      <div className="py-12">
        <div className="container">
          <Form />
          <hr className="mx-auto max-w-md pb-6" />
          <Process />
          <hr className="mx-auto max-w-md pb-6" />
          <Faq />
        </div>
      </div>
    </>
  );
};

export default Schedule;
