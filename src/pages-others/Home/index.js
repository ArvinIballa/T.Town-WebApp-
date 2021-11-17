import React from 'react';
import {Container, MainWrapper, Wrapper, Card, CardSection, CardText} from './HomeElements'

const Home = () => {

  const ttmap = [
    {id: 1, title: "Treasure Town", sub: "(Prequel)", link: '/prequel', lock: false},
    {id: 2, title: "Treasure Town", sub: "(The Arrival)", link: '', lock: true},
    {id: 3, title: "Treasure Town", sub: "(Wizardry)", link: '', lock: true},
  ]

  return (
    <Container>
      <MainWrapper>
        <Wrapper>

          {ttmap.map(data => 
            <Card key={data.id} to={data.link} effect={data.lock ? 1 : 0}>
              <CardSection>
                <CardText>{data.title}</CardText>
                <CardText>{data.sub}</CardText>
              </CardSection>
            </Card>
          )}

        </Wrapper>
      </MainWrapper>
    </Container>
  );
}

export default Home;