import logo from '../../logo.svg';
import { Flex, Typography } from 'antd';

const { Title, Text } = Typography;

const headerStyle = {
    maxWidth: 1280,
    margin: 'auto',
    lineHeight: 1,
};

function Banner() {
  return (
      <header style={headerStyle}>
        <Flex justify={'space-between'} align={'center'}>
            <div>
                <Title>Create Engaging<br/>Landing Pages</Title>
                <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium neque eum nemo pariatur quo odio blanditiis unde voluptas error soluta voluptatem nostrum laboriosam vero corrupti adipisci reiciendis ea? Dolores, corporis! Harum placeat, maiores dolor recusandae accusamus beatae natus quaerat nulla deleniti quasi dolorem, nobis incidunt aperiam at ipsum delectus.</Text>
            </div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </Flex>
      </header>
  );
}

export default Banner;
