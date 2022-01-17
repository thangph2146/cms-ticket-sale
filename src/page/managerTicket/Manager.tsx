import { Col, Row } from "antd";
import { useState } from "react";
import ButtonFilter from "../../modules/buttons/ButtonFilter";
import ButtonImport from "../../modules/buttons/ButtonImport";
import Search from "../../modules/search/Search";
import TableManager from "../../modules/tableManager/TableManager";
import Title from "../../modules/title/Title";
import { data } from "./data";

function ManagerPage() {
    const [state, setState] = useState({
        textSearch: '2022',
        dataFilter: {},
        dataTable: data,
    });
    //============================================
    // search
    //============================================
    const handleSearch = (e: string) => {
        let datas = [{}];
        if (e) {
            datas = data.filter(function (item: any) {
                return (
                    item.tenSuKien.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
            });
        }

    };
    handleSearch('2022');
    return (
        <div id="tick-manager">
            <Title children={'Danh sách vé'} />

            <Row className="tick-manager-header">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
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