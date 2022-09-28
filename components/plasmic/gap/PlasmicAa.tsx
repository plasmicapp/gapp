// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 27acRQBdiDjAQuC2V3WuRn
// Component: XZDS-8pVo3
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_gap.module.css"; // plasmic-import: 27acRQBdiDjAQuC2V3WuRn/projectcss
import sty from "./PlasmicAa.module.css"; // plasmic-import: XZDS-8pVo3/css

export type PlasmicAa__VariantMembers = {
  unnamedVariant2: "unnamedVariant2";
  unnamedVariant: "unnamedVariant";
};

export type PlasmicAa__VariantsArgs = {
  unnamedVariant2?: SingleBooleanChoiceArg<"unnamedVariant2">;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
};

type VariantPropType = keyof PlasmicAa__VariantsArgs;
export const PlasmicAa__VariantProps = new Array<VariantPropType>(
  "unnamedVariant2",
  "unnamedVariant"
);

export type PlasmicAa__ArgsType = {};
type ArgPropType = keyof PlasmicAa__ArgsType;
export const PlasmicAa__ArgProps = new Array<ArgPropType>();

export type PlasmicAa__OverridesType = {
  root?: p.Flex<"div">;
  cmsDataLoader?: p.Flex<typeof CmsQueryRepeater>;
  freeBox?: p.Flex<"div">;
  text?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
};

export interface DefaultAaProps {
  unnamedVariant2?: SingleBooleanChoiceArg<"unnamedVariant2">;
  unnamedVariant?: SingleBooleanChoiceArg<"unnamedVariant">;
  className?: string;
}

function PlasmicAa__RenderFunc(props: {
  variants: PlasmicAa__VariantsArgs;
  args: PlasmicAa__ArgsType;
  overrides: PlasmicAa__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.root
      )}
    >
      <CmsQueryRepeater
        data-plasmic-name={"cmsDataLoader"}
        data-plasmic-override={overrides.cmsDataLoader}
        className={classNames("__wab_instance", sty.cmsDataLoader)}
        desc={false}
        emptyMessage={
          <ph.DataCtxReader>
            {$ctx => (
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__sdJmf
                )}
              >
                {"No matching published entries found."}
              </div>
            )}
          </ph.DataCtxReader>
        }
        forceEmptyState={false}
        forceLoadingState={false}
        limit={2 as const}
        loadingMessage={
          <ph.DataCtxReader>
            {$ctx => (
              <React.Fragment>
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Enter some text"}
                </div>

                <h1
                  data-plasmic-name={"h1"}
                  data-plasmic-override={overrides.h1}
                  className={classNames(
                    projectcss.all,
                    projectcss.h1,
                    projectcss.__wab_text,
                    sty.h1
                  )}
                >
                  {"You won't believe what happens next."}
                </h1>
              </React.Fragment>
            )}
          </ph.DataCtxReader>
        }
        noLayout={false}
        table={"emptymodel" as const}
        useDraft={false}
      >
        <ph.DataCtxReader>
          {$ctx =>
            true ? (
              <div
                data-plasmic-name={"freeBox"}
                data-plasmic-override={overrides.freeBox}
                className={classNames(projectcss.all, sty.freeBox)}
              >
                {true ? (
                  <CmsRowField
                    className={classNames(
                      "__wab_instance",
                      sty.cmsEntryField__aCpnt
                    )}
                    field={"newField" as const}
                    table={"emptymodel" as const}
                  />
                ) : null}

                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__t6PCw
                  )}
                  field={"newField2" as const}
                  table={"emptymodel" as const}
                />

                <CmsRowField
                  className={classNames(
                    "__wab_instance",
                    sty.cmsEntryField__zwdUg
                  )}
                  field={"newField3" as const}
                  table={"emptymodel" as const}
                />
              </div>
            ) : null
          }
        </ph.DataCtxReader>
      </CmsQueryRepeater>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "cmsDataLoader", "freeBox", "text", "h1"],
  cmsDataLoader: ["cmsDataLoader", "freeBox", "text", "h1"],
  freeBox: ["freeBox"],
  text: ["text"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  cmsDataLoader: typeof CmsQueryRepeater;
  freeBox: "div";
  text: "div";
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAa__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAa__VariantsArgs;
    args?: PlasmicAa__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAa__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAa__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAa__ArgProps,
          internalVariantPropNames: PlasmicAa__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAa__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAa";
  } else {
    func.displayName = `PlasmicAa.${nodeName}`;
  }
  return func;
}

export const PlasmicAa = Object.assign(
  // Top-level PlasmicAa renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    cmsDataLoader: makeNodeComponent("cmsDataLoader"),
    freeBox: makeNodeComponent("freeBox"),
    text: makeNodeComponent("text"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicAa
    internalVariantProps: PlasmicAa__VariantProps,
    internalArgProps: PlasmicAa__ArgProps
  }
);

export default PlasmicAa;
/* prettier-ignore-end */
