import { useEffect } from 'react';
import { Flex, Space } from 'antd';
import { RocketOutlined } from '@ant-design/icons';
import AtomicButton from '../atomics/AtomicButton';
import phone from '../../assets/images/phone.svg';
import shiny1 from '../../assets/images/shiny1.svg';
import shiny2 from '../../assets/images/shiny2.svg';

import gsap from "https://esm.sh/gsap";

const startFunction = () => {
    console.log('Get start');
}

const workFunction = () => {
    console.log('How it works');
}

function Banner() {

    useEffect(() => {
            gsap.timeline()
            .to(".header-content-image-phone", { yPercent: -30 })
            .to(".header-shiny", { opacity: 1, stagger: 0.5});
        }, []
    );

    return (
        <header className='header'>
        <Flex className='header-content' justify={'space-between'} align={'center'}>
            <div>
                <h1 className='header-content-title'>Create Engaging<br/>Landing Pages</h1>
                <p className='header-content-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, quaerat consequuntur tenetur quasi quisquam sit in officiis neque blanditiis velit nulla quis porro? Similique ea illum modi, ex quam laborum.</p>
                <div className='header-content-btn-section'>
                    <Space className='header-content-btn-section-space' size={'middle'}>
                        <AtomicButton type={'solid'} buttonHandler={startFunction}><RocketOutlined rotate={45}/>Get start</AtomicButton>
                        <AtomicButton type={'outline'} buttonHandler={workFunction}>How it works</AtomicButton>
                    </Space>
                </div>
            </div>
            <div className='header-content-image'>
                <img src={phone} className="header-content-image-phone" alt="phone" />
                <img src={shiny1} className="header-shiny header-content-image-shiny1" alt="shiny" />
                <img src={shiny2} className="header-shiny header-content-image-shiny2" alt="shiny" />
            </div>
        </Flex>
        </header>
    );
}

export default Banner;
