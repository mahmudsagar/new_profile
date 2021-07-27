import React from "react";

import { SocialIcons } from "../Header/HeaderStyles";
import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { SiUpwork } from "react-icons/si";
import {
    CompanyContainer,
    FooterWrapper,
    LinkColumn,
    LinkItem,
    LinkList,
    LinkTitle,
    Slogan,
    SocialContainer,
    SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Call</LinkTitle>
                    <LinkItem href="tel:+8801684259224">
                        +880 168 425 9224
                    </LinkItem>
                </LinkColumn>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:mahmudsagar9@gmail.com">
                        mahmudsagar9@gmail.com
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialContainer>
              <CompanyContainer>Turning ideas into coding</CompanyContainer>
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
            </SocialContainer>
        </FooterWrapper>
    );
};

export default Footer;
