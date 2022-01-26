import { map } from "@firebase/util";
import { Col, Form, Input, Row } from "antd";
import radio from "antd/lib/radio";
import moment from "moment";
import { useEffect, useState } from "react";
import { GrSearch } from "react-icons/gr";
import ButtonFilter from "../../modules/buttons/ButtonFilter";
import ButtonImport from "../../modules/buttons/ButtonImport";
import ModalManager from "../../modules/modalManager/ModalManager";
import Search from "../../modules/search/Search";
import TableManager from "../../modules/tableManager/TableManager";
import Title from "../../modules/title/Title";
import  data  from "./data.json";




function ManagerPage(props: any) {
    const [state, setState] = useState({       
        dataTable: data, 
        textSearch: '',
        valueRadio: '',
        checkIn: [''],
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
    //=================================================
    // Event radio button data filter
    //==================================================
 
    const onChangeRadio = (e: any) => {
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
        console.log('Success: ',values)
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
    


    //=====================================================================
    // function check in
    //=====================================================================
    const [disAbled, setDisAbled] = useState(false);
    const onChangeCheck = (list: any) => {
        let all = list.find((e: any) => e === 'all' );
        if (all || list.length === 5) {
            setState({
                ...state,
                checkIn: ['all'],
                
            });
            setDisAbled(true);
            
        }else {
            setDisAbled(false);
            setState({
                ...state,
                checkIn: list,
                
            });
            if (list.length === 0) {
                setState({
                    ...state,
                    checkIn: [''],
                  
                })}
          
        }
    };
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
        (e)=>e.soVe.toLowerCase().includes(state.textSearch.toLowerCase())&&
       
        e.check.toLowerCase().includes(state.checkIn.toString().toLowerCase())&&
        e.tinhTrang.toLowerCase().includes(state.valueRadio.toLowerCase())&&
        moment(e.ngaySuDung, "DD/MM/YYYY").toDate().getTime() > dateStart.getTime() &&
         moment(e.ngaySuDung, "DD/MM/YYYY").toDate().getTime()  < dateEnd.getTime()

    )
    
   }
    return (
        
        <div id="tick-manager">
            <ModalManager onChangeRadio={onChangeRadio} 
                        onChangeCheck={onChangeCheck}
                        valueRadio={state.valueRadio}
                        valueCheck={state.checkIn}
                        disabled={disAbled}
                        data={state.dataTable}
                        activeDateStart={state.dayStart}
                        setActiveDateStart={setDayStart}
                        activeDateEnd={state.dayEnd}
                        setActiveDateEnd={setDayEnd}
                        state={state}
                />
            <Title children={'Danh sách vé'} />

            <Row className="tick-manager-header">
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
                <Col span={8} offset={8}>
                    <div className="tick-manager-buttons">
                        <ButtonFilter />
                        <ButtonImport />
                    </div>
                </Col>
            </Row>
            <Row>
               
                <TableManager data={handleFilter()} />
            </Row>
            
        </div>
    );
}

export default ManagerPage
