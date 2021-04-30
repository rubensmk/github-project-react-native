import { Dimensions, FlatList } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
	background-color:${theme.colors.background};
	width:${Dimensions.get('window').width}px;
	height:${Dimensions.get('window').height}px;
	flex:1;
`;

export const ListFollowers = styled(FlatList as new () => FlatList)`
	width:${Dimensions.get('window').width}px;
	height:150px;
	margin-bottom:70px;

`;

export const Content = styled.View`
	flex-direction:row;
	justify-content:center;
	align-items:center;
`;
export const Button = styled.TouchableOpacity`
`;