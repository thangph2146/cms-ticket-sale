import { TypeData } from './config.type';
import Update from './Update';


export const renderNgayApDung = (text: string) => {
    const array = text.split('-');
    return (
        <div>
            <div>
                <span className="d-content-end">{array[0]}</span>
            </div>
            <div>
                <span className="d-content-end">{array[1]}</span>
            </div>
        </div>
    );
};
export const renderNgayHetHan = (text: string) => {
    const array = text.split('-');
    return (
        <div>
            <div>
                <span className="d-content-end">{array[0]}</span>
            </div>
            <div>
                <span className="d-content-end">{array[1]}</span>
            </div>
        </div>
    );
};


export const renderUpdate =(record:TypeData, handleModalUpdate:(e:TypeData)=>void)=>{
    return (
        <Update
            handleModalUpdate={handleModalUpdate}
            record={record}
        />
    );
}