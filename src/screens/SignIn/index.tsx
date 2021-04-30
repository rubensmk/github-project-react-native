import React, { useState, useEffect, useContext } from 'react';
import * as S from './styles';
import { AntDesign } from '@expo/vector-icons';
import theme from '../../global/theme';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";
import Button from '../../components/Button';
import { UserContext } from '../../contexts/UserContext';

const SignIn: React.FC = () => {

    const { control, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(UserContext);

    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    async function onSubmit(data: any) {
        signIn(data.username);
        navigation.navigate('Home');
    }

    useEffect(() => {
    }, []);
    return (
        <S.Container>
            <AntDesign name="github" size={150} color={theme.colors.yellow} />
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <S.Input
                        placeholder="Usuário"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={value => onChange(value)}
                        value={value}
                    />

                )}
                name="username"
                rules={{ required: true }}
                defaultValue=""
            />
            {errors.username && <S.Error>Campo obrigatório</S.Error>}

            <Button iconName="arrow-right" iconColor="#111" iconSize={18} onPress={handleSubmit(onSubmit)} loading={loading}>Enviar</Button>
        </S.Container>
    );
};

export default SignIn;
