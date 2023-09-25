import { BottomTabBar } from '@react-navigation/bottom-tabs';
import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';

import Bookmark from '@/assets/Bookmark';
import Discover from '@/assets/Discover';
import Profile from '@/assets/Profile';
import Video from '@/assets/Video';
import { Color } from '@/styles/color';

export default function TabsLayout() {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Color.white,
        },
        headerShown: false,
      }}
      tabBar={(props) => <BottomTabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          href: '/home',
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'transparent',
                marginTop: 17,
              }}>
              <Discover />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          href: '/chat',
          title: '',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}>
              <Video />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bookmark"
        options={{
          title: '',
          href: '/bookmark',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}>
              <Bookmark />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: '',
          href: '/account',
          tabBarIcon: ({ color }) => (
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: 17,
                backgroundColor: 'transparent',
              }}>
              <Profile />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
