import React from "react";
import DonationProjectCard from "./DonationProjectCard";
import background from "./coralreef.jpg";

export default {
  title: "Block/DonationProjectCard",
  component: DonationProjectCard,
};

const Template = (args) => (
  <div
    style={{
      backgroundImage: `url(${background})`,
      backgroundSize: "240px 240px",
      backgroundRepeat: "no-repeat",
    }}
  >
    <DonationProjectCard title={args.title} subtitle={args.subtitle} />
  </div>
);

export const DefaultDonationProjectCard = Template.bind({});

DefaultDonationProjectCard.args = {
  title: "Star Hotel SRO",
  subtitle: "280 People",
};
