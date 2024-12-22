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
                      Antd <br/>
                      Tailwind <br/>
                      Shadcn <br/>
  
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size={`3rem`} />
              <ListContainer>
                  <ListTitle>Back End</ListTitle>
                  <ListParagraph>
                      Experienced with <br/>
                      Node js <br/>
                      Fastify <br/>
                      Mongodb <br/>
                      Hyperexpress <br/>
                      Dynamodb <br/>
                      AWS S3 bucket <br/>
                      Linux <br/>
                      Socket io <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiZend size={`3rem`} />
              <ListContainer>
                  <ListTitle>AI</ListTitle>
                  <ListParagraph>
                      Experienced with <br/>
                      Open ai prompt engineering <br/>
                      Langchain <br/>
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
