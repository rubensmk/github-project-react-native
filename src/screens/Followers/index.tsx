import React from 'react';
import * as S from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';

const Followers: React.FC = () => {

    return (
        <S.Container>
            <Header />
            <S.ListFollowers keyExtractor={((item) => String(item.id))} data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }]} renderItem={({ item }) => (
                <UserCard />
            )}
                showsHorizontalScrollIndicator={false}
            />
        </S.Container>
    );
};

export default Followers;

