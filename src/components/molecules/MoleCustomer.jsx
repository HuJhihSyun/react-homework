import { Flex, Card, Avatar, Typography } from 'antd';
import AtomicScore from '../atomics/AtomicScore';

const { Title, Text } = Typography;

function MoleCustomer({ url, name, location, cell, email, address, score}) {
    return (
        <Card className='mole-customer' bordered={false} hoverable>
            <Flex className='mole-customer-content' justify={'start'} align={'center'}>
                <Flex className='profile' vertical={true} justify={'center'} align={'center'}>
                    <Avatar className='profile-avatar' size={'large'} src={url} />
                    <Title level={5}>{name}</Title>
                    <Text style={{color: '#777', fontSize: '12px'}}>{location}</Text>
                </Flex>
                <Flex className='comment' vertical={true}>
                    <div className='comment-score'>
                        <AtomicScore score={score} />
                    </div>
                    <ul className='comment-list' style={{paddingLeft: '15px'}}>
                        <li>Phone: {cell}</li>
                        <li style={{wordBreak: 'break-all'}}>Email:{email}</li>
                        <li>Address: {address}</li>
                    </ul>
                </Flex>
            </Flex>
        </Card>
    );
}

export default MoleCustomer;