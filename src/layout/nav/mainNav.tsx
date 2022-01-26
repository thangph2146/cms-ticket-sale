
import TopNavBar from "./topNav";
import BottomNavBar from "./bottomNav";
function NavBarController() {
    return (
        <div className="navbar">
            <TopNavBar />
            <BottomNavBar />
            <div className="footer"> <p>Copyright © 2020 Alta Software</p></div>
        </div>
    )
}

export default NavBarController