import { Checkbox, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import DatePiker from '../DatePiker';
import { Radio } from 'antd';
import { data } from '../pieChart/dataPiechart';

const ModalManager = (props: any) => {
    //======================================
    // reducer component
    //======================================
    const dispatch = useDispatch();
    const isModal = useSelector((state: any) => state.modal.isModalManager);
    const { modalManagerClose,modalManagerData } = bindActionCreators(actionCreators, dispatch);
  
//===================================================
// button submit
//===================================================
const handleSubmit = ()=>{
    modalManagerData(props.state);
    modalManagerClose()
 
}
    return (
        <Modal visible={isModal} width={634}>
            <form
                className="box-modal"
                onSubmit={(e: any) => e.preventDefault()}>
                <div className="box-modal-title">
                    <span>Lọc vé</span>
                </div>
                <div className="box-modal-day">
                    <Row>
                        <Col span={12}>
                            <div className="box-modal-day-content">
                                <span>Từ ngày</span>

                                <DatePiker
                                    activeDate={props.activeDateStart}
                                    setActiveDate={props.setActiveDateStart}
                                    module={2}
                                />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="box-modal-day-content ">
                                <span>Đến ngày</span>
                                <DatePiker
                                    activeDate={props.activeDateEnd}
                                    setActiveDate={props.setActiveDateEnd}
                                    module={2}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="box-modal-static">
                    <span>Tình trạng sử dụng</span>
                    <Radio.Group
                        onChange={props.onChangeRadio}
                        value={props.valueRadio}>
                        <Radio value={''}>Tất cả</Radio>
                        <Radio value={'daSuDung'}>Đã sử dụng</Radio>
                        <Radio value={'chuaSuDung'}>Chưa sử dụng</Radio>
                        <Radio value={'hetHan'}>Hết hạn</Radio>
                    </Radio.Group>
                </div>
                <div className="box-modal-check">
                    <span>Cổng Check-in</span>
                    <Checkbox.Group
                        style={{ width: '100%' }}
                        value={props.valueCheck}
                        onChange={props.onChangeCheck}>
                        <Row className="row1">
                            <Col span={8}>
                                <Checkbox name="check" value="all">Tất cả</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Cổng 1" disabled={props.disabled}>
                                    Cổng 1
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Cổng 2" disabled={props.disabled}>
                                    Cổng 2
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row className="row2">
                            <Col span={8}>
                                <Checkbox value="Cổng 3" disabled={props.disabled}>
                                    Cổng 3
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Cổng 4" disabled={props.disabled}>
                                    Cổng 4
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="Cổng 5" disabled={props.disabled}>
                                    Cổng 5
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </div>
                <div className="box-modal-button">
                    <button
                        onClick={() => handleSubmit()}
                        className="btn-modal"
                        type="submit">
                        {' '}
                        Lọc
                    </button>
                </div>
            </form>
        </Modal>
    );
};

export default ModalManager;
