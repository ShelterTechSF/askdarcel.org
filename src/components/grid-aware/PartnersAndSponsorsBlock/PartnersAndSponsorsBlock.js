import PropTypes from "prop-types";
import React from "react";

import s from "./PartnersAndSponsorsBlock.module.css";

/* PropType shapes */

const LogoPropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Subcomponent */

const LogosBlock = ({ logoImages }) => (
  <div>
    <div className={s.logoImagesRow}>
      {logoImages.map((logo) => (
        <div className={s.logoImagesRowItem}>
          <img key={1} src={logo.url} alt={logo.alt} />
        </div>
      ))}
    </div>
  </div>
);

LogosBlock.propTypes = {
  logoImages: PropTypes.arrayOf(LogoPropType).isRequired,
};

/* Main component */

const PartnersAndSponsorsBlock = ({ title, partnersAndSponsors }) => {
  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <LogosBlock logoImages={partnersAndSponsors} />
    </div>
  );

  return (
    <div>
      <section className={s.gridParent}>
        <GridAreaLeft />
        <GridAreaRight />
      </section>
    </div>
  );
};

PartnersAndSponsorsBlock.propTypes = {
  title: PropTypes.string.isRequired,
  partnersAndSponsors: PropTypes.arrayOf(LogoPropType).isRequired,
};

export default PartnersAndSponsorsBlock;
