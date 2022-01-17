import React from 'react';
import { StaticType } from './config.type';
import Static from './Static';

interface typeColumn {
    title: string;
    dataIndex: string;
    key: string;
    render?: any;
}
export const columns: Array<typeColumn> = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
    },
    {
        title: 'Booking code',
        dataIndex: 'bookingCode',
        key: 'bookingCode',
    },
    {
        title: 'Số vé',
        dataIndex: 'soVe',
        key: 'soVe',
    },
    {
        title: 'Tên sự kiện',
        key: 'tenSuKien',
        dataIndex: 'tenSuKien',
    },
    {
        title: 'Tình trạng sử dụng',
        key: 'tinhTrang',
        dataIndex: 'tinhTrang',
        render: (text: StaticType) => {
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
        title: 'Ngày sử dụng',
        key: 'ngaySuDung',
        dataIndex: 'ngaySuDung',
    },
    {
        title: 'Ngày xuất vé',
        key: 'ngayXuatVe',
        dataIndex: 'ngayXuatVe',
    },
    {
        title: 'Cổng check-in',
        key: 'check',
        dataIndex: 'check',
    },
];