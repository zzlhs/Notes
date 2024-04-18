// import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <LevelTaskPage></LevelTaskPage>
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';

import LevelTaskPage from './componments/LevelTaskPage'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={!collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: '优先级视图',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: '日历视图',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: '退出',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 0 0 20vh', background: '#F5F5F5' }}>
            <h1>优先级视图</h1>
        </Header>
        <Content
          style={{
            margin: '1vh', /* 上 右 下 左 */
            padding: 24,
            // minHeight: 280,
            height: '90vh',
            background: '#F5F5F5',
            borderRadius: borderRadiusLG,
          }}
        >
        <LevelTaskPage></LevelTaskPage>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

{/* <Button
type="text"
icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
onClick={() => setCollapsed(!collapsed)}
style={{
  fontSize: '16px',
  width: 64,
  height: '10vh',
}}
/> */}