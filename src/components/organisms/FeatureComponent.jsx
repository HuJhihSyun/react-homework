import logo from '../../logo.svg';
import { Flex, Col, Row, Typography } from 'antd';
import AtomicFeature from '../atomics/AtomicFeature';
import { BuildOutlined, EditOutlined, AppstoreAddOutlined, CodeOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const featureStyle = {
  maxWidth: 1280,
  margin: 'auto',
};

function Feature() {
  return (
      <section style={featureStyle}>
        <Flex justify={'space-between'} align={'center'}>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <div>
                <Title level={2}>Our features</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
                <div>
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
