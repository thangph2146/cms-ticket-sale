import { Checkbox, Col, Input, Modal, Row, Select } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import DatePiker from '../DatePiker';
import { TimePicker } from 'antd';

import moment from 'moment';
const { Option } = Select;
const ModalSettingAdd = () => {
    const dispatch = useDispatch();
    const isModal = useSelector((state: any) => state.modal.isModalSettingAdd);
    const { modalSettingCloseAdd } = bindActionCreators(actionCreators, dispatch);
    //===============================================
    const [state, setState] = useState({
        dayStart: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
        },
        dayEnd: {
            activeDate: 0,
            activeMonth: 0,
            activeYear: 0,
        },
        tinhTrang: 1,
        checkIn: ['c1'],
    });
    //==================================================
    // initial value dates
    //==================================================
    useEffect(() => {
        const d = new Date();
        setState({
            ...state,
            dayStart: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth(),
                activeYear: d.getFullYear(),
            },
            dayEnd: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth() + 1 > 11 ? 0 : d.getMonth() + 1,
                activeYear:
                    d.getMonth() + 1 > 11
                        ? d.getFullYear() + 1
                        : d.getFullYear(),
            },
        });
    }, []);
    //===================================================
    // reset date begin and end date finish
    //===================================================
    const setDayStart = (date: any, month: any, year: any) => {
        setState({
            ...state,
            dayStart: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    const setDayEnd = (date: any, month: any, year: any) => {
        setState({
            ...state,
            dayEnd: {
                activeDate: date,
                activeMonth: month,
                activeYear: year,
            },
        });
    };
    //==============================
    function onChange(time: any, timeString: any) {
        console.log(time, timeString);
    }

    function onChangec(e: any) {
        console.log(`checked = ${e.target.checked}`);
    }
    return (
        <Modal visible={isModal} width={758}>
            <form
                className="box-modal setting"
                onSubmit={(e: any) => e.preventDefault()}>
                <div className="box-modal-title">
                    <span>Thêm gói vé</span>
                </div>
                <div className="box-modal-body">
                    <div className="name">
                        {' '}
                        <span className="text">
                            Tên gói vé <span className="red">*</span>
                        </span>
                        <Input placeholder="Nhập tên gói vé" />
                    </div>
                    <Row className="date">
                        <Col span={12}>
                            <span className="text">Ngày áp dụng</span>
                            <div className="date-content">
                                <DatePiker
                                    activeDate={state.dayStart}
                                    setActiveDate={setDayStart}
                                    module={5}
                                />
                                <TimePicker
                                    onChange={onChange}
                                    placeholder="hh:mm:ss"
                                    className="time"
                                />
                            </div>
                        </Col>
                        <Col span={12}>
                            <span className="text">Ngày hết hạn</span>
                            <div className="date-content">
                                <DatePiker
                                    activeDate={state.dayStart}
                                    setActiveDate={setDayStart}
                                    module={5}
                                />
                                <TimePicker
                                    onChange={onChange}
                                    placeholder="hh:mm:ss"
                                    className="time"
                                />
                            </div>
                        </Col>
                    </Row>
                    <div className="price">
                        <span className="text">Giá vé áp dụng</span>
                        <div className="price-default">
                            <Checkbox onChange={onChangec}>
                                <span className="sub-text">
                                    Vé lẻ (vnđ/vé) với giá
                                </span>
                            </Checkbox>
                            <Input placeholder="Giá vé" />
                            <span className="sub-text">/ vé</span>
                        </div>
                        <div className="price-combo">
                            <Checkbox onChange={onChangec}>
                                <span className="sub-text">
                                    Combo vé với giá
                                </span>
                            </Checkbox>
                            <Input placeholder="Giá vé" />
                            <span className="sub-text">/</span>
                            <Input placeholder="Giá vé" className="price-per" />
                            <span className="sub-text">vé</span>
                        </div>
                    </div>
                    <div className="static">
                        <span className="text">Tình trạng</span>
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            className='static-select'
                            defaultValue="1">
                            <Option value="1">Đang áp dụng</Option>
                        </Select>
                    </div>
                    <div className="note">
                        <span className="red">*</span>
                        <span className="sub">là thông tin bắt buộc</span>
                    </div>
                </div>
                <div className="box-modal-footer">
                    <button className="btn-modal" onClick={modalSettingCloseAdd}>
                        Hủy
                    </button>
                    <button className="btn-save" onClick={modalSettingCloseAdd}>
                        Lưu
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ModalSettingAdd;
