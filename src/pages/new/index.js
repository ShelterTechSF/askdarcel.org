import React from "react";

import ArticleSpotlightCard from "../../components/grid-aware/ArticleSpotlightCard";
import articleSpotlightImage from "../../components/grid-aware/ArticleSpotlightCard/stories/background.png";
import HomePageLargeParagraph from "../../components/grid-aware/HomePageLargeParagraph";
import PartnersAndSponsorsBlock from "../../components/grid-aware/PartnersAndSponsorsBlock";
import benetechLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/benetech-logo.png";
import ciscoLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/cisco-logo.png";
import justiceAndDiversityCenterLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/justice-and-diversity-center-logo.png";
import larkinStreetLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/larkin-street-logo.png";
import mohcdLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/mohcd-logo.png";
import pagerdutyLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/pagerduty-logo.png";
import sfFamiliesLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/sf-families-logo.png";
import uberLogo from "../../components/grid-aware/PartnersAndSponsorsBlock/stories/uber-logo.png";
import ProgramsBlock from "../../components/grid-aware/ProgramsBlock";
import communityDevelopmentImg from "../../components/grid-aware/ProgramsBlock/stories/community-development.jpg";
import sfServiceGuideImg from "../../components/grid-aware/ProgramsBlock/stories/sf-service-guide.jpg";
import shelterConnectImg from "../../components/grid-aware/ProgramsBlock/stories/shelter-connect.jpg";
import ThreeParagraphBlock from "../../components/grid-aware/ThreeParagraphBlock";
import image1 from "../../components/grid-aware/ThreeParagraphBlock/stories/image1.png";
import image2 from "../../components/grid-aware/ThreeParagraphBlock/stories/image2.png";
import image3 from "../../components/grid-aware/ThreeParagraphBlock/stories/image3.png";
import VideoHeader from "../../components/grid-aware/VideoHeader/VideoHeader";
import videoHeaderImage from "../../components/grid-aware/VideoHeader/stories/VideoHeader.png";
import VideoSpotlightBlock from "../../components/grid-aware/VideoSpotlightBlock";
import videoSpotlightBlockImage from "../../components/grid-aware/VideoSpotlightBlock/stories/VideoSpotlightBlock.svg";
import Layout from "../../components/layout";

export default () => (
  <Layout>
    <VideoHeader
      title="Less than half of nearly 10,000 people experiencing homelessness in the Bay Area have reliable access to the internet."
      description="ShelterTech is a nonprofit organization dedicated to supporting people who are experiencing homelessness or housing insecurity by leveraging technology and connectivity."
      image={videoHeaderImage}
      ctaButtons={[
        { text: "Donate", internalLink: "/new/donate" },
        { text: "Volunteer", internalLink: "/new/volunteer" },
      ]}
      playButtonLink="https://www.youtube.com/watch?v=KCduRWJ1hQo"
    />
    <HomePageLargeParagraph
      title="We believe connectivity is a human right."
      description="Access to the internet and technology makes it possible for people to find a job, human services, and contact family and friends."
    />
    <ThreeParagraphBlock
      title="Get involved"
      paragraph1={{
        title: "Volunteer",
        description:
          "Volunteers make our work possible. There are several ways to support our mission. Learn more and get involved.",
      }}
      paragraph2={{
        title: "Partnerships",
        description:
          "We work with companies, nonprofits, and local governments to empower the community. Reach out to us.",
      }}
      paragraph3={{
        title: "Donate",
        description:
          "Our programs are largely funded by donations from people who care about bridging the digital divide. Support ShelterTech today.",
      }}
      image1={{
        url: image1,
        alt: "Two volunteers working on a laptop together at a datathon.",
      }}
      image2={{
        url: image2,
        alt: "Team posing for a photo after a design workshop.",
      }}
      image3={{
        url: image3,
        alt: "Multiple volunteers working at a datathon.",
      }}
      ctaTitle="Volunteer, donate, or reach out to our partnerships team"
      ctaButtons={[
        { text: "Volunteer", internalLink: "/new/volunteer" },
        { text: "Donate", internalLink: "/new/donate" },
        { text: "Work with us", onClick: () => {} },
      ]}
    />
    <ProgramsBlock
      title="Our programs"
      programs={[
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
      ]}
    />
    <VideoSpotlightBlock
      eyebrowText="Our Impact"
      description="Over 3,000 people have daily internet access in local shelters and resource centers."
      button={{ text: "View Annual Report", internalLink: "/foo" }}
      image={{
        url: videoSpotlightBlockImage,
        alt: "Video spotlight of man speaking.",
      }}
      playButtonLink="/foo"
    />
    <PartnersAndSponsorsBlock
      title="Partners and sponsors"
      partnersAndSponsors={[
        {
          url: mohcdLogo,
          alt:
            "Logo of Mayor's Office of Housing and Community Development organization.",
        },
        {
          url: justiceAndDiversityCenterLogo,
          alt:
            "Logo of Justice and Diversity Center of The Bar Association of San Francisco organization.",
        },
        {
          url: benetechLogo,
          alt: "Logo of Benetech nonprofit organization.",
        },
        {
          url: larkinStreetLogo,
          alt: "Logo of Larkin Street Youth Services nonprofit organization.",
        },
        {
          url: sfFamiliesLogo,
          alt:
            "Logo of SF Families online public service directory organization.",
        },
        {
          url: ciscoLogo,
          alt: "Logo of Cisco Systems networking hardware company.",
        },
        {
          url: pagerdutyLogo,
          alt: "Logo of PagerDuty computer software company.",
        },
        {
          url: uberLogo,
          alt: "Logo of Uber Technologies Inc. company.",
        },
      ]}
    />
    <ArticleSpotlightCard
      eyebrowText="Partnership Spotlight"
      title="Digital Equity Team of San Francisco"
      description="Free Fiber Initiative summary we're working together to find new and different ways of building lasting infrastructure"
      button={{ text: "Read more", internalLink: "/foo" }}
      backgroundImage={articleSpotlightImage}
    />
  </Layout>
);
