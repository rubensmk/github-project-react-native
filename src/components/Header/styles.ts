import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../global/theme';

export const Header = styled.View`
	height:70px;
	width:100%;
	background-color:${theme.colors.header};
	flex-direction:row;
	display:flex;
    align-items:center;
    justify-content:center;
`;
export const HeaderTitle = styled.Text`
	margin-left:20px;
	font-size:17px;
	font-weight:bold;
	color:${theme.colors.text};
`;
export const Button = styled.TouchableOpacity``;