import styled from 'styled-components/native';
import theme from '../../global/theme';


export const Container = styled.View`
	background-color:${theme.colors.background};
	align-items: center;
	height:100%;
`;

//Header
export const Header = styled.View`
	height:126px;
	width:100%;
	background-color:${theme.colors.header};
	flex-direction:row;
	display:flex;
	justify-content:space-between; 
`;
export const HeaderTitle = styled.Text`
	margin-left:20px;
	font-size:20px;
	font-weight:bold;
	color:${theme.colors.text};

`;
export const HeaderLogOut = styled.TouchableOpacity`
	margin-right:40px;
	flex-direction:row;
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
export const Profile = styled.View`
	height:230px;
	width:100%;
	justify-content:center;
	margin-left:50px;
	`;
export const Name = styled.Text`
	margin-top:40px;
	font-size:26px;
	font-weight:bold;	
	color:${theme.colors.text};
`;
export const Email = styled.Text`
	font-size:18px;
	color:${theme.colors.text};
`;
export const Address = styled.Text`
	font-size:18px;
	color:${theme.colors.text};
`;

//Status
export const Status = styled.View`
	flex-direction:row;
	width:100%;
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
	margin:35px 16px 10px 40px;
	height:440px;
`;
export const BioTitle = styled.Text`
	font-size:26px;	
	font-weight:bold;
	color:${theme.colors.text};
`;
export const BioDescription = styled.Text`
	font-size:18px;	
	color:${theme.colors.text};
`;