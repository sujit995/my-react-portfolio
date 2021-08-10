import React from 'react'
import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'HTML5'} progress={'80%'} width={'80%'} />
                <SkillsSection skill={'CSS3'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'JavaScript'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'React js'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'Node js'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'MongoDB'} progress={'40%'} width={'40%'} />
            </div>
        </div>
    )
}

export default AboutPage;
