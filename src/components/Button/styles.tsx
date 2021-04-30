import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons';
import theme from '../../global/theme';

export const Container = styled(RectButton)`
	background-color:${theme.colors.yellow};
	width: 340px;
	height: 56px;
	border-radius: 12px;
	justify-content:center;
	flex-direction:row;
	align-items:center;
`;

export const ButtonText = styled.Text`
  color:#111;
	font-size:20px;
	font-weight:bold;
	margin-right:10px;
`;

export const Icon = styled(Feather)`
`;
