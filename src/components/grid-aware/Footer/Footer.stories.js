import React from "react";
import Footer from "./Footer";
import shelterTechLogoWhite from "./sheltertech-logo-white.svg";
import facebookLogo from "./stories/facebook.svg";
import githubLogo from "./stories/github.svg";
import instagramLogo from "./stories/instagram.svg";
import sealOfTransparency from "./stories/seal-of-transparency.svg";
import twitterLogo from "./stories/twitter.svg";

export default {
  title: "Grid-Aware/Footer",
  component: Footer,
};

const Template = ({
  inputText,
  footerNavigation,
  seals,
  shelterTechLogo,
  socialMediaLinks,
  address,
  employeeIdentificationNumber,
}) => (
  <Footer
    inputText={inputText}
    footerNavigation={footerNavigation}
    seals={seals}
    shelterTechLogo={shelterTechLogo}
    socialMediaLinks={socialMediaLinks}
    address={address}
    employeeIdentificationNumber={employeeIdentificationNumber}
  />
);

export const DefaultFooter = Template.bind({});
DefaultFooter.args = {
  inputText: {
    placeholderText: "email address",
    widthDesktop: "291px",
    widthMobile: "155px",
  },
  footerNavigation: [
    { name: "Programs", url: "/programs" },
    { name: "Volunteer", url: "/new/volunteer" },
    { name: "Donate", url: "/new/donate" },
  ],
  seals: [{ logo: sealOfTransparency, alt: "Seal of Transparency" }],
  shelterTechLogo: { logo: shelterTechLogoWhite, alt: "ShelterTech Logo" },
  socialMediaLinks: [
    {
      url: "https://www.facebook.com/ShelterTechOrg/",
      logo: facebookLogo,
      alt: "Facebook Logo",
    },
    {
      url: "https://twitter.com/sheltertechorg",
      logo: twitterLogo,
      alt: "Twitter Logo",
    },
    {
      url: "https://www.instagram.com/shelter_tech",
      logo: instagramLogo,
      alt: "Instagram Logo",
    },
    {
      url: "https://github.com/ShelterTechSF",
      logo: githubLogo,
      alt: "GitHub Logo",
    },
  ],
  address: "268 Bush Street #4302, San Francisco CA, 94104 USA",
  employeeIdentificationNumber: "ein: 38-3984099",
};
