import React from 'react';
import * as S from './styles';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Image, View } from 'react-native';
import theme from '../../global/theme';
import { useNavigation } from '@react-navigation/native';


interface UserProps {
    data: {
        id: number;
        login: string;
        avatar_url: string;
    },
    path: string;

}


const UserCard: React.FC<UserProps> = ({ data, path, ...rest }: UserProps) => {

    const navigation = useNavigation();

    async function handleSelect(username: string) {
        navigation.navigate('User', { username });
    }
    return (
        <>
            <S.Container key={data.id} {...rest}>
                <S.Avatar source={{ uri: `${data.avatar_url}` }} />
                <S.CardName>#{data.login}</S.CardName>
                <S.Button onPress={() => handleSelect(data.login)}>
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