import { useState, useEffect } from 'react'
import { Typography, Col, Row } from 'antd';
import MoleCustomer from '../molecules/MoleCustomer';

const { Title, Text } = Typography;

function Story() {
  const [customerData, setCustomerData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=2')
    .then(res => res.json())
    .then(data => {
        const firstTwoData = data.results.slice(0, 2);
        setCustomerData(firstTwoData)
    })
  }, [])

  return (
      <section className='story'>
        <Title level={2}>Real Stories from Satisfied Customers</Title>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Row className='story-card-section' gutter={16}>
        {customerData.map((item, index) => (
          <Col key={index} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <MoleCustomer
            url={item.picture.medium}
            name={`${item.name.first} ${item.name.last}`}
            location={item.location.state}
            cell={item.cell}
            email={item.email}
            address={`${item.location.street.number} ${item.location.street.name}, ${item.location.city}, ${item.location.state}, ${item.location.country}`}
            score={item.dob.age}
          />
        </Col>
        ))}
        </Row>
      </section>
  );
}

export default Story;
