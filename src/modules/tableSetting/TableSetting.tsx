import { Table } from 'antd';
import {GrPrevious,GrNext} from 'react-icons/gr';
import { renderNgayApDung, renderNgayHetHan, renderUpdate } from './config';
import { Column, TypeStatic } from './config.type';
import Static from './Static';



const TableSetting = (props: any) => {
    const { handleModalUpdate, search,data } = props;
    function itemRender(current: number, type: string, originalElement: any) {
        if (type === 'prev') {
            return (
                <button>
                    <GrPrevious />
                </button>
            );
        }
        if (type === 'next') {
            return (
                <button>
                    <GrNext />
                </button>
            );
        }
        return originalElement;
    }
    const columns: Array<Column> = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: 'stt',
            render: (text: any) => {
                return text;
            },
        },
        {
            title: 'Mã gói',
            dataIndex: 'maGoi',
            key: 'maGoi',
        },
        {
            title: 'Tên gói vé',
            dataIndex: 'tenGoiVe',
            key: 'tenGoiVe',
            filteredValue:  [''],
            onFilter: (value, record) =>
            record.tenGoiVe.toString().toLowerCase().trim().includes(search.toLowerCase().trim()),
        },
       
        {
            title: 'Ngày áp dụng',
            key: 'ngayApDung',
            dataIndex: 'ngayApDung',
            render: (text) => renderNgayApDung(text),
        },
        {
            title: 'Ngày hết hạn',
            key: 'ngayHetHan',
            dataIndex: 'ngayHetHan',
            render: (text) => renderNgayHetHan(text),
        },
        {
            title: 'Giá vé (VNĐ/Vé)',
            key: 'giaVe',
            dataIndex: 'giaVe',
        },
        {
            title: 'Giá Combo (VNĐ/Combo)',
            key: 'giaCombo',
            dataIndex: 'giaCombo',
        },
        {
            title: 'Tình trạng sử dụng',
            key: 'tinhTrang',
            dataIndex: 'tinhTrang',
            render: (text: TypeStatic) => {
                switch (text) {
                    case 'daSuDung':
                        return (
                            <Static class={'used'} text={'Đã sử dụng'} />
                        );
                    case 'chuaSuDung':
                        return (
                            <Static
                                class={'notUsed'}
                                text={'Chưa sử dụng'}
                            />
                        );
                    default:
                        return <Static class={'expired'} text={'Hết hạn'} />;
                }
            },
        },
        {
            title: '',
            key: 'update',
            dataIndex: 'update',
            render: (text: any, record: any) => renderUpdate(record,handleModalUpdate),
        },
        
    ];
    
    return (
        <div className="box-table">
            <Table
                columns={columns}
                dataSource={data}
                rowClassName={'helo'}
                loading={false}
                pagination={{
                    position: ['bottomCenter'],
                    itemRender: itemRender,
                }}
            />
            
        </div>
    );
};

export default TableSetting;
