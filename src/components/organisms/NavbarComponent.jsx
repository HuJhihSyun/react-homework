// import logo from '../../logo.svg';
import { Flex, Button, Space } from 'antd';
import { GiftOutlined } from '@ant-design/icons';

const navStyle = {
  padding: '20px 0',
};

function Header() {
  return (
      <nav style={navStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <a
            href="https://reactjs.org"
            target="_blank" rel="noreferrer"
          >
              <GiftOutlined />
              Learn React
          </a>
          <div>
            <Space size={'middle'}>
              <Button type="link">Link Button</Button>
              <Button ghost>Primary Button</Button>
              <Button type="primary">Dashed Button</Button>
            </Space>
          </div>
        </Flex>
      </nav>
  );
}

export default Header;
