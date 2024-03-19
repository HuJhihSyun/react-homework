import { Typography, Card, Col, Row } from 'antd';

const { Title, Text } = Typography;

const { Meta } = Card;

const workStyle = {
  maxWidth: 1280,
  margin: 'auto',
  textAlign: 'center',
};

function Work() {
  return (
      <section style={workStyle}>
        <Title level={3}>Discover our lastest work</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
          <Col span={8}>
            <Card
              hoverable
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
          </Col>
        </Row>
      </section>
  );
}

export default Work;
