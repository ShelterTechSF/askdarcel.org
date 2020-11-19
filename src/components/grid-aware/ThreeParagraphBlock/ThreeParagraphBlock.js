import PropTypes from "prop-types";
import React from "react";

import Button from "../../inline/Button";

import s from "./ThreeParagraphBlock.module.css";

/* PropType shapes */

const ParagraphPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
});

const ImagePropType = PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
});

/* Subcomponents */

const ParagraphBlock = ({ title, description, button }) => {
  let hasButton;

  if (button) {
    hasButton = (
      <div className={s.ctaButton}>
        <Button
          text={button.text}
          internalLink={button.internalLink}
          externalLink={button.externalLink}
          onClick={button.onClick}
        />
      </div>
    );
  }

  return (
    <div>
      <div className={s.paragraphTitle}>{title}</div>
      <div className={s.paragraphDescription}>{description}</div>
      {hasButton}
    </div>
  );
};

ParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  button: PropTypes.shape(Button.propTypes).isRequired,
};

const CTABlock = ({ title, buttons }) => (
  <div>
    <div className={s.ctaTitleBlock}>
      <div className={s.ctaTitle}>{title}</div>
    </div>
    <div className={s.ctaButtonRow}>
      {buttons.map(({ text, internalLink, externalLink, onClick }) => (
        <div className={s.ctaButtonRowItem} key={text}>
          <Button {...{ text, internalLink, externalLink, onClick }} />
        </div>
      ))}
    </div>
  </div>
);

CTABlock.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

/* Main component */

const ThreeParagraphBlock = ({
  title,
  paragraph1,
  paragraph2,
  paragraph3,
  leftTopImage = {
    url: "",
    alt: "",
  },
  leftBottomImage,
  rightImage,
  ctaTitle,
  ctaButtons,
}) => {
  let thirdImage;
  let leftBottomImageWrapper = s.leftBottomImageWrapper2;

  if (Object.keys(leftTopImage).length && leftTopImage.constructor === Object) {
    thirdImage = (
      <div className={s.leftTopImageWrapper}>
        <img src={leftTopImage.url} alt={leftTopImage.alt} />
      </div>
    );

    leftBottomImageWrapper = s.leftBottomImageWrapper;
  }

  const GridAreaLeft = () => (
    <div className={s.gridAreaLeft}>
      <h1 className={s.title}>{title}</h1>
      <div className={leftBottomImageWrapper}>
        <img
          className={s.image}
          src={leftBottomImage.url}
          alt={leftBottomImage.alt}
        />
      </div>
      {thirdImage}
    </div>
  );

  const GridAreaMiddle = () => (
    <div className={s.gridAreaMiddle}>
      <div className={s.paragraph1Wrapper}>
        <ParagraphBlock
          title={paragraph1.title}
          description={paragraph1.description}
          button={paragraph1.button}
        />
      </div>
      <div className={s.paragraph2Wrapper}>
        <ParagraphBlock
          title={paragraph2.title}
          description={paragraph2.description}
          button={paragraph2.button}
        />
      </div>
    </div>
  );

  const GridAreaRight = () => (
    <div className={s.gridAreaRight}>
      <div className={s.paragraph3Wrapper}>
        <ParagraphBlock
          title={paragraph3.title}
          description={paragraph3.description}
          button={paragraph3.button}
        />
      </div>
      <div className={s.rightImageWrapper}>
        <img className={s.image} src={rightImage.url} alt={rightImage.alt} />
      </div>
    </div>
  );

  let GridAreaBottom;
  let { gridParent } = s;

  if (ctaTitle.length && ctaButtons.length) {
    GridAreaBottom = (
      <div className={s.gridAreaBottom}>
        <CTABlock title={ctaTitle} buttons={ctaButtons} />
      </div>
    );

    gridParent = s.gridParent2;
  }

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedBackground} />
      <div className={s.bleedMainContent}>
        <section className={gridParent}>
          <GridAreaLeft />
          <GridAreaMiddle />
          <GridAreaRight />
          {GridAreaBottom}
        </section>
      </div>
    </div>
  );
};

ThreeParagraphBlock.defaultProps = {
  leftTopImage: {
    url: "",
    alt: "",
  },
};

ThreeParagraphBlock.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph1: ParagraphPropType.isRequired,
  paragraph2: ParagraphPropType.isRequired,
  paragraph3: ParagraphPropType.isRequired,
  leftBottomImage: ImagePropType.isRequired,
  rightImage: ImagePropType.isRequired,
  leftTopImage: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  ctaTitle: PropTypes.string.isRequired,
  ctaButtons: PropTypes.arrayOf(Button.propTypes).isRequired,
};

export default ThreeParagraphBlock;
