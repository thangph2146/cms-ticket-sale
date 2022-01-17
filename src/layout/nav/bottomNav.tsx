import { AiOutlineSetting } from "react-icons/ai"
import { FiHome } from "react-icons/fi"
import { HiOutlineTicket } from "react-icons/hi"
import { TiTicket } from "react-icons/ti"
import { NavLink } from "react-router-dom"

function BottomNavBar() {
    return(
        <div className="bottom">
            <NavLink to="/" className="tag" ><i><FiHome /></i>Trang chủ</NavLink>
            <NavLink to="/Manager" className="tag"><i><HiOutlineTicket /></i>Quản lý vé</NavLink>
            <NavLink to="/Checked" className="tag"><i><TiTicket/></i>Đổi soát vé</NavLink>
            <NavLink to="/Service" className="tag"><i><AiOutlineSetting /></i>Cài đặt</NavLink>
                    
            <p className="group">Gói dịch vụ</p>
                 
        </div>
    )
}

export default BottomNavBar