import React, { useContext } from 'react';
import * as S from './styles';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import { UserContext } from '../../contexts/UserContext';

const Followers: React.FC = () => {

    const { followers, user } = useContext(UserContext);

    return (
        <S.Container>
            <Header count={user[0].followers} type="seguidores" />
            <S.ListFollowers keyExtractor={((item) => String(item.id))} data={followers} renderItem={({ item }) => (
                <UserCard data={item} path={'User'} />
            )}
                showsHorizontalScrollIndicator={false}
            />
        </S.Container>
    );
};

export default Followers;

