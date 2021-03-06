import React from "react";
import DonationBlock from "./DonationBlock";

export default {
  title: "Grid-Aware/DonationBlock",
  component: DonationBlock,
};

const Template = ({
  mainTitle,
  mainDescription,
  whyDonateTitle,
  whyDonateList,
  impactTitle,
  impactList,
}) => (
  <DonationBlock
    mainTitle={mainTitle}
    mainDescription={mainDescription}
    whyDonateTitle={whyDonateTitle}
    whyDonateList={whyDonateList}
    impactTitle={impactTitle}
    impactList={impactList}
  />
);

export const Default = Template.bind({});

Default.args = {
  mainTitle: "Donate today",
  mainDescription:
    "Your support will address digital inequity for an underserved community that does not have access to the internet and essential digital services.",
  whyDonateTitle: "Why give to ShelterTech?",
  whyDonateList: [
    "Our work depends on regular contributions from donors like you.",
    "People experiencing homelessness and housing insecurity will have access to free internet and essential digital services.",
    "We serve over 3,000 users on a daily basis and we’re always working to grow our network and deepen its capabilities.",
    "These funds provide our advisory Community Representatives a stipend for their work.",
    "Our organization is built on the belief that everyone has the right to connectivity.",
  ],
  impactTitle: "Your impact",
  impactList: [
    "$40 will go to a single Community Representative for their time conducting a Datathon event.",
    "$150 connects a bed to wifi for five years.",
    "$200 to $300 pays for up to seven Community Representatives’ time for a either a research or Datathon event.",
    "$500 covers hosting an entire Datathon, which provides food for all volunteers and Community Representatives.",
    "Depending on the size, about $2,000 to $2,500 can wire an entire shelter.",
  ],
};
