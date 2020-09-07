import React, {useState, useEffect} from 'react'
import { useStateValue } from "../Reducer/StateProvider"
import '../Assets/Styles/Sidebar.css'

const Sidebar = () => {
    const [{ isSideBar }] = useStateValue();
    const [animateSidebar, setAnimateSideBar] = useState('');
    
    
    useEffect(() => {
        if (isSideBar) {
            setAnimateSideBar('animate__sidebar')
        } else {
            setAnimateSideBar('')
        }
        
    }, [isSideBar])

    return (
        <div className={"sidebar " + animateSidebar}>
            <h3>LISTE</h3>
            <h3>LISTE</h3>
            <h3>LISTE</h3>
            <h3>LISTE</h3>
            <h3>LISTE</h3>
            <h3>LISTE</h3>
        </div>
    )
}

export default Sidebar
