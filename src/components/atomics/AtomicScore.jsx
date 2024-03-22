import { Flex } from 'antd';
import { StarFilled } from '@ant-design/icons';

function AtomicScore({ score }) {
    const realScore = Math.round(score / 20);
    const totalStars = 5;
    const stars = [];

    for (let i = 0; i < realScore; i++) {
        stars.push(<StarFilled style={{ color: '#f8d57e', fontSize: '20px' }} />);
    }

    for (let i = realScore; i < totalStars; i++) {
        stars.push(<StarFilled style={{ color: '#cccccc', fontSize: '20px' }} />);
    }

    return (
        <Flex className='atomic-score' justify={'start'} align={'center'}>
            {stars}
        </Flex>
    );
}

export default AtomicScore;