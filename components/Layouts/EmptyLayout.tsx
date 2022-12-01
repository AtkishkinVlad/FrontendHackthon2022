import React from "react";

type Props = {
  children: React.ReactNode;
}

const EmptyLayout: React.FC<Props> = ({ children }) => {
  return (
    <main>{children}</main>
  )
}

export default EmptyLayout;