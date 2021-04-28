import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Text } from 'react-native'

import * as S from './styles';

const BottomTab: React.FC<BottomTabBarProps> = ({
	navigation,
	activeTintColor,
	inactiveTintColor,
	state,
}) => {
	const theme = useTheme();

	return (
		<S.Background>
			<S.Container>
				<S.Button onPress={() => navigation.navigate('Home')}>
					<Feather
						name='home'
						size={34}
						color={state.index === 0 ? activeTintColor : inactiveTintColor}

					/>
					<S.ButtonText>Home</S.ButtonText>
				</S.Button>

				<S.Button onPress={() => navigation.navigate('Repos')}>
					<Feather
						name='github'
						size={28}
						color={state.index === 1 ? activeTintColor : inactiveTintColor}
					/>
					<S.ButtonText>Repos</S.ButtonText>
				</S.Button>
				<S.Button onPress={() => navigation.navigate('Followers')}>
					<Feather
						name='users'
						size={32}
						color={state.index === 2 ? activeTintColor : inactiveTintColor}
					/>
					<S.ButtonText>Seguidores</S.ButtonText>
				</S.Button>
				<S.Button onPress={() => navigation.navigate('Following')}>
					<Feather
						name='users'
						size={32}
						color={state.index === 3 ? activeTintColor : inactiveTintColor}
					/>
					<S.ButtonText>Seguindo</S.ButtonText>
				</S.Button>
			</S.Container>
		</S.Background>
	);
};

export default BottomTab;
