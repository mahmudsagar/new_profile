import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopaddin>
    <LeftSection>
      <SectionTitle main center>
        Hello There, I'm Sagar<br/>A Fullstack Javascript Developer
      </SectionTitle>
      <SectionText>
        Welcome to my portfolio. This is where passion meets code, and every project tells a story of creativity and problem-solving. Whether you’re here to explore my work, collaborate on exciting ideas, or just say hello, you’re in the right place.
      </SectionText>
      <Link href="#about">
        <Button>Learn More</Button>
      </Link>
    </LeftSection>
  </Section>
);

export default Hero;
