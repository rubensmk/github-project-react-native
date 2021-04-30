import React, { useCallback, useState, useContext, useEffect } from 'react';
import * as S from './styles';
import { Text, StatusBar, View } from 'react-native';
import theme from '../../global/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import Load from '../../components/Load';


const Home: React.FC = () => {
    const { user, loading } = useContext(UserContext);
    const { navigate } = useNavigation();


    useEffect(() => {
        console.log(loading);
    }, []);

    if (loading) {
        return <Load />
    }
    return (
        <>
            {user.map(profile => (
                <S.Container key={profile.id}>
                    <StatusBar backgroundColor={theme.colors.header} />
                    <S.Header>
                        <S.HeaderTitle>#{profile.login}</S.HeaderTitle>
                        <S.HeaderLogOut onPress={() => navigate('Auth')}>
                            <Text style={{ fontSize: 15, color: '#fdfdfd', marginRight: 10 }}>Sair</Text>
                            <Feather name="log-out" size={18} color={theme.colors.red} />
                        </S.HeaderLogOut>
                        <S.Avatar source={{ uri: `${profile.avatar_url}` }} />
                    </S.Header>

                    <S.Profile>
                        <S.Tag />
                        <S.Name>{profile.name ?? profile.login}</S.Name>
                        <S.Email>{profile.email ?? 'E-mail não informado'} </S.Email>
                        <S.Address>{profile.location ?? 'Localização não informada'}</S.Address>
                    </S.Profile>
                    <S.Status>
                        <S.Followers>
                            <S.FollowersCount>{profile.followers}</S.FollowersCount>
                            <S.FollowersText>Seguidores</S.FollowersText>
                        </S.Followers>
                        <S.Following>
                            <S.FollowingCount>{profile.following}</S.FollowingCount>
                            <S.FollowingText>Seguindo</S.FollowingText>
                        </S.Following>
                        <S.Repos>
                            <S.ReposCount>{profile.public_repos}</S.ReposCount>
                            <S.ReposText>Repositórios</S.ReposText>
                        </S.Repos>
                    </S.Status>
                    <S.Bio>
                        <S.Tag />
                        <S.BioTitle>BIO</S.BioTitle>
                        <S.BioDescription>{profile.bio ?? 'Sem descrição'}</S.BioDescription>
                    </S.Bio>
                </S.Container>
            ))}
        </>

    );
};

export default Home;
