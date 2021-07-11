import * as React from "react";
import Button, { ButtonProps } from "../../inline/Button";
import * as s from "./ShelterConnectBlock.module.css";

type ServiceGuideProps = {
  url: string;
  alt: string;
};

type ShelterConnectBlockProps = {
  title: string;
  subtitle: string;
  description: string;
  description2: string;
  bullet1: string;
  bullet2: string;
  bullet3: string;
  description3: string;
  image: ServiceGuideProps;
  ctaButtons: ButtonProps[];
};

const ShelterConnectBlock = ({
  title,
  subtitle,
  description,
  description2,
  bullet1,
  bullet2,
  bullet3,
  description3,
  image,
  ctaButtons,                                                                                                                                                 
}: ShelterConnectBlockProps) => {
  const GridAreaRight = () => (
    <div className={s.gridAreaText}>
      <h1 className={s.title}>{title}</h1>
      <div className={s.subtitle}>{subtitle}</div>
      <div className={s.description}>{description}</div>
      <div className={s.description}>{description2}</div>
      <ul className={s.bullet}>
        <li>{bullet1}</li>
        <li>{bullet2}</li>
        <li>{bullet3}</li>
      </ul>
      <div className={s.description}>{description3}</div>
      <div className={s.ctaButtonRow}>
        {ctaButtons.map((button) => (
          <div className={s.ctaButtonRowItem} key={button.text}>
            <Button
              text={button.text}
              internalLink={button.internalLink}
              externalLink={button.externalLink}
              onClick={button.onClick}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={s.bleedWrapper}>
      <div className={s.bleedMainContent}>
        <section className={s.gridParent}>
          <GridAreaRight />
          <div className={s.gridAreaImage1}>
            <img className={s.image} src={image.url} alt={image.alt} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShelterConnectBlock;
