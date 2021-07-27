import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiUpwork } from "react-icons/si";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: 'flex', alignItems: 'center', color: 'white'}}>
          <DiCssdeck size='3rem'/> <Span>MAHMUDUL HASAN</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/mahmudsagar">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/mh-sagar/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/sagar.mahmud.90/">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.upwork.com/freelancers/~01a4b8c2424d603416">
        <SiUpwork size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
