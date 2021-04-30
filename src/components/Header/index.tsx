import React from 'react';
import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/theme';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
    count: number;
    type: 'repositórios' | 'seguidores' | 'seguindo';
}

const Header: React.FC<HeaderProps> = ({ count, type }: HeaderProps) => {

    const navigation = useNavigation();

    return (
        <S.Header>
            <S.Button onPress={() => navigation.navigate('Home')}>
                <AntDesign name="arrowleft" color={theme.colors.text} size={18} />
            </S.Button>
            <S.HeaderTitle> {count.toString()} {type} </S.HeaderTitle>
        </S.Header>
    )
};

export default Header;