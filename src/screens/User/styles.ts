import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '../../global/theme';


export const Container = styled.View`
	background-color:${theme.colors.background};
	align-items: center;
	height:${Dimensions.get('window').height}px;
`;


//Header
export const Header = styled.View`
	height:126px;
	width:${Dimensions.get('window').width}px;
	background-color:${theme.colors.header};
	flex-direction:row;
	display:flex;
	justify-content:space-between; 
	padding-top:10px;
`;

export const HeaderLogOut = styled.TouchableOpacity`
	margin-right:20px;
	flex-direction:row;
`;
export const Button = styled.TouchableOpacity`
	margin-left:20px;
`;
export const Avatar = styled.Image`
	width:150px;
	height:150px;
	border-radius:80px;
	border-width:3px;
	border-color:${theme.colors.text};
	position:absolute;
	z-index:-1;
	top:50px;
	left:130px;
`;

//Profile

export const Tag = styled.View`
	background-color:${theme.colors.yellow};
	width:10px;
	height:42px;
	border-top-right-radius: 100px;
	border-bottom-right-radius:100px;
	position:absolute;
	left:0;
`;

export const Profile = styled.View`	
	padding-top:40px;
	height:230px;
	width:${Dimensions.get('window').width}px;
	justify-content:center;
	`;
export const Name = styled.Text`
	margin-left:20px;
	font-size:26px;
	font-weight:bold;	
	color:${theme.colors.text};
`;
export const Email = styled.Text`
	margin-left:20px;
	font-size:18px;
	color:${theme.colors.text};
`;
export const Address = styled.Text`
	margin-left:20px;
	font-size:18px;
	color:${theme.colors.text};
`;

//Status
export const Status = styled.View`
	flex-direction:row;
	width:${Dimensions.get('window').width}px;
	height:97px;
	background-color:${theme.colors.backgroundlight};
	justify-content:space-around;
	align-items:center;
`;
export const Followers = styled.View`
	display:flex;
	align-items:center;
`;
export const FollowersText = styled.Text`
	font-size:17px;
	color:${theme.colors.text};
`;
export const FollowersCount = styled.Text`
	font-size:40px;	
	font-weight:bold;
	color:${theme.colors.text};
`;

export const Following = styled.View`
	display:flex;
	align-items:center;
`;
export const FollowingText = styled.Text`
	font-size:17px;
	color:${theme.colors.text};
`;
export const FollowingCount = styled.Text`
	font-size:40px;	
	font-weight:bold;
	color:${theme.colors.text};
`;
export const Repos = styled.View`
	display:flex;
	align-items:center;
`;
export const ReposText = styled.Text`
	font-size:17px;
	color:${theme.colors.text};
`;
export const ReposCount = styled.Text`
	font-size:40px;	
	font-weight:bold;
	color:${theme.colors.text};
`;

//Bio
export const Bio = styled.View`
	margin-top:35px;
	height:440px;
	width:${Dimensions.get('window').width}px;
`;
export const BioTitle = styled.Text`
	margin-left:20px;
	font-size:26px;	
	font-weight:bold;
	color:${theme.colors.text};
`;
export const BioDescription = styled.Text`
	margin-left:20px;
	font-size:18px;	
	color:${theme.colors.text};
`;