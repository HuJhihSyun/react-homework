import { useState, useEffect } from 'react'
import { Typography, Card, Col, Row } from 'antd';

const { Title, Text } = Typography;

const { Meta } = Card;

function Work() {
  const [petData, setPetData] = useState([])

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&has_breeds=1&api_key=live_v7y06etNUAO19MOE7UjS7XguxHGA7LREsr6LnWfFSVn3EzoLiL84hIYSt1CFAgiH')
    .then(res => res.json())
    .then(data => {
        const firstThreeData = data.slice(0, 3);
        setPetData(firstThreeData)
    })
  }, [])

  return (
      <section className='work'>
        <Title level={2}>Discover our lastest work</Title>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
        <Row className='work-card-section' gutter={16}>
          {petData.map((item, index) => (
            <Col key={index} xs={{ span: 24 }} sm={{ span: 8 }}>
              <Card
                bordered={false}
                hoverable
                className='atomic-card'
                cover={
                <div
                className='atomic-card-cover'
                style={{backgroundImage: `url(${item.url})`}}
                />}>
              
                <Meta title={`ID:${item.id}`} description={`Width:${item.width} / Height:${item.height}`} />
              </Card>
          </Col>
          ))}
        </Row>
      </section>
  );
}

export default Work;
