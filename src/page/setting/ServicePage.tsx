import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonImport from '../../modules/buttons/ButtonImport';
import Search from '../../modules/search/Search';
import TableSetting from '../../modules/tableSetting/TableSetting';
import Title from '../../modules/title/Title';
import ModalSetting from '../../modules/modalSetting/Index';
const TickService: React.FC = () => {
    //========================================
    // state reducer
    //========================================
    const dataSetting = useSelector((state: any) => state.dataFirebase.setting);
    console.log(dataSetting)
    //========================================
    // state
    //========================================
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isUpdate, setIsUpdate] = useState<boolean>(false);
    const [dataUpdate, setDataUpdate] = useState({});
    const [search, setSearch] = useState<string>('');
    //==================================
    // ham modal
    //==================================
    const handleModalOpen = () => {
        setIsModal(true);
    };
    const handleModalClose = () => {
        setIsModal(false);
    };
    const handleModalUpdateOpen = () => {
        setIsUpdate(true);
    };
    const handleModalUpdateClose = () => {
        setIsUpdate(false);
    };
    const handleModalAdd = () => {
        handleModalUpdateClose();
        handleModalOpen();
    };
    const handleModalUpdate = (e: any) => {
        handleModalUpdateOpen();
        setDataUpdate(e);
        
        handleModalOpen();
    };
    return (
        <div id="tick-service" className="page-content">
            <Title children={'Danh sách vé'} />

            <Row className="tick-service-header" justify="space-between">
                <Col span={8}>
                    <Search
                        children={'Tìm bằng số vé'}
                        background={'#F7F7F8'}
                        rules={[
                            { required: true, message: 'Please input your ticket code!' }
                        ]}
                        search={search}
                        setSearch={setSearch}
                    />
                </Col>
                <Col>
                    <div className="tick-service-buttons">
                        <ButtonImport />
                        <button
                            className="btn-primary"
                            onClick={handleModalAdd}>
                            Thêm gói vé
                        </button>
                    </div>
                </Col>
            </Row>
            <Row>
                <TableSetting
                    data={dataSetting}
                    handleModalUpdate={handleModalUpdate}
                    search={search}
                />
            </Row>
            <ModalSetting
                isModal={isModal}
                handleModalClose={handleModalClose}
                dataSetting={dataSetting}
                dataUpdate={dataUpdate}
                isUpdate={isUpdate}
            />
        </div>
    );
};

export default TickService;
