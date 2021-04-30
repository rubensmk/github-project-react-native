import styled from 'styled-components/native';
import theme from '../../global/theme';
import { RectButton } from 'react-native-gesture-handler';


export const Container = styled.View`
	background-color:${theme.colors.background};
	align-items: center;
	justify-content:center;
	height:100%;
`;

export const Input = styled.TextInput`
	padding: 0 16px;
	width: 340px;
	height: 56px;
	background-color: #fff;
	border-radius: 12px;
	margin-bottom:15px;
	margin-top:50px;
	font-size:18px;
	text-align:center;
`;

export const Error = styled.Text`
	color:${theme.colors.red};
	margin-bottom:20px;
`;