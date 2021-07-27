import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id={`tech`}>
      <SectionDivider />
      <br/>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at, atque dolor earum eos hic modi molestias nostrum, quos reprehenderit repudiandae sint soluta veniam. Culpa dolorem eum id modi voluptatem.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size={`3rem`} />
              <ListContainer>
                  <ListTitle>Front End</ListTitle>
                  <ListParagraph>
                      Experienced with <br/>
                      HTML5 <br/>
                      CSS3 <br/>
                      Javascript<br/>
                      React.js <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size={`3rem`} />
              <ListContainer>
                  <ListTitle>Back End</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Ruby on Rails <br/>
                      Django <br/>
                      MySQL <br/>
                      PostGresql <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiZend size={`3rem`} />
              <ListContainer>
                  <ListTitle>UI Design Tool</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Adobe Photoshop <br/>
                      Figma <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
