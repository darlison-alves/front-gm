import React from 'react';
import { Container, ProfileUserpic, ContainerList, ContainerListText, ContainerListCard, ContainerListCardHeader, ContainerListCardMain, ContainerCardList, ContainerListTextHeader } from "./styles";

export function Profile({user}) {
    return (
        <Container>
            <ProfileUserpic >
                <img src="https://avatars2.githubusercontent.com/u/33131140?v=4" alt="" />
                <p>ddsdds</p>
            </ProfileUserpic>

            <ContainerList>
                <ContainerListTextHeader>Lista de Repositórios</ContainerListTextHeader>
                <ContainerCardList>
                    
                    <ContainerListCard >                        
                        <ContainerListText>javascript</ContainerListText>
                    </ContainerListCard>

                </ContainerCardList>
            </ContainerList>

        </Container>

    )
}