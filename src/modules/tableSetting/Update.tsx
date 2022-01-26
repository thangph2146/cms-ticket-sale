import React from 'react';
import {FaRegEdit} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
const Update = (props: any) => {
    const dispatch = useDispatch();
    const { modalSettingOpenUpdate } = bindActionCreators(actionCreators, dispatch);

    return (
        <button className="btn-update" onClick={modalSettingOpenUpdate} >
            <FaRegEdit />
            <span>Cập nhật</span>
            
        </button>
    );
};

export default Update;

