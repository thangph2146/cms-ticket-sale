/* eslint-disable jsx-a11y/alt-text */
import { FiMail } from 'react-icons/fi'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { NavLink } from 'react-router-dom'
import Search from '../../modules/search/Search'
function TopContainer() {
    return(
        <div className="top">
            <div className="search-container">
                <Search children={'Tìm bằng số vé'} background={'#F7F7F8'} />
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