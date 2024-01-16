import React, { ReactNode } from "react";
import Header from "./Header";
type Props = {
  children: ReactNode;
  title?: string;
};

export default function Layout({ children, title }: Props) {
  return (
    <>
      <Header title={title} />
      <main className="p-4 container mx-auto">{children}</main>
    </>
  );
}
