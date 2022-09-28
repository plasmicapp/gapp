// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Star1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Star1Icon(props: Star1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 126 80"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M62.66 0L77.4 30.557h47.705L86.512 49.442l14.742 30.557L62.66 61.114 24.066 79.999l14.741-30.557L.214 30.557h47.704L62.66 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Star1Icon;
/* prettier-ignore-end */
