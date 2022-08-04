import React from 'react';
import { DiCss3, DiFirebase, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact, DiRedis, DiZend,/*DiCss3Full,DiNodejsSmall,DiDjango,*/} from 'react-icons/di';
/*import {AiOutlineHtml5} from 'react-icons/ai';
import {IoLogoJavascript,} from 'react-icons/io';
import {TbBrandReactNative,TbBrandNextjs,} from 'react-tb';
import { SiRedis,SiTailwindcss,} from 'react-icons/si';*/
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';
import { cplusplus } from '@icons-pack/react-simple-icons';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React JS</ListTitle>
          <ListParagraph>
          ✮✮✮✮⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
          ✮✮✮✮✮
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
          ✮✮✮✮✮
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
          ✮✮✮⛤⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
          ✮✮✮✮✮
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React Native</ListTitle>
          <ListParagraph>
          ✮✮✮✮⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiRedis size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Redis</ListTitle>
          <ListParagraph>
          ✮✮✮⛤⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
          ✮✮⛤⛤⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
    <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
          ✮✮⛤⛤⛤
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
