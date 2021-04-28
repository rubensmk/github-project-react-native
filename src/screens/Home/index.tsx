import React, { useCallback, useState } from 'react';
import * as S from './styles';
import { Text, StatusBar, Image } from 'react-native';
import theme from '../../global/theme';
import { Feather } from '@expo/vector-icons';

const Home: React.FC = () => {

    return (
        <S.Container>
            <StatusBar backgroundColor={theme.colors.header} />
            <S.Header>
                <S.HeaderTitle>#rubensmk</S.HeaderTitle>
                <S.HeaderLogOut>
                    <Text style={{ fontSize: 15, color: '#fdfdfd', marginRight: 10 }}>Sair</Text>
                    <Feather name="log-out" size={18} color={theme.colors.red} />
                </S.HeaderLogOut>
                <S.Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/52255226?v=4' }} />
            </S.Header>

            <S.Profile>
                <S.Name>ANILTON VEIGA</S.Name>
                <S.Email>anilton.veigaa@gmail.com </S.Email>
                <S.Address>Itaí/SP</S.Address>
            </S.Profile>
            <S.Status>
                <S.Followers>
                    <S.FollowersCount>32</S.FollowersCount>
                    <S.FollowersText>Seguidores</S.FollowersText>
                </S.Followers>
                <S.Following>
                    <S.FollowingCount>32</S.FollowingCount>
                    <S.FollowingText>Seguindo</S.FollowingText>
                </S.Following>
                <S.Repos>
                    <S.ReposCount>10</S.ReposCount>
                    <S.ReposText>Repositórios</S.ReposText>
                </S.Repos>
            </S.Status>
            <S.Bio>
                <S.BioTitle>BIO</S.BioTitle>
                <S.BioDescription>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur.</S.BioDescription>
            </S.Bio>
        </S.Container>
    );
};

export default Home;
