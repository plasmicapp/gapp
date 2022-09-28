import * as React from "react";
import {
  PlasmicMyComponent,
  DefaultMyComponentProps
} from "./plasmic/gap/PlasmicMyComponent";
import {
  ButtonRef,
  HtmlAnchorOnlyProps,
  HtmlButtonOnlyProps
} from "@plasmicapp/react-web";

interface MyComponentProps extends DefaultMyComponentProps {}

function MyComponent_(props: MyComponentProps, ref: ButtonRef) {
  const { plasmicProps } = PlasmicMyComponent.useBehavior<MyComponentProps>(
    props,
    ref
  );
  return <PlasmicMyComponent {...plasmicProps} />;
}

type ButtonComponentType = {
  (
    props: Omit<MyComponentProps, HtmlAnchorOnlyProps> & {
      ref?: React.Ref<HTMLButtonElement>;
    }
  ): React.ReactElement;
  (
    props: Omit<MyComponentProps, HtmlButtonOnlyProps> & {
      ref?: React.Ref<HTMLAnchorElement>;
    }
  ): React.ReactElement;
};

const MyComponent = React.forwardRef(
  MyComponent_
) as any as ButtonComponentType;

export default Object.assign(MyComponent, {
  __plumeType: "button"
});
