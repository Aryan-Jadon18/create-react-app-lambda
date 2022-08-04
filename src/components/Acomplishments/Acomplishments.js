import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 85, text: 'CGPA 2nd year', },
  { number: 13, text: 'Leetcode questions solved', },
  { number: 0, text: 'StackOverflow Answers', },
  { number: 0, text: 'Earned on Upwork', },
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}.`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
