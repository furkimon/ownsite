import React, { useState } from 'react'
import '../Assets/Styles/Skills.css'
import atom from '../Assets/Images/atom.png'
import VisibilitySensor from "react-visibility-sensor";

const Skills = () => {
    const [atomAnimate, setAtomAnimate] = useState('');
    const [atomWriting, setAtomWriting] = useState('');
    const [profileItem, setProfileItem] = useState('');
    const [skillItem, setSkillItem] = useState('');

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
    const skillItems = [
        {
            name: 'ReactJS',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: 0
        },
        {
            name: 'JavaScript',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: "0.1s"
        },
        {
            name: 'HTML',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: "0.2s"
        },
        {
            name: 'CSS',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: "0.36s"
        },
        {
            name: 'VueJS',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: "0.5s"
        },
        {
            name: 'ReactNative',
            description: 'Some lorem ipsum  dolor sithamet',
            delay: "0.7s"
        },
    ]

    const showSkillItems = () => {
        return skillItems.map((skill) => {
            return (
                <div className={"skills__item " + skillItem} style={{ animationDelay: skill.delay }}>
                    <h1>{skill.name}</h1>
                    <span>{skill.description}</span>
                </div>
            )
        })
    }


    return (
        <>
            <div id="skills" className={"skills "}>
                <div className="skills__left">
                    <VisibilitySensor onChange={skillSlide}>
                        <div className="skills__list">
                            {showSkillItems()}
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
