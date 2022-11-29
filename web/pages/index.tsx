import CtaWithImage from "@/components/CtaWithImage";
import FeaturesThreeColumns from "@/components/FeaturesThreeColumn";
import Hero from "@/components/Hero";
import StepsSimple from "@/components/StepsSimple";
import type { NextPage } from "next";
import HeaderBgImage from "@/components/HeaderBgImage";
import Faq from "@/components/Faq";
import Process from "@/components/Process";
import Promo from "@/components/Promo";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <FeaturesThreeColumns />
      <HeaderBgImage />
      <StepsSimple />
      <Promo />
      <Process />
      <Faq />
      <CtaWithImage />
    </>
  );
};

export default Home;
