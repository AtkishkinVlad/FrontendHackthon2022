import React from "react"

import { ExportAside } from "../Aside"

type ILayout = {
    children: React.ReactNode
}

export default function Layout({ children }: ILayout) {
  return (
    <>
      <ExportAside />
      <main>{children}</main>
    </>
  )
}