import React from 'react';
import { Container, ProfileUserpic, ContainerListText, ContainerListCard, ContainerCardList, ContainerListTextHeader, ContainerMenu, ContainerChildren, ContainerChildren2, ContainerListTextRigth, ContainerCardListText, ButtonSair, TextHeader } from "./styles";
import { Loading } from '../Loading';

export function Profile({ repos = [], getReposStarred, loading, user = {}, getUser, logout, history }) {

    React.useEffect(() => {
        getReposStarred()
        getUser()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
  
    const { avatar_url, login, bio, html_url } = user;

    return (
        <>
            <ContainerMenu >
                <Container>
                    <ProfileUserpic>
                        {avatar_url ? <img src={avatar_url} alt="" /> : <i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>}
                        <p>{login}</p>
                        <p>{bio || "sem biografia" }</p>
                        <p>{html_url}</p>
                    </ProfileUserpic>

                </Container>
            </ContainerMenu>


            <div style={{ marginLeft: "25%" }}>

                <ContainerChildren >
                    <TextHeader>Lista Repositórios</TextHeader>
                    <ButtonSair onClick={() => { 
                        logout() 
                        history.push("/")
                    }} >SAIR</ButtonSair>
                </ContainerChildren>

                <ContainerChildren2>
                    <LoadingList repos={repos} loading={loading} />
                </ContainerChildren2>

            </div>
        </>
    )
}

export function LoadingList({ loading = false, repos }) {
    if (loading) return <ContainerListTextHeader><Loading /></ContainerListTextHeader>
    return <ListCard repos={repos} />
}

export function ListCard({ repos = [] }) {

    if (!repos.length) return <ContainerListTextHeader>Usuário ainda não deu estrelas</ContainerListTextHeader>

    return (
        <ContainerCardList>
            {repos.map(({ full_name, stargazers_count }, key) => (
                <ContainerListCard key={key} >
                    <ContainerCardListText>
                        <ContainerListText>{full_name} </ContainerListText>
                        <ContainerListTextRigth> <i className="fa fa-star" aria-hidden="true"></i> {stargazers_count} </ContainerListTextRigth>
                    </ContainerCardListText>
                </ContainerListCard>
            ))}
        </ContainerCardList>
    )

}