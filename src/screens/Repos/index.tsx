import React, { useCallback, useState } from 'react';
import * as S from './styles';
import { Text, View } from 'react-native';
import RepositoryCard from '../../components/RepositoryCard';
import Header from '../../components/Header';

const Repos: React.FC = () => {

    return (
        <S.Container>
            <Header />
            <S.ListRepos keyExtractor={((item) => String(item.id))} data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]} renderItem={({ item }) => (
                <RepositoryCard data={item} />
            )}
                showsHorizontalScrollIndicator={false}
            />
        </S.Container>
    );
};

export default Repos;