import logo from '../../logo.svg';
import { Flex, Typography } from 'antd';

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
                <Title level={3}>Our features</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam corrupti delectus totam libero sed labore dolorem quisquam debitis atque illo.</Text>
            </div>
        </Flex>
      </section>
  );
}

export default Feature;
