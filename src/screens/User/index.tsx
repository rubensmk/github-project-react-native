import React, { useCallback, useState, useContext, useEffect } from 'react';
import * as S from './styles';
import { Text, StatusBar, View } from 'react-native';
import theme from '../../global/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';
import { AntDesign } from '@expo/vector-icons';
import api from '../../services/api';

interface Params {
    username: string;
}

interface OtherProfileProps {
    name?: string;
    email?: string;
    login: string;
    id: number;
    avatar_url: string;
    location?: string;
    followers: number;
    following: number;
    public_repos: number;
    bio?: string;
}

const User: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { username } = route.params as Params;
    const { signIn } = useContext(UserContext);

    const [currentProfile, setCurrentProfile] = useState<OtherProfileProps[]>([]);


    async function handleChangeAccount() {
        signIn(username);
        navigation.navigate('Followers');
        navigation.navigate('Home');
    }
    useEffect(() => {

        async function getProfile() {
            const response = await api.get(`/users/${username}`);
            setCurrentProfile([response.data]);
        }

        getProfile();

    }, [])
    return (
        <>
            {currentProfile.map(profile => (
                <S.Container key={profile.id}>
                    <StatusBar backgroundColor={theme.colors.header} />
                    <S.Header>
                        <S.Button onPress={() => navigation.navigate('Followers')}>
                            <AntDesign name="arrowleft" color={theme.colors.text} size={18} />
                        </S.Button>
                        <S.HeaderLogOut onPress={() => handleChangeAccount()}>
                            <Text style={{ fontSize: 15, color: '#fdfdfd', marginRight: 10 }}>Salvar</Text>
                            <Feather name="log-in" size={18} color='green' />
                        </S.HeaderLogOut>
                        <S.Avatar source={{ uri: `${profile.avatar_url}` }} />
                    </S.Header>

                    <S.Profile>
                        <S.Tag />
                        <S.Name>{profile.name ?? profile.login}</S.Name>
                        <S.Email>{profile.email ?? 'E-mail não informado'}</S.Email>
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

export default User;
