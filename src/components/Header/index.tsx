import React from 'react';
import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/theme';


interface HeaderProps {
    count?: number;
}

const Header: React.FC<HeaderProps> = ({ count }: HeaderProps) => {
    return (
        <S.Header>
            <S.Button>
                <AntDesign name="arrowleft" color={theme.colors.text} size={18} />
            </S.Button>
            <S.HeaderTitle> 10 seguidores</S.HeaderTitle>
        </S.Header>
    )
};

export default Header;