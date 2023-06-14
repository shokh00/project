import { Routes, Route, useNavigate } from "react-router-dom";
import { AppstoreOutlined, BarChartOutlined, WalletOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import Dashboard from "./pages/dashboard/Dashboard";

const { Sider } = Layout;

const App = () => {
  const navigation = useNavigate();

  return (
    <>
      <div className='container' style={{ background: "#1A202C" }}>
        <Sider
          collapsed={true}
          breakpoint="lg"
          collapsedWidth="100"
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{ background: "#364153", height: "96vh", padding: "5px 0 0 1px", borderRadius: "16px" }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['0']}
            items={[
              {
                key: '1',
                icon: <AppstoreOutlined />,
                label: 'Dashboard',
                onClick: () => navigation("dashboard")
              },
              {
                key: '2',
                icon: <BarChartOutlined />,
                label: 'Chart',
              },
              {
                key: '3',
                icon: <WalletOutlined />,
                label: 'Orders',
              },
              {
                key: '4',
                icon: <SettingOutlined />,
                label: 'Settings',
              }
            ]}
          />
        </Sider>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
};
export default App;