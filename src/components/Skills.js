import React, { useState, useEffect } from 'react'
import '../Assets/Styles/Skills.css'
import atom from '../Assets/Images/atom.png'
import VisibilitySensor from "react-visibility-sensor";
import { useStateValue } from "../Reducer/StateProvider"


const Skills = () => {
    const [{ isSideBar }] = useStateValue();
    const [atomAnimate, setAtomAnimate] = useState('');
    const [atomWriting, setAtomWriting] = useState('');
    const [profileItem, setProfileItem] = useState('');
    const [skillItem, setSkillItem] = useState('');
    const [shouldOverlay, setShouldOverlay] = useState('')
    const [shouldMove, setShouldMove] = useState('');

    useEffect(() => {
        if (isSideBar) {
            setShouldMove('move__home')
            setShouldOverlay('overlay__skills')
        } else {
            setShouldMove('')
            setShouldOverlay('')
        }
    }, [isSideBar])

    const skillSlide = isVisible => {
        if (isVisible) {
            setSkillItem("skillItem__slide")
        }
    }

    const profileSlide = (isVisible) => {
        if (isVisible) {
            setProfileItem("profileItem__slide")
        }
    }
    const atomSpin = (isVisible) => {
        if (isVisible) {
            setAtomAnimate("atom__animation")
            setAtomWriting("writing__animation")
        }
    }
    return (
        <>
            <div className={shouldOverlay} />
            <div id="skills" className={"skills " + shouldMove}>
                <div className="skills__left">
                    <VisibilitySensor onChange={skillSlide}>
                        <div className="skills__list">
                            <div className={"skills__item " + skillItem}>
                                <h1>ReactJS</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                            <div className={"skills__item " + skillItem} style={{ animationDelay: "0.1s" }}>
                                <h1>JavaScript</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                            <div className={"skills__item " + skillItem} style={{ animationDelay: "0.2s" }}>
                                <h1>HTML</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                            <div className={"skills__item " + skillItem} style={{ animationDelay: "0.36s" }}>
                                <h1>CSS</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                            <div className={"skills__item " + skillItem} style={{ animationDelay: "0.5s" }}>
                                <h1>VueJS</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                            <div className={"skills__item " + skillItem} style={{ animationDelay: "0.7s" }}>
                                <h1>ReactNative</h1>
                                <span>Some lorem ipsum  dolor sithamet</span>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
                <VisibilitySensor onChange={atomSpin}>
                    <div className="skills__mid">
                        <div className="skills__image">
                            <img className={"skills__atom " + atomAnimate} src={atom} alt="atom" />
                            <h2 className={atomWriting}>When you want to look cool, <strong>use science</strong></h2>
                        </div>

                    </div>
                </VisibilitySensor>
                <div className="skills__right">
                    <VisibilitySensor onChange={profileSlide}>
                        <div className="skills__profile">
                            <div className={"skills__profile__item " + profileItem} >
                                <h1>Profile Item</h1>
                                <span>Lorem ipsum dolor sithamet ellezi la ilahe</span>
                            </div>
                            <div className={"skills__profile__item " + profileItem} style={{ animationDelay: "0.2s" }}>
                                <h1>Profile Item</h1>
                                <span>Lorem ipsum dolor sithamet ellezi la ilahe</span>
                            </div>
                        </div>
                    </VisibilitySensor>
                </div>
            </div>
        </>
    )
}

export default Skills
