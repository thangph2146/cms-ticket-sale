import React from 'react';
import {AiOutlineUnorderedList} from 'react-icons/ai';
interface props {
    text: string;
    class: string;
}
const Static = (props: props) => {
    return (
        <div className="tinh-trang">
            <div className={props.class}>
                <AiOutlineUnorderedList />
                <span>{props.text}</span>
            </div>
        </div>
    );
};

export default Static;
