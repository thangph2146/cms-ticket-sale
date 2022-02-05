import { Select } from 'antd';
import React, { useEffect, useState } from 'react';
import { PropsModalSettingTinhTrang } from './config.type';
const Option = Select.Option;
const Static = (props: PropsModalSettingTinhTrang) => {
    //==========================================
    // props
    //==========================================
    const { state, setState } = props;
    //==========================================
    // state
    //==========================================
    const [value, setValue] = useState<string>('1');
    //==========================================
    // useEffect
    //==========================================
    useEffect(() => {
        if (state.tinhTrang === 'chuaSuDung') {
            setValue('1');
        } else {
            setValue('2');
        }
    }, [state.tinhTrang]);

    const onChange = (e: string) => {
        setState({
            ...state,
            tinhTrang: e === '1' ? 'chuaSuDung' : 'hetHan',
        });
    };
    
    
    return (
        <>
            <div className="tinh-trang">
                <span className="text">Tình trạng</span>
                <Select
                    style={{ width: 200 }}
                    className="tinh-trang-select"
                    value={value}
                    onChange={onChange}
                >
                    <Option value="1">Đang áp dụng</Option>
                    <Option value="2">Tắt</Option>
                </Select>
            </div>
            <div className="note">
                <span className="red">*</span>
                <span className="sub">là thông tin bắt buộc</span>
            </div>
        </>
    );
};

export default Static;
