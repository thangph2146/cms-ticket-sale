/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { FiMail } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import Search from '../../modules/search/Search'
import data from '../../page/managerTicket/data.json'
function TopContainer() {
    const [state, setState] = useState({       
        dataTable: data, 
        textSearch: '',
      
    });
    //=======================================
    //==================================================
    // Event search form data filter
    //==================================================
    const[textSearch,setTextSearch] = useState('')

    const onFinish = (values: any) => {
        console.log('Success: ',values.soVe.trim())
        return setTextSearch(values.soVe.trim())
     };
    
    const onFinishFailed = (errorInfo: any) => {
         console.log('Failed:', errorInfo);
         return setTextSearch('')
     };
     
    const handleSearchFilter=()=>{
        if(textSearch) {
            const dataFilter = state.dataTable.filter(e=>e.soVe.toLowerCase().includes(textSearch.toLowerCase()))
            return dataFilter
        }
        else{
            return state.dataTable;
        }
         
     }
    return(
        <div className="top">
            <div className="search-container">
                <Search onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        name="soVe"
                        rules={[
                            { required: true, message: 'Please input your ticket code!' }
                        ]}
                        placeholder={'Nhập vào số vé...'}
                        style={{ background: '#F7F7F8' }}   />
            </div>
            <div className="notification-container">
                <NavLink to="" className="mail" ><FiMail  style={{width: '150%', height: '100%'}}/></NavLink>
                <NavLink to="" className="noti" ><IoIosNotificationsOutline style={{width: '150%', height: '100%'}}/></NavLink>
              
                <div className="profile">
                <img src={require("../../assets/img/profile.png")}></img>
                </div>
            </div>
        </div>
    )
}

export default TopContainer
