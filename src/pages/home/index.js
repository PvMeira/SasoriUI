import React from 'react';
import {Container, Title} from './styles';
import {strings} from '../../configuration/assets';

const Home = () => {
    return (
        <Container>
           <Title>
               {strings.home.title}
           </Title>
        </Container>
    )
}

export default Home
