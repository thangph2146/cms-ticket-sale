import { Checkbox, Col, Row } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import DatePiker from '../DatePiker';
import { Radio } from 'antd';

const ModalManager = () => {
    //======================================
    // reducer component
    //======================================
    const dispatch = useDispatch();
    const isModal = useSelector((state: any) => state.modal.isModalManager);
    const { modalManagerClose,modalManagerData } = bindActionCreators(actionCreators, dispatch);
    //======================================
    // state component
    //======================================
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
    // initial day value for date
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
    // reset date start and finish
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
    //=====================================================================
    // function radio
    //=====================================================================
    const onChangeRadio = (e: any) => {
        setState({
            ...state,
            tinhTrang: e.target.value,
        });
    };
    //=====================================================================
    // function check in
    //=====================================================================
    const [disAbled, setDisAbled] = useState(false);
    const onChangeCheck = (list: any) => {
        let all = list.find((e: any) => e === 'all');
        if (all || list.length === 5) {
            setState({
                ...state,
                checkIn: ['all'],
            });
            setDisAbled(true);
        } else {
            setDisAbled(false);
            setState({
                ...state,
                checkIn: list,
            });
        }
    };
//===================================================
// button submit
//===================================================
const handleSubmit = ()=>{
    modalManagerData(state);
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
                                    activeDate={state.dayStart}
                                    setActiveDate={setDayStart}
                                />
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="box-modal-day-content ">
                                <span>Đến ngày</span>
                                <DatePiker
                                    activeDate={state.dayEnd}
                                    setActiveDate={setDayEnd}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="box-modal-static">
                    <span>Tình trạng sử dụng</span>
                    <Radio.Group
                        onChange={onChangeRadio}
                        value={state.tinhTrang}>
                        <Radio value={0}>Tất cả</Radio>
                        <Radio value={1}>Đã sử dụng</Radio>
                        <Radio value={2}>Chưa sử dụng</Radio>
                        <Radio value={3}>Hết hạn</Radio>
                    </Radio.Group>
                </div>
                <div className="box-modal-check">
                    <span>Cổng Check-in</span>
                    <Checkbox.Group
                        style={{ width: '100%' }}
                        value={state.checkIn}
                        onChange={onChangeCheck}>
                        <Row className="row1">
                            <Col span={8}>
                                <Checkbox value="all">Tất cả</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="c1" disabled={disAbled}>
                                    Cổng 1
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="c2" disabled={disAbled}>
                                    Cổng 2
                                </Checkbox>
                            </Col>
                        </Row>
                        <Row className="row2">
                            <Col span={8}>
                                <Checkbox value="c3" disabled={disAbled}>
                                    Cổng 3
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="c4" disabled={disAbled}>
                                    Cổng 4
                                </Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="c5" disabled={disAbled}>
                                    Cổng 5
                                </Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>
                </div>
                <div className="box-modal-button">
                    <button
                        onClick={() => handleSubmit()
                        }
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
