import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

const Scroll: React.FC = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler((event: any) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 180],
        [300, 120],
        Extrapolate.CLAMP,
      ),
    };
  });

  const avatarStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [100, 150],
        [1, 0],
        Extrapolate.CLAMP,
      ),
    };
  });

  return (
    <View>
      <Animated.ScrollView
        contentContainerStyle={{paddingTop: 300}}
        onScroll={scrollHandler}
        scrollEventThrottle={16}>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
        <Text style={styles.listItem}>Item da lista</Text>
      </Animated.ScrollView>

      <Animated.View style={[styles.header, headerStyle]}>
        <Animated.Image
          style={[styles.avatar, avatarStyle]}
          source={{
            uri: 'https://github.com/AndresdoSantos.png',
          }}
        />
        <Text style={styles.name}>Andres doSantos</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 300,
    backgroundColor: '#6c63ff',
    paddingVertical: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',

    position: 'absolute',
    overflow: 'hidden',
    left: 0,
    right: 0,
    top: 0,
  },
  avatar: {
    height: 140,
    width: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#fff',
  },
  listItem: {
    padding: 20,
    fontSize: 18,
  },
});

export default Scroll;
