import { Col, Form, Input, Radio, Row, Space } from "antd";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import DatePiker from "../../modules/DatePiker";
import Search from "../../modules/search/Search";
import TableCheck from "../../modules/tableCheck/TableCheck";
import Title from "../../modules/title/Title";
import  data  from "./data.json";
import dayjs from 'dayjs'
import moment from "moment";




function CheckedPage() {
    const [state, setState] = useState({
        dataTable: data,
        textSearch: '',
        valueRadio: '',
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
    });

    
    
    //=======================================
    //==================================================
    // khởi tạo giá trị cho ngày
    //==================================================
    useEffect(() => {
        const d = new Date();
        setState({
            ...state,
            dayStart: {
                activeDate: d.getDate(),
                activeMonth: d.getMonth() + 1,
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
    // set lại ngày bắt đầu và kết thúc
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


    //=======================================
    //==================================================
    // Event radio button data filter
    //==================================================
  
    const onChange = (e: any) => {
        setState({
            ...state,
            valueRadio: e.target.value
        })
        console.log(e.target.value)
    }

    //=======================================
    //==================================================
    // Event search form data filter
    //==================================================


    const onFinish = (values: any) => {
        console.log('Success: ',values.soVe.trim())
        return setState({
            ...state,
            textSearch: values.soVe.trim()
            
        })
     };
    
    const onFinishFailed = (errorInfo: any) => {
         console.log('Failed:', errorInfo);
         return setState({
            ...state,
            textSearch: ''
        })
     };
     
    //=======================================
    //==================================================
    // Event  date filter
    //==================================================

        const dateStringStart = new Date(`${state.dayStart.activeYear}/${state.dayStart.activeMonth + 1}/${state.dayStart.activeDate}`)
        const dateMomentStart = moment(dateStringStart, "DD/MM/YYYY")
        const dateStart = dateMomentStart.toDate()
        
        

        const dateStringEnd = new Date(`${state.dayEnd.activeYear}/${state.dayEnd.activeMonth + 1}/${state.dayEnd.activeDate}`)
        const dateMomentEnd = moment(dateStringEnd, "DD/MM/YYYY")
        const dateEnd = dateMomentEnd.toDate()

        console.log('start:',dateStart.getTime())
        console.log('end:', dateEnd.getTime())
   

    const handleFilter=()=>{
  
        return state.dataTable.filter(
            (e)=>e.soVe.toLowerCase().includes(state.textSearch.toLowerCase()) &&
            e.doiSoat.toLowerCase().includes(state.valueRadio.toLowerCase()) &&
            moment(e.ngaySuDung, "DD/MM/YYYY").toDate().getTime() > dateStart.getTime() &&
             moment(e.ngaySuDung, "DD/MM/YYYY").toDate().getTime()  < dateEnd.getTime()
    
        )
    }
    //=====================================================================
    return (
        <Row id="tick-check">
            <Col flex="auto" className="page-content">
                <Title children={'Đối soát vé'} />

                <Row className="tick-check-header" justify="space-between">
                    <Col span={8}>
                    <Search 
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        name="soVe"
                        rules={[
                            { required: true, message: 'Please input your ticket code!' }
                        ]}
                        placeholder={'Nhập vào số vé...'}
                        style={{ background: '#F7F7F8' }}

                    />
                    </Col>
                    <Col>
                        <div className="tick-check-buttons">
                            <button className="btn-primary">
                                Chốt đối soát
                            </button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <TableCheck data={handleFilter()}/>
                </Row>
            </Col>
            <Col flex="450px" className="page-content">
                <div className="tick-check-box">
                    <span className="box-title">Lọc vé</span>
                    <Row className="radio">
                        <Col span={12}>
                            <span className="text">Tình trạng đối soát</span>
                        </Col>
                        <Col span={12}>
                            <Radio.Group onChange={onChange} value={state.valueRadio}>
                                <Space direction="vertical">
                                    <Radio value={''}>
                                        {' '}
                                        <span className="text-value">
                                            {' '}
                                            Tất cả
                                        </span>
                                    </Radio>
                                    <Radio value={'daDoiSoat'}>
                                        <span className="text-value">
                                            {' '}
                                            Đã đối soát
                                        </span>
                                    </Radio>
                                    <Radio value={'chuaDoiSoat'}>
                                        <span className="text-value">
                                            {' '}
                                            Chưa đối soát
                                        </span>
                                    </Radio>
                                </Space>
                            </Radio.Group>
                           
                        </Col>
                    </Row>
                    <Row className="radio">
                        <Col span={12}>
                            <span className="text">Loại vé</span>
                        </Col>
                        <Col span={12}>
                            <span className="text-value"> Vé cổng</span>
                        </Col>
                    </Row>
                    <Row className="start-date">
                        <Col span={12}>
                            <span className="text">Từ ngày</span>
                        </Col>
                        <Col span={12}>
                            <DatePiker
                                activeDate={state.dayStart}
                                setActiveDate={setDayStart}
                                module={3}
                               
                            />
                        </Col>
                    </Row>
                    <Row className="end-date">
                        <Col span={12}>
                            <span className="text">Đến ngày</span>
                        </Col>
                        <Col span={12}>
                            <DatePiker
                                activeDate={state.dayEnd}
                                setActiveDate={setDayEnd}
                                module={2}
                            />
                        </Col>
                    </Row>
                    <Row className="box-bottom" justify="center">
                        <button className="btn-modal" type="submit">
                            {' '}
                            Lọc
                        </button>
                    </Row>
                </div>
            </Col>
        </Row>
    );
}

export default CheckedPage
