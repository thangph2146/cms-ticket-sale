/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { FiMail } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import { data } from '../../modules/pieChart/dataPiechart';
import Search from '../../modules/search/Search'
function TopContainer() {
    const [state, setState] = useState({
        textSearch: '2022',
        dataFilter: {},
        dataTable: data,
    });
    const handleSearch = (e: string) => {
        let datas = [{}];
        if (e) {
            datas = state.dataTable.filter(function (item: any) {
                return (
                    item.bookingCode.toLowerCase().indexOf(e.toLowerCase()) !== -1
                );
            });
        }
    
    };
    return(
        <div className="top">
            <div className="search-container">
                <Search children={'Tìm bằng số vé'} background={'#F7F7F8'}  onSubmit={handleSearch} />
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
