import {FaRegEdit} from 'react-icons/fa';
const Update = (props: any) => {
    
    const { handleModalUpdate, record } = props;
   

    return (
        <button className="btn-update" onClick={()=>handleModalUpdate(record)} >
            <FaRegEdit />
            <span>Cập nhật</span>
            
        </button>
    );
};

export default Update;

