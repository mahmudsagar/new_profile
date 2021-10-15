import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopaddin>
    <LeftSection>
      <SectionTitle main center>
        Hello There, I'm Sagar<br/>A Web Developer
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio. I'm a web eveloper with speciality in Front End development. I can make you interactive front end design with HTML,CSS, Javascript, React etc.
      </SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;