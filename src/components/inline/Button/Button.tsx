import { Link } from "gatsby";
import * as React from "react";

import s from "./Button.module.css";

type CommonProps = {
  text: string;
  noHover?: boolean;
};

type ExternalButtonProps = {
  externalLink: string;
};

type InternalButtonProps = {
  internalLink: string;
};

type OnClickProps = {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = CommonProps &
  (ExternalButtonProps | InternalButtonProps | OnClickProps);

const Button = (props: ButtonProps) => {
  const { text } = props;
  const className = `${s.button} ${props.noHover ? s.noHover : ""}`;

  if ("externalLink" in props) {
    const { externalLink } = props;
    return (
      <a
        rel="noreferrer"
        target="_blank"
        href={externalLink}
        className={className}
      >
        {text}
      </a>
    );
  }
  if ("internalLink" in props) {
    const { internalLink } = props;
    return (
      <Link className={className} to={internalLink}>
        {text}
      </Link>
    );
  }
  if ("onClick" in props) {
    const { onClick } = props;
    return (
      <button
        type="button"
        className={className}
        onClick={(event) => {
          onClick(event);
        }}
      >
        {text}
      </button>
    );
  }
  throw new Error(
    "Missing required prop. Must specify one of: externalLink, internalLink, or onClick."
  );
};

export default Button;

/** A version of the Button specifically to be used with forms as the submit button. */

type SubmitButtonProps = {
  value: string;
  noHover: boolean;
  name: string;
};

export const SubmitButton = ({ value, noHover, name }: SubmitButtonProps) => {
  const className = `${s.button} ${noHover ? s.noHover : ""}`;
  return (
    <input className={className} type="submit" name={name} value={value} />
  );
};