import { Col, Form, Row, TimePicker } from 'antd';
import React from 'react';
import DatePiker from '../DatePiker';
import { PropsModalSettingDate } from './config.type';
const ModalSettingDate = (props: PropsModalSettingDate) => {
    const {
        state,
        setDayStart,
        setDayEnd,    
        messageDate,
    } = props;
    return (
        <>
            <Row className="date">
                <Col span={12}>
                    <span className="text">Ngày áp dụng</span>
                    <div className="date-content">
                        <DatePiker
                            activeDate={state.date.dayStart}
                            setActiveDate={setDayStart}
                            module={5}
                          
                        />

                        <Form.Item style={{ marginBottom: 0 }} name="timeStart">
                            <TimePicker
                                placeholder="hh:mm:ss"
                                className="time"
                            />
                        </Form.Item>
                    </div>
                </Col>
                <Col span={12}>
                    <span className="text">Ngày hết hạn</span>
                    <div className="date-content">
                        <DatePiker
                            activeDate={state.date.dayEnd}
                            setActiveDate={setDayEnd}
                            module={5}
                            
                        />
                        <Form.Item style={{ marginBottom: 0 }} name="timeEnd">
                            <TimePicker
                                placeholder="hh:mm:ss"
                                className="time"
                            />
                        </Form.Item>
                    </div>
                </Col>
            </Row>
            <span className={`red ${messageDate ? '' : 'd-none'}`}>
                Ngày hết hạn lớn hơn ngày áp dụng
            </span>
        </>
    );
};

export default ModalSettingDate;
