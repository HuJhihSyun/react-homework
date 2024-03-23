import { Flex, Space } from 'antd';
import AtomicButton from '../atomics/AtomicButton';
import { GiftOutlined, RocketOutlined } from '@ant-design/icons';

function navbar() {
  return (
      <nav className='navbar'>
        <Flex justify={'space-between'} align={'center'}>
          <a
            className='navbar-logo'
            href="https://reactjs.org"
            target="_blank" rel="noreferrer"
          >
              <GiftOutlined />
              <span className='navbar-logo-text'>
                <strong>Landing</strong>Page
              </span>
          </a>
          <div>
            <Space size={'middle'}>
              <AtomicButton classProp={'mobile-hide'} type={'link'}>Contact</AtomicButton>
              <AtomicButton classProp={'mobile-hide'} type={'light'}>How it works</AtomicButton>
              <AtomicButton type={'solid'}><RocketOutlined rotate={45}/>Get start</AtomicButton>
            </Space>
          </div>
        </Flex>
      </nav>
  );
}

export default navbar;
