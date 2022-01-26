import { Col, Form, Input, Row } from "antd";
import { ChangeEvent, useState } from "react";
import { GrSearch } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import ButtonImport from "../../modules/buttons/ButtonImport";
import ModalSettingAdd from "../../modules/modalSetting/ModalSettingAdd";
import ModalSettingUpdate from "../../modules/modalSetting/ModalSettingUpdate";
import Search from "../../modules/search/Search";
import TableSetting from "../../modules/tableSetting/TableSetting";
import Title from "../../modules/title/Title";
import { actionCreators } from "../../state";
import  data  from "./data.json";



function ServicePage() {
    const [state, setState] = useState({
        dataTable: data,
        newPackage: []
    });
    
    //===============================
    const dispatch = useDispatch();
    const { modalSettingOpenAdd } = bindActionCreators(actionCreators, dispatch);

    const[textSearch,setTextSearch] = useState('')

    const onFinish = (values: any) => {
        console.log('Success: ',values)
        return setTextSearch(values.maGoi.trim())
     };
    
    const onFinishFailed = (errorInfo: any) => {
         console.log('Failed:', errorInfo);
         return setTextSearch('')
     };
    
    const handleSearchFilter=()=>{
        if(textSearch) {
            const dataFilter = state.dataTable.filter(e=>e.maGoi.toLowerCase().includes(textSearch.toLowerCase()))
            return dataFilter
        }
        else{
            return state.dataTable;
        }
         
     }

    return (
        <div id="tick-service" className="page-content">
            <ModalSettingAdd />
            
            <Title children={'Danh sách vé'} />

            <Row className="tick-service-header" justify="space-between">
                <Col span={8}>
                    <Search 
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        name="maGoi"
                        rules={[
                            { required: true, message: 'Please input your package code!' }
                        ]}
                        placeholder={'Nhập vào mã gói...'}
                        style={{ background: '#F7F7F8' }}

                    />
               
                </Col>
                <Col>
                    <div className="tick-service-buttons">
                        <ButtonImport />
                        <button
                            className="btn-primary"
                            onClick={modalSettingOpenAdd}
                        >
                            Thêm gói vé
                        </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <TableSetting data={handleSearchFilter()} />
                <ModalSettingUpdate />
            </Row>
        </div>
    );
}

export default ServicePage
