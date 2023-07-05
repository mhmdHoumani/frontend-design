import Link from "next/link";
import React from "react";

const NotFound = ({ title, styles }: { title: string; styles: string }) => {
  return (
    <div className={styles}>
      {title && (
        <h1 className="text-5xl font-bold text-center mq-600:text-3xl">
          {title}
        </h1>
      )}
    </div>
  );
};

export default NotFound;
