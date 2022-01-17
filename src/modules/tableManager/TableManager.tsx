import { Table } from 'antd';
import React from 'react';
import { columns } from './config';
import {GrPrevious,GrNext} from 'react-icons/gr';


const TableManager = (props:any) => {
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
    return (
        <div className="box-table">
            <Table
                columns={columns}
                dataSource={props.data}
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

export default TableManager;