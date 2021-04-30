import { Dimensions, FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
	background-color:${theme.colors.background};
	width:${Dimensions.get('window').width}px;
	height:${Dimensions.get('window').height}px;
	flex:1;
`;

export const ListRepos = styled(FlatList as new () => FlatList)`
	width:${Dimensions.get('window').width}px;
	height:150px;
	margin-bottom:70px
`;


