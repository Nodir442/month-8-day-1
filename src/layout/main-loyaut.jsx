import React from "react";
import { data } from "../layout/loyaut";
import "./style.css";

import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Link, Outlet } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

const items2 = data.map(({ children, icon, key, label }) => {
  return {
    key,
    label,
    icon: React.createElement(icon),
    children: children.map((child) => {
      return {
        key: child.key,
        label: <Link to={child.path}>{child.label}</Link>,
      };
    }),
  };
});
export const MainLoyaut = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <div className="wrapper">
      <Layout>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <Layout
            style={{
              padding: "24px 0",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Sider
              style={{
                background: colorBgContainer,
              }}
              width={200}
            >
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{
                  height: "100%",
                }}
                items={items2}
              />
            </Sider>
            <Content
              style={{
                padding: "0 24px",
                minHeight: 280,
              }}
            >
              <Outlet />
            </Content>
          </Layout>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Footer Content{" "}
        </Footer>
      </Layout>
    </div>
  );
};
