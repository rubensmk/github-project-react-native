import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../global/theme';

export const Container = styled(RectButton)`
    width:${Dimensions.get('window').width}px;
    height:150px;
    background-color: ${theme.colors.background};
    margin:5px 0;
    padding-left:20px;
    padding-top:10px;
`;
export const Tag = styled.View`
	background-color:${theme.colors.yellow};
	width:10px;
	height:42px;
	border-top-right-radius: 100px;
	border-bottom-right-radius:100px;
	position:absolute;
	left:0;
`;
export const CardTitle = styled.Text`
    color: ${theme.colors.text};
    font-size:20px;
    font-weight:bold;
`;

export const CardDescription = styled.Text`
    color: ${theme.colors.text};
    font-size:15px;
    margin-top:9px;
`;

export const Stars = styled.View`
    flex-direction:row;
    margin-top:7px;
    align-items:center;
`;

export const StarsCount = styled.Text`
    color: ${theme.colors.text};
    font-size:15px;
    margin-left:5px;
`;