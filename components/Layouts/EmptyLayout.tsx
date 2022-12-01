import React, { ReactNode } from "react";

const EmptyLayout = ({ children }: { children: ReactNode}) => {
  return (
    <main>{children}</main>
  )
}

export default EmptyLayout;