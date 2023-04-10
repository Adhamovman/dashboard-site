import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CalculatorOutlined,
  DashboardOutlined,
  BuildOutlined,
  FolderOpenOutlined,
  FormatPainterOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AdminLayout.css";

const { Header, Sider, Content } = Layout;
const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("0");
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const menus = [
    { name: "Dashboard", to: "", icon: <DashboardOutlined /> },
    { name: "Manager", to: "manager", icon: <FolderOpenOutlined /> },
    { name: "Architect", to: "architect", icon: <CalculatorOutlined /> },
    { name: "Laborer", to: "laborer", icon: <FormatPainterOutlined /> },
  ];
  return (
    <Layout>
      <Sider
        style={{
          height: "100vh",
        }}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo">
          <BuildOutlined />
          <p className="comp_name"> Structure Company</p>
        </div>
        <Menu
          style={{ height: "100vh" }}
          theme="dark"
          mode="inline"
          selectedKeys={[current]}
          items={menus.map((menu, i) => ({
            key: "" + i,
            icon: <Link to={"/" + menu.to}>{menu.icon}</Link>,
            label: menu.name,
            onClick: ({ key }) => setCurrent(key),
          }))}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          style={{
            margin: "24px 0",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminLayout;
