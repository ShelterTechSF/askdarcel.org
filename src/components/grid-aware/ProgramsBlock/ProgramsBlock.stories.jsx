import React from "react";

import ProgramsBlock from "./ProgramsBlock";

import communityDevelopmentImg from "./stories/community-development.jpg";
import sfServiceGuideImg from "./stories/sf-service-guide.jpg";
import shelterConnectImg from "./stories/shelter-connect.jpg";

export default {
  title: "Grid-Aware/ProgramsBlock",
  component: ProgramsBlock,
};

const Template = ({ title, programs }) => (
  <ProgramsBlock title={title} programs={programs} />
);

export const DefaultProgramsBlock = Template.bind({});
DefaultProgramsBlock.args = {
  title: "Our programs",
  programs: [
    {
      theme: "dark",
      image: shelterConnectImg,
      imageAlt: "Image of ShelterTech booth with 4 volunteers smiling.",
      title: "ShelterConnect",
      description:
        "Every year, our ShelterConnect program provides 3XXX homeless and housing insecure people with free and unlimited internet access and we plan to provide every homeless individual with the digital infrastructure that meets their needs by 2024.",
    },
    {
      theme: "dark",
      image: sfServiceGuideImg,
      imageAlt:
        "Image of the back of two people sitting where the woman on the left is pointing to the monitor of a Macbook as the man observes.",
      title: "SF Service Guide",
      description:
        "Anyone with access to a smartphone, tablet, or computer can utilize this online directory of human services provided in San Francisco.",
    },
    {
      theme: "dark",
      image: communityDevelopmentImg,
      imageAlt: "Image of ShelterTech community member smiling.",
      title: "Community Development",
      description:
        "We depend on Community Representatives to inform our work from their lived experiences and rely on volunteers to continuously updated the resources we develop.",
    },
  ],
};
