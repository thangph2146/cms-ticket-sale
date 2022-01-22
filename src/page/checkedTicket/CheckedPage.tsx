import { Col, Radio, Row, Space } from "antd";
import { useEffect, useState } from "react";
import DatePiker from "../../modules/DatePiker";
import Search from "../../modules/search/Search";
import TableCheck from "../../modules/tableCheck/TableCheck";
import Title from "../../modules/title/Title";
import  data  from "./data.json";

function CheckedPage() {
    const [state, setState] = useState({
        textSearch: '2022',
        dataFilter: {},
        dataTable: data,
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
    const [value, setValue] = useState(1);
    const onChange = (e: any) => {
        setValue(e.target.value);
    };
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
    const handleSearch = (e: string) => {
        let datas = [{}];
        if (e) {
            datas = state.dataTable.filter(function (item: any) {
                return (
                    item.bookingCode.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
            });
        }

    };
    //=====================================================================
    return (
        <Row id="tick-check">
            <Col flex="auto" className="page-content">
                <Title children={'Đối soát vé'} />

                <Row className="tick-check-header" justify="space-between">
                    <Col span={8}>
                        <Search
                            children={'Tìm bằng số vé'}
                            background={'#F7F7F8'}
                           onSubmit={handleSearch}
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
                    <TableCheck data={state.dataTable} />
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
                            <Radio.Group onChange={onChange} value={value}>
                                <Space direction="vertical">
                                    <Radio value={1}>
                                        {' '}
                                        <span className="text-value">
                                            {' '}
                                            Tất cả
                                        </span>
                                    </Radio>
                                    <Radio value={2}>
                                        <span className="text-value">
                                            {' '}
                                            Đã đối soát
                                        </span>
                                    </Radio>
                                    <Radio value={3}>
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
                                module={4}
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
