import { Form, Input } from 'antd';
import {GrSearch} from 'react-icons/gr';

interface Props{

    rules: any;
    search:string,
    setSearch:React.Dispatch<React.SetStateAction<string>>
    children:string,
    background:string
}
const Search = (props: Props) => {
    const {rules, search, setSearch,children,background } = props;
    const onFinish = (values: any) => {
        setSearch(values.search);
    };

    const onFinishFailed = (errorInfo: any) => {
        setSearch('');
    };
    return (
        <Form
            className="search"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="search"
                rules={rules}
            >
                <Input
                    placeholder={children}
                    value={search}
                    style={{ background: background }}
                />
            </Form.Item>
            <button type="submit">
                {' '}
                <GrSearch />
            </button>
        </Form>
    );
};

export default Search;
