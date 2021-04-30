import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProperties } from 'react-native-gesture-handler';
import { Container, ButtonText, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
	children: string;
	loading?: boolean;
	iconName?: string;
	iconColor?: string;
	iconSize?: number;
	onPress(): void;
}

const Button: React.FC<ButtonProps> = ({
	children,
	loading,
	iconName,
	iconColor,
	iconSize,
	onPress,
	...rest
}) => {
	return (
		<Container
			{...rest}
			onPress={onPress}>
			{
				loading ? (
					<ActivityIndicator size="small" color="#111" />
				) : (
						<ButtonText> { children}</ButtonText >
					)}

			<Icon name={iconName ?? undefined} color={iconColor ?? undefined} size={iconSize ?? undefined} />
		</Container >

	);
};

export default Button;
