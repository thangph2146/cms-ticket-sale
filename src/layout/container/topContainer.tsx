/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { FiMail } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import Search from '../../modules/search/Search'
import data from '../../page/managerTicket/data.json'
function TopContainer() {


    const [search, setSearch] = useState<string>('');
 
    return(
        <div className="top">
            <div className="search-container">
                <Search 
                        search={search}
                        setSearch={setSearch}
                        
                        rules={[
                            { required: true, message: 'Please input your ticket code!' }
                        ]}
                        children={'Nhập vào số vé...'}
                        background={'#F7F7F8' }   />
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
