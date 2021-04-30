import React, { useCallback, useState, useContext, useEffect } from 'react';
import * as S from './styles';
import { Text, StatusBar, View } from 'react-native';
import theme from '../../global/theme';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../contexts/UserContext';


const Home: React.FC = () => {
    const { user } = useContext(UserContext);
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
    }, []);
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
                        <S.Name>{profile.name}</S.Name>
                        <S.Email>{profile.email} </S.Email>
                        <S.Address>{profile.location}</S.Address>
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
                        <S.BioDescription>{profile.bio}</S.BioDescription>
                    </S.Bio>
                </S.Container>
            ))}
        </>

    );
};

export default Home;
