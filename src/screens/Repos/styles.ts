import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/theme';

export const Container = styled.View`
	background-color:${theme.colors.yellow};
	flex:1;
`;

export const ListRepos = styled(FlatList as new () => FlatList)`
	background-color:${theme.colors.background};
	width:100%;
	height:150px;

`;


