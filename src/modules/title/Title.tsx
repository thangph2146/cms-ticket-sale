import React from 'react';
interface typeTitle {
    children: string;
}
const Title = (props: typeTitle) => {
    return <h1 className="title">{props.children}</h1>;
};

export default Title;