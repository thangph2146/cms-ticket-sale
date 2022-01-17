import { Route, Routes } from "react-router-dom"
import CheckedPage from "../../page/checkedTicket/CheckedPage"
import HomePage from "../../page/Home"
import ManagerPage from "../../page/managerTicket/Manager"
import ServicePage from "../../page/setting/ServicePage"

function BottomContainer() {
    return (
        <div className="bottom">
            <div className="content">
                <div className="page-content">
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="Manager" element={<ManagerPage />}></Route>
                    <Route  path="Checked" element={<CheckedPage />}></Route>
                    <Route  path="Service" element={<ServicePage />}></Route>
                </Routes>
                </div>
            
            </div>
            
        </div>
    )
}

export default BottomContainer