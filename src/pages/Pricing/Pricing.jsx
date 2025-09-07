import React from "react";
import { PricingBox } from "../../components/PricingBox/PricingBox";
import SectionHero from "../../components/SectionHero/SectionHero";

export default function Pricing() {
  return (
    <div>
      <SectionHero
        title={"Pricing"}
        text={"Get more Gitpod, pay less."}
        btn={"Try Now"}
      />
      <PricingBox />
    </div>
  );
}
