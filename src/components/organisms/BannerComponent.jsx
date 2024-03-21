import { Flex, Space } from 'antd';
import AtomicButton from '../atomics/AtomicButton';
import { RocketOutlined } from '@ant-design/icons';
import phone from '../../assets/images/phone.svg';
import shiny1 from '../../assets/images/shiny1.svg';
import shiny2 from '../../assets/images/shiny2.svg';

const startFunction = () => {
    console.log('Get start');
}

const workFunction = () => {
    console.log('How it works');
}

function Banner() {
return (
    <header className='header'>
    <Flex justify={'space-between'} align={'center'}>
        <div>
            <h1 className='header-title'>Create Engaging<br/>Landing Pages</h1>
            <p className='header-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quaerat consequuntur tenetur quasi quisquam sit in officiis neque blanditiis velit nulla quis porro? Similique ea illum modi, ex quam laborum.</p>
            <div style={{ marginTop: '30px' }}>
                <Space size={'middle'}>
                    <AtomicButton type={'solid'} buttonHandler={startFunction}><RocketOutlined rotate={45}/>Get start</AtomicButton>
                    <AtomicButton type={'outline'} buttonHandler={workFunction}>How it works</AtomicButton>
                </Space>
            </div>
        </div>
        <div className='header-image'>
            <img src={phone} className="header-image-phone" alt="phone" />
            <img src={shiny1} className="header-image-shiny1" alt="phone" />
            <img src={shiny2} className="header-image-shiny2" alt="phone" />
        </div>
    </Flex>
    </header>
);
}

export default Banner;
