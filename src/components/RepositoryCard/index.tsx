import React from 'react';
import * as S from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { View } from 'react-native';
import theme from '../../global/theme';



interface RepositoryProps extends RectButtonProperties {
    data: {
        name: string;
        description: string;
        stars: number;
    }
}

const RepositoryCard: React.FC<RepositoryProps> = ({ data, ...rest }: RepositoryProps) => {
    return (
        <>
            <S.Container {...rest}>
                <S.CardTitle>brasiliapp-react-native</S.CardTitle>
                <S.CardDescription>Repository for centralization of the BrasiliApp mobile project</S.CardDescription>
                <S.Stars>
                    <Feather name="star" size={18} color={theme.colors.yellow} />
                    <S.StarsCount>32</S.StarsCount>
                </S.Stars>
            </S.Container>
            <View>
                <View style={{ flex: 1, height: 1.5, backgroundColor: '#5252525D' }} />
            </View>
        </>
    )
};

export default RepositoryCard;