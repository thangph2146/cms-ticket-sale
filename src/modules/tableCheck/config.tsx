import React from 'react';
import { StaticType } from './config.type';
import Static from './Static';
interface typeColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
    onFilter?: any;
    filters?: any;
    filteredValue?: any;
}

export const columns: Array<typeColumn> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },

    {
        title: 'Ngày sử dụng',
        key: 'ngaySuDung',
        dataIndex: 'ngaySuDung',
    },
    {
        title: 'Tên loại vé',
        key: 'tenVe',
        dataIndex: 'tenVe',
    },
    {
        title: 'Cổng check-in',
        key: 'check',
        dataIndex: 'check',
    },
    {
        title: '',
        key: 'doiSoat',
        dataIndex: 'doiSoat',
        
        render: (text: StaticType) => {
            
            switch (text) {
                case 'daDoiSoat':
                    return (
                        <Static class={'checked'} text={'Đã đổi soát'} />
                    );
                case 'chuaDoiSoat':
                    return (
                        <Static
                            class={'notChecked'}
                            text={'Chưa đổi soát'}
                        />
                    );
                default:
                    return <Static class={'expired'} text={''} />;
            }
        },
    },
];
