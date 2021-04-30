import styled from 'styled-components/native';
import { } from 'react-native-gesture-handler';
import theme from '../../global/theme';

export const Background = styled.View`
	height: 0;
`;

export const Container = styled.View`
	height:80px;
	border-top-left-radius: 30px;
	border-top-right-radius: 30px;
	background-color: #fff;
	transform: translateY(-70px);
	flex-direction: row;
`;

export const Button = styled.TouchableOpacity.attrs({
	activeOpacity: 0.5,
})`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const ButtonText = styled.Text`
	margin-top: 5px;
	margin-bottom:7px;
	color:${theme.colors.background};
`;