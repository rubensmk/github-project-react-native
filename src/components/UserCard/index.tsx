import React from 'react';
import * as S from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import theme from '../../global/theme';



interface UserProps {
    avatar_url?: string;
    name?: string;
}

const UserCard: React.FC<UserProps> = ({ avatar_url, name }: UserProps) => {
    return (
        <>
            <S.Container>
                <S.Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/52255226?v=4' }} />
                <S.CardName>#rubensmk</S.CardName>
                <S.Button>
                    <AntDesign name="arrowright" color={theme.colors.text} size={18} />
                </S.Button>
            </S.Container>
            <View>
                <View style={{ flex: 1, height: 1.5, backgroundColor: '#5252525D' }} />
            </View>
        </>
    )
};

export default UserCard;