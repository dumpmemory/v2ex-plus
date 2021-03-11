import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable } from 'react-native';
import FastImage, { Source } from 'react-native-fast-image';

interface IProps {
  username?: string;
  size?: number;
  source: Source | number;
  onPress?: () => void;
}

const Avatar = ({ username, size = 24, source, onPress }: IProps) => {
  const navigation = useNavigation();

  const _handlePress = () => {
    if (username) {
      navigation.navigate('profile', { username });
    }
    onPress && onPress();
  };

  return (
    <Pressable onPress={_handlePress}>
      <FastImage
        source={source}
        style={{
          width: size,
          height: size,
          borderRadius: size,
        }}
      />
    </Pressable>
  );
};

export default Avatar;
