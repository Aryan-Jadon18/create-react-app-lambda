import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCodepen, DiStackoverflow } from 'react-icons/di';
import { SiDiscord, SiInstagram, SiLeetcode, SiReddit, SiTele5, SiTelegram, SiTwitter, SiUpwork } from 'react-icons/si';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:314-343-3432">+91 6265735822</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:contact@jsmastery.com">
            jadonaryansingh@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>//OM GATA VIDHYAYA NAMAHA//</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/Aryan-Jadon18">
            <AiFillGithub size="3rem" />
          </SocialIcons>
        <SocialIcons href="https://codepen.io/aryan-jadon18">
            <DiCodepen size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/aryan-jadon-4971ab1b7/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="+91 62657 35822">
            <SiTelegram size="3rem" />
          </SocialIcons>
    
          <SocialIcons href="https://leetcode.com/Aryansingh123/">
            <SiLeetcode size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://meta.stackexchange.com/users/1236459/aryan-s-jadon">
            <DiStackoverflow size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.upwork.com/freelancers/~01cff6ed28319f97ab">
            <SiUpwork size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;

         /* <SocialIcons href="https://google.com">
         <SiReddit size="3rem" />
         </SocialIcons>
         <SocialIcons href="https://google.com">
           <SiTwitter size="3rem" />
         </SocialIcons>
         */