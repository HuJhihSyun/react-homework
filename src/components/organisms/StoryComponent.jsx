import { Typography, Card, Col, Row } from 'antd';

const { Title, Text } = Typography;

const storyStyle = {
  maxWidth: 1280,
  margin: 'auto',
  textAlign: 'center',
};

function Story() {
  return (
      <section style={storyStyle}>
        <Title level={3}>Real Stories from Satisfied Customers</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Row gutter={16}>
          <Col span={12}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
          </Col>
          <Col span={12}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
          </Col>
        </Row>
      </section>
  );
}

export default Story;
