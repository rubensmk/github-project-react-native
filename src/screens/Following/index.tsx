import React, { useContext } from 'react';
import * as S from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';

const Following: React.FC = () => {
    const { following, user } = useContext(UserContext);

    return (
        <S.Container>
            <Header count={user[0].following} type="seguindo" />
            <S.ListFollowing keyExtractor={((item) => String(item.id))} data={following} renderItem={({ item }) => (
                <UserCard data={item} path={'User'} />
            )}
                showsHorizontalScrollIndicator={false}
            />
        </S.Container>
    );
};

export default Following;
