import React from 'react'
import {Link} from 'react-scroll'
import '../Assets/Styles/Header.css'
import PanToolIcon from '@material-ui/icons/PanTool';
import igLogoBW from '../Assets/Images/igLogoBW.png'
import wpLogoBW from '../Assets/Images/wpLogoBW.png'
import ghLogo from '../Assets/Images/ghLogo.svg'
import MenuIcon from '@material-ui/icons/Menu';
import {useStateValue} from "../Reducer/StateProvider"

const Header = () => {
   const [{isSideBar}, dispatch] = useStateValue();

    const sidebar = () => {
        dispatch({type : 'TOGGLE_SIDEBAR', payload : isSideBar});
    }

    return (
        <div className="header">
            <div className="header__logoSection">
                <MenuIcon onClick={sidebar} className="header__logo menuIcon"/>
                <img className="header__logo ig" src={igLogoBW} alt="ig"/>
                <img className="header__logo wp" src={wpLogoBW} alt="wp"/>
                <img className="header__logo gh" src={ghLogo} alt="gh"/>
            </div>
            <div className="header__mid">
                <span>F U R K A N T O N Y A L I</span>
            </div>
            <div className="header__nav">
                <Link 
                    className="header__navLink"
                    to="skills"
                    duration={400}
                    smooth={true}
                    activeClass="active" 
                >
                    <div className="header__navLogo">
                        <PanToolIcon className="header__navLog"/>
                    </div>
                    <div className="header__navSpan">
                        <span className="header__navLinkLineOne">Hello,</span>
                        <span className="header__navLinkLineTwo">You</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
