import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import theme from '../../global/theme';

export const Container = styled(RectButton)`
    flex:1;
    width:100%;
    height:150px;
    background-color: ${theme.colors.background};
    margin:5px 0;
    padding-left:20px;
    padding-top:20px;
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