import React from 'react';
import * as S from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import theme from '../../global/theme';



interface RepositoryProps extends RectButtonProperties {
    data: {
        id: number;
        name: string;
        stargazers_count: number;
        description: string;
    }
}

const RepositoryCard: React.FC<RepositoryProps> = ({ data, ...rest }: RepositoryProps) => {
    return (
        <>
            <S.Container>
                <S.Tag />
                <S.CardTitle>{data.name}</S.CardTitle>
                <S.CardDescription>{data.description}</S.CardDescription>
                <S.Stars>
                    <Feather name="star" size={18} color={theme.colors.yellow} />
                    <S.StarsCount>{data.stargazers_count}</S.StarsCount>
                </S.Stars>
            </S.Container>
            <View>
                <View style={{ flex: 1, height: 1.5, backgroundColor: '#5252525D' }} />
            </View>
        </>
    )
};

export default RepositoryCard;