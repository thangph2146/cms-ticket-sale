import React from 'react';
import { TypeStatic } from './config.type';
import Static from './Static';
import Update from './Update';
interface typeColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
    onFilter?: any;
    filters?: any;
    filteredValue?: any;
    props?: any;
}

export const columns: Array<typeColumn> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
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
    },
    {
        title: 'Ngày áp dụng',
        key: 'ngayApDung',
        dataIndex: 'ngayApDung',
    },
    {
        title: 'Ngày hết hạn',
        key: 'ngayHetHan',
        dataIndex: 'ngayHetHan',
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
                            text={'Đang áp dụng'}
                        />
                    );
                default:
                    return <Static class={'expired'} text={'Tắt'} />;
            }
        },
    },
    {
        title: '',
        key: 'update',
        dataIndex: 'update',

        render: (record: any) => {
            return <Update />;
        },
        
    },
    
];

