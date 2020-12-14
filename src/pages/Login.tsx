import React, {useEffect} from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolate,
  withSequence,
} from 'react-native-reanimated';

import heroImg from '../assets/hero.png';

const Login: React.FC = () => {
  const titlePosition = useSharedValue(30);
  const imagePosition = useSharedValue(-30);

  useEffect(() => {
    imagePosition.value = withTiming(
      0,
      {
        duration: 1000,
      },
      () => {
        titlePosition.value = withSequence(
          withTiming(0, {
            duration: 1000,
          }),
          withTiming(-300, {
            duration: 500,
          }),
        );
      },
    );
  }, []);

  const titleStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: titlePosition.value}],
      opacity: interpolate(
        titlePosition.value,
        [30, 0],
        [0, 1],
        Extrapolate.CLAMP,
      ),
    };
  });

  const heroStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: imagePosition.value}],
    };
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#13131a" />

      <Animated.Image style={[styles.hero, heroStyle]} source={heroImg} />

      <Animated.Text style={[styles.title, titleStyle]}>Ido</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#13131a',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hero: {
    height: 200,
    width: 288,
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 26,
  },
});

export default Login;
