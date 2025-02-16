"use client";

import { TriggerSiderStyle } from "@/styles/GStyle";
import { ColorPalette } from "@/theme/themes";
import { Layout, Menu } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Menu.css";
import sidebarItems from "./SidebarItems";

const { Sider } = Layout;

const Sidebar = ({
  collapsed,
  setCollapsed,
  setIsMobile: setMobile,
  onToggle,
}: any) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 992);
      setIsSmallScreen(width <= 480);
    };

    checkScreenSize(); // Initial check on mount
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    <>
      {/* Overlay to close menu */}
      {isMobile && (
        <div
          onClick={onToggle}
          className={`${!collapsed ? "overly" : "overly-out"}`}
        />
      )}
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        breakpoint="lg"
        collapsedWidth="0"
        width={280}
        trigger={null}
        style={{
          transform: collapsed ? "translateX(-200%)" : "translateX(0)",
          ...TriggerSiderStyle,
          height: "100vh",
          position: isMobile ? "fixed" : "sticky",
          background: `${ColorPalette?.sidebarBg}`,
          border: "none",
        }}
        className="trigger-menu custom-menu"
        onBreakpoint={(broken) => {
          setMobile(broken);
          if (broken) {
            setCollapsed(true);
          } else {
            setCollapsed(false);
          }
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{ margin: "25px 0" }}
        >
          <Link href={`/`}>
            <Image
              src="/assets/images/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={sidebarItems()}
          style={{
            minHeight: "100vh",
            background: `${ColorPalette.sidebarBg}`,
          }}
        />
      </Sider>
    </>
  );
};

export default Sidebar;
