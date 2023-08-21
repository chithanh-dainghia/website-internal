import React, {
  ReactNode,
  createElement,
  forwardRef,
  useContext,
  useMemo,
} from "react";
// @ts-ignore

import { mergeClasses } from "@griffel/react";

import { BaseHeadingContext, useBaseTextContext } from "@ui/context";

import { useStyles } from "./styles";

type BaseHeadingReactProps = {
  children: ReactNode;
  isPrimaryHeading?: boolean;
  testid?: string;
  className?: string;
};

const BaseHeadingReact = forwardRef<HTMLElement, BaseHeadingReactProps>(
  ({ children, className, isPrimaryHeading = false, testid }, ref) => {
    const classes = useStyles();

    const heading = useContext(BaseHeadingContext);

    const HeadingComponent = useMemo(() => {
      return isPrimaryHeading ? "h1" : "h" + Math.max(Math.min(heading, 6), 2);
    }, [isPrimaryHeading, heading]);

    const baseTextContextValue = useBaseTextContext();
    const isNested =
      (baseTextContextValue === null
        ? undefined
        : baseTextContextValue?.nested) === true;

    // HeadingComponent
    // @ts-ignore
    return React.jsx(HeadingComponent, {
      className: mergeClasses(classes.root, className),
      "data-testid": undefined,
      dir: isNested ? undefined : "auto",
      ref,
      children,
    });
  }
);

BaseHeadingReact.displayName = "BaseHeading.react";

export default BaseHeadingReact;
