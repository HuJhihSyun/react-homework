import { Flex, Card, Avatar } from 'antd';

function AtomicFeature({children, icon: Icon = null}) {
    return (
        <Card className={'atomic-feature'} bordered={false} hoverable>
            <Flex justify={'start'} align={'center'}>
                <Avatar className={'atomic-feature-avatar'} shape="square" size={'large'} {...(Icon ? { icon: <Icon /> } : {})} />
                <h4 style={{margin:0}}>{children}</h4>
            </Flex>
        </Card>
    );
}

export default AtomicFeature;