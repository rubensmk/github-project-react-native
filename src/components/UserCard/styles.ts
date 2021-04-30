import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../global/theme';

export const Container = styled.View`
    width:100%;
    height:100px;
    background-color: ${theme.colors.background};
    flex-direction:row;
    margin:5px 0;
    padding:20px 0;
    justify-content:space-around;
    align-items:center;
`;

export const CardName = styled.Text`
    color: ${theme.colors.text};
    font-size:16px;
    font-weight:bold;
`;

export const Button = styled.TouchableOpacity``;


export const Avatar = styled.Image`
	width:72px;
	height:72px;
	border-radius:80px;
	border-width:3px;
	border-color:${theme.colors.text};
`;