import React from "react";
import Link from "next/link";
import Image from "next/image";
import SidebarSearchField from "@/components/SidebarSearchField";

export default async function Sidebar({ lng }) {
  return (
    <>
      <section className="col sidebar">
        <Link href={"/"} className="link--unstyled">
          <section className="sidebar-header">
            <Image
              className="logo"
              src="/logo.svg"
              width={22}
              height={20}
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <SidebarSearchField lng={lng} />
        </section>
        <nav>{/* SidebarNoteList */}</nav>
      </section>
    </>
  );
}
