import { Flex, Col, Row, Typography } from 'antd';
import AtomicFeature from '../atomics/AtomicFeature';
import { BuildOutlined, EditOutlined, AppstoreAddOutlined, CodeOutlined } from '@ant-design/icons';
import phone from '../../assets/images/phone.svg';
import shiny1 from '../../assets/images/shiny1.svg';
import shiny2 from '../../assets/images/shiny2.svg';

const { Title, Text } = Typography;

function Feature() {
  return (
      <section className='feature'>
        <Flex justify={'space-between'} align={'center'}>
            <div className='feature-image'>
            <img src={phone} className="feature-image-phone" alt="phone" />
            <img src={shiny1} className="feature-image-shiny1" alt="phone" />
            <img src={shiny2} className="feature-image-shiny2" alt="phone" />
            </div>
            <div>
                <Title level={2}>Our features</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
                <div style={{ marginTop: '30px' }}>
                  <Row gutter={[12, 12]}>
                    <Col className="gutter-row" span={12}>
                      <AtomicFeature icon={BuildOutlined}>Fast building</AtomicFeature>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <AtomicFeature icon={EditOutlined}>Easy to edit</AtomicFeature>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <AtomicFeature icon={AppstoreAddOutlined}>Responsiveness</AtomicFeature>
                    </Col>
                    <Col className="gutter-row" span={12}>
                      <AtomicFeature icon={CodeOutlined}>No code reacted</AtomicFeature>
                    </Col>
                  </Row>
                </div>
            </div>
        </Flex>
      </section>
  );
}

export default Feature;
