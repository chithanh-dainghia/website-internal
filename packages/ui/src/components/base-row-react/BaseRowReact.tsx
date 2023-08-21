import React, { ReactNode, forwardRef, useMemo } from "react";
import { BaseViewReact } from "../base-view-react";
import { mergeClasses } from "@griffel/react";
import { BaseRowContext } from "@ui/context";
import {
  ALIGN,
  useAlignItemsStyles,
  useDirectionStyles,
  useJustifyContentStyles,
  useStyles,
  useWrapStyles,
} from "./styles";

type BaseRowReactProps = {
  align?: "start" | "end" | "justify" | "center";
  children?: ReactNode;
  columns?: number;
  direction?: "backward" | "forward";
  expanding?: boolean;
  verticalAlign?: "center" | "stretch" | "bottom" | "top";
  wrap?: "none" | "backward" | "forward";
  className?: string;
};

const BaseRowReact = forwardRef<HTMLDivElement, BaseRowReactProps>(
  (
    {
      align = "justify",
      children,
      columns = 0,
      direction = "forward",
      className,
      expanding = false,
      verticalAlign = "stretch",
      wrap = "none",
      ...rest
    },
    ref
  ) => {
    const classes = useStyles();
    const justifyContentClasses = useJustifyContentStyles();
    const alignItemsClasses = useAlignItemsStyles();
    const wrapStyles = useWrapStyles();
    const directionStyles = useDirectionStyles();

    const value = useMemo(() => {
      return { columns, wrap };
    }, [columns, wrap]);

    return (
      <BaseViewReact
        {...rest}
        ref={ref}
        className={mergeClasses(
          classes.row,
          expanding && classes.expanding,
          // @ts-ignore
          justifyContentClasses[
            direction === "forward" && (align === "start" || align === "end")
              ? ALIGN[align]
              : align
          ],
          alignItemsClasses[verticalAlign],
          wrapStyles[wrap],
          directionStyles[direction],
          className
        )}
      >
        <BaseRowContext.Provider value={value}>
          {children}
        </BaseRowContext.Provider>
      </BaseViewReact>
    );
  }
);

BaseRowReact.displayName = "BaseRow.react";
