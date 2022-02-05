import { Form, Input } from 'antd';
import React from 'react';

const ModalSettingName:React.FC = () => {
    return (
        <div className="name">
            {' '}
            <span className="text">
                Tên gói vé <span className="red">*</span>
            </span>
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Làm ơn nhập tên gói vé!' }]}
            >
                <Input placeholder="Nhập tên gói vé" />
            </Form.Item>
        </div>
    );
};

export default ModalSettingName;
