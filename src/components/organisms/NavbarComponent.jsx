import { Flex, Space } from 'antd';
import AtomicButton from '../atomics/AtomicButton';
import { GiftOutlined, RocketOutlined } from '@ant-design/icons';

const navStyle = {
  padding: '20px 0',
};

function Header() {
  return (
      <nav style={navStyle}>
        <Flex justify={'space-between'} align={'center'}>
          <a
            className={'nav-logo'}
            href="https://reactjs.org"
            target="_blank" rel="noreferrer"
          >
              <GiftOutlined />
              <span>Landing</span>Page
          </a>
          <div>
            <Space size={'middle'}>
              <AtomicButton type={'link'}>Contact</AtomicButton>
              <AtomicButton type={'light'}>How it works</AtomicButton>
              <AtomicButton type={'solid'}><RocketOutlined rotate={45}/>Get start</AtomicButton>
            </Space>
          </div>
        </Flex>
      </nav>
  );
}

export default Header;
