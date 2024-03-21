import { Typography, Card, Col, Row } from 'antd';

const { Title, Text } = Typography;

function Story() {
  return (
      <section className='story'>
        <Title level={2}>Real Stories from Satisfied Customers</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Row className='story-card-section' gutter={16}>
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
