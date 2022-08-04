import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Myself <br />
          Aryan S. JADON
        </SectionTitle>
        <SectionText>
        I'm a passionate programmer and also a 3rd year student at <span style={{ color: '#f5f5f5' }}> SRM University</span>. I have a passion for learning new technologies and also a passion for building things. I am mainly skilled in <span style={{ color: '#f5f5f5' }}>C++</span>, <span style={{ color: '#f5f5f5' }}>JavaScript</span>, <span style={{ color: '#f5f5f5' }}>ReactJS</span>, <span style={{ color: '#f5f5f5' }}>React Native</span>Django and <span style={{ color: '#f5f5f5' }}>HTML</span> technologies.
        </SectionText>
        <Button onClick={props.handleClick}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;