import { useRef, useEffect } from 'react';
import { Flex, Col, Row, Typography } from 'antd';
import AtomicFeature from '../atomics/AtomicFeature';
import { BuildOutlined, EditOutlined, AppstoreAddOutlined, CodeOutlined } from '@ant-design/icons';
import phone from '../../assets/images/phone.svg';
import shiny1 from '../../assets/images/shiny1.svg';
import shiny2 from '../../assets/images/shiny2.svg';

import gsap from "https://esm.sh/gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Text } = Typography;

function Feature() {

  const featureList = useRef([
    {
      icon: BuildOutlined,
      title: 'Fast building',
    },
    {
      icon: EditOutlined,
      title: 'Easy to edit',
    },
    {
      icon: AppstoreAddOutlined,
      title: 'Responsiveness',
    },
    {
      icon: CodeOutlined,
      title: 'No code reacted',
    }
  ]);

  useEffect(() => {
    const featureAnimation = gsap.timeline();
    featureAnimation
    .to(".feature-content-image-phone", { scale: 1.1 })
    .to(".feature-shiny", { rotate: 90, stagger: 0.5});

    ScrollTrigger.create({
        animation: featureAnimation,
        trigger: '.feature',
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play none none none"
    });
    }, []
  );

  return (
      <section className='feature'>
        <Flex className='feature-content' justify={'space-between'} align={'center'}>
            <div className='feature-content-image'>
              <img src={phone} className="feature-content-image-phone" alt="phone" />
              <img src={shiny1} className="feature-shiny feature-content-image-shiny1" alt="shiny" />
              <img src={shiny2} className="feature-shiny feature-content-image-shiny2" alt="shiny" />
            </div>
            <div className='feature-content-text'>
                <Title level={2}>Our features</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
                <div  className='feature-content-text-btn-section' style={{ marginTop: '30px' }}>
                  <Row gutter={[12, 12]}>
                    { featureList.current.map((item, index) => (
                      <Col key={index} className="gutter-row" xs={{ span: 24 }} sm={{ span: 12 }}>
                        <AtomicFeature icon={item.icon}>{item.title}</AtomicFeature>
                      </Col>
                    ))}
                  </Row>
                </div>
            </div>
        </Flex>
      </section>
  );
}

export default Feature;
