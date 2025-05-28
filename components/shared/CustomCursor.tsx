"use client";
import AnimatedCursor from "react-animated-cursor";

 interface AnimatedCursorProps {
  innerSize?: number;
  outerSize?: number;
  innerScale?: number;
  outerScale?: number;
  outerAlpha?: number;
  hasBlendMode?: boolean;
  innerStyle?: React.CSSProperties;
  outerStyle?: React.CSSProperties;
}

export const CustomCursor = (props: AnimatedCursorProps) => {
  return <AnimatedCursor {...props} />;
};
