// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector1IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector1Icon(props: Vector1IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1134 837"}
      height={"1em"}
      width={"1em"}
      style={{
        stroke: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M695 514.904c-129.667-69.334-391-214.6-399-241-8-26.4-170 265-250 414l803-136-239-438c-107.333 77-333.6 249-380 321-58 90 263 243 302 253s-339-217-398-195 33 211 131 256 196 96 246 86 333-238 338-244-294-236-363-241c-55.2-4-346.333 87-485 133 92.667-262.667 266.2-701 219-353-59 435 166-119 438 93s720-30 310 72"
        }
        stroke={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector1Icon;
/* prettier-ignore-end */
