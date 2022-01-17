import React from 'react';
import { useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
import {FiFilter} from 'react-icons/fi';


const ButtonFilter = () => {
    const dispatch = useDispatch();
    const { modalManagerOpen } = bindActionCreators(actionCreators, dispatch);
    
    return (
        <button className="btn-filter" onClick={() => modalManagerOpen()}>
            <i><FiFilter /></i>
            <span>Lọc vé</span>
           
        </button>
    );
};

export default ButtonFilter;