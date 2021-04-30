import React, { useCallback, useContext, useEffect, useState } from 'react';
import * as S from './styles';
import { ActivityIndicator, Text, View } from 'react-native';
import RepositoryCard from '../../components/RepositoryCard';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';
import theme from '../../global/theme';

const Repos: React.FC = () => {
    const { repos, user } = useContext(UserContext);

    return (
        <S.Container>
            <Header count={user[0].public_repos} type="repositórios" />
            <S.ListRepos keyExtractor={((item) => String(item.id))} data={repos} renderItem={({ item }) => (
                <RepositoryCard data={item} />
            )}
                showsHorizontalScrollIndicator={false}
            />
        </S.Container>
    );
};

export default Repos;