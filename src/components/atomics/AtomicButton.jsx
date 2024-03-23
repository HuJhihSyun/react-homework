import { Button } from 'antd';

function AtomicButton({children, type, buttonHandler, classProp}) {
    const solidType = {
        type: 'primary',
        className: `atomic-button solid-button ${classProp}`,
    };
    
    const lightType = {
        type: 'default',
        className: `atomic-button light-button ${classProp}`,
    };
    
    const outlineType = {
        type: 'default',
        className: `atomic-button outline-button ${classProp}`,
    };
    
    const linkType = {
        type: 'link',
        className: `atomic-button link-button ${classProp}`,
    };
    
    const buttonTypes = {
        solid: solidType,
        outline: outlineType,
        light: lightType,
        link: linkType,
    };

    return (
        <Button {...buttonTypes[type]} onClick={buttonHandler}>{children}</Button>
    );
}

export default AtomicButton;