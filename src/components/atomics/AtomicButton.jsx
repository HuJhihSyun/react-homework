import { Button } from 'antd';

const solidType = {
    type: 'primary',
    className: 'atomic-button solid-button',
};

const lightType = {
    type: 'default',
    className: 'atomic-button light-button',
};

const outlineType = {
    type: 'default',
    className: 'atomic-button outline-button',
};

const linkType = {
    type: 'link',
    className: 'atomic-button link-button',
};

const buttonTypes = {
    solid: solidType,
    outline: outlineType,
    light: lightType,
    link: linkType,
};

function AtomicButton({children, type, buttonHandler}) {
    return (
        <Button {...buttonTypes[type]} onClick={buttonHandler}>{children}</Button>
    );
}

export default AtomicButton;