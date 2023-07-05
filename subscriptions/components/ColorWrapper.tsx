import React, { CSSProperties } from "react";

const ColorWrapper = ({
  children,
  style,
  classes,
  toBottom,
}: {
  children: React.ReactNode;
  style?: CSSProperties;
  classes?: string;
  toBottom: boolean;
}) => {
  return (
    <div
      className={`${classes} ${
        toBottom ? "bg-gradient-to-b" : "bg-gradient-to-r"
      } w-fit rounded-4xl from-primaryPink to-primaryBlue p-1`}
      style={style ?? {}}
    >
      {children}
    </div>
  );
};

export default ColorWrapper;
