import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import ButtonFilter from "../../modules/buttons/ButtonFilter";
import ButtonImport from "../../modules/buttons/ButtonImport";
import Search from "../../modules/search/Search";
import TableManager from "../../modules/tableManager/TableManager";
import Title from "../../modules/title/Title";
import  data  from "./data.json";

function ManagerPage() {
    const [state, setState] = useState({
        
        dataFilter: {},
        dataTable: data,
    });
    const handleSearch = (e: any) => {
        console.log(e)
        let datas = [{}];
        if (e) {
            datas = state.dataTable.filter(function (item: any) {
                return (
                    item.bookingCode.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
            });
        }

    };
    console.log(state.dataTable)
    // useEffect(() => {
    //     async function fetchTicketData(){
    //         try{ 
    //             const requestUrl = './';
    //             const response = await fetch(requestUrl);
    //             const responseJSON = await response.json();
    //             console.log({responseJSON})

    //             const {data} = responseJSON;
    //             setState(data);
    //         }catch(err){
    //             console.log('failed to fetch data');
    //         }
            
    //     }
    //     fetchTicketData();
    // },[])
    return (
        <div id="tick-manager">
            <Title children={'Danh sách vé'} />

            <Row className="tick-manager-header">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
                        onSubmit={handleSearch}
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
                <TableManager data={state.dataTable} />
            </Row>
            
        </div>
    );
}

export default ManagerPage
