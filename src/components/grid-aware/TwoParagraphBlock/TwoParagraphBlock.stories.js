import React from "react";

import TwoParagraphBlock from "./TwoParagraphBlock";
import image from "./stories/darcel-jackson-headshot.png";

export default {
  title: "Grid-Aware/TwoParagraphBlock",
  component: TwoParagraphBlock,
};

const Template = ({ title, paragraph1, paragraph2, image1, ctaButton }) => (
  <div style={{ border: "1px dashed rebeccapurple" }}>
    <TwoParagraphBlock
      title={title}
      paragraph1={paragraph1}
      paragraph2={paragraph2}
      image={image1}
      ctaButton={ctaButton}
    />
  </div>
);

export const Gray = Template.bind({});
Gray.args = {
  title: "Rooted in the Community",
  paragraph1:
    "ShelterTech was founded in 2016 by Darcel Jackson, who experienced homelessness first hand. Darcel envisioned a Bay Area where technology serves everyone, and those who were most vulnerable had the digital infrastructure and tools they need to get back on their feet.",
  paragraph2: (
    <>
      <p style={{ marginTop: "0" }}>
        Our all volunteer team is paving the way for a new kind of community
        organisation, one where expertise is shared across income boundaries and
        life experiences. From day one, we’ve worked side-by-side with those
        experiencing homelessness to understand the challenges they face and the
        solutions they want to address their needs.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <p style={{ marginBottom: "0" }}>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt.
      </p>
    </>
  ),
  image1: {
    url: image,
    alt: "Darcel Jackson head shot wearing a heather gray hoodie.",
  },
  ctaButton: {
    text: "More About us",
    internalLink: "/foo",
  },
};