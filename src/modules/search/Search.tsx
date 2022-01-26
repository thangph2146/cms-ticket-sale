import { Form, Input } from 'antd';
import {GrSearch} from 'react-icons/gr';



const Search = (props: any) => {

    return (
        <Form className="search"
        onFinish={props.onFinish}
        onFinishFailed={props.onFinishFailed}
        autoComplete="off">
           
            <Form.Item
                name={props.name}
                rules={props.rules}>
                <Input
                    placeholder={props.placeholder}
                    style={props.style}
                    
                />
            </Form.Item>
            <button type="submit" >
                {' '}
                <GrSearch />
            </button>
           
        </Form>
    );
};

export default Search;