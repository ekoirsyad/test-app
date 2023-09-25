import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
} from '@expo-google-fonts/inter';
import { Stack } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import Edit from '@/assets/Edit';
import Button from '@/components/ButtonVariant';
import { Color } from '@/styles/color';

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
  });

  if (!fontsLoaded)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
            name="other"
            options={{
              title: "",
              headerShown: true,
              headerTransparent: Platform.OS === "ios",
              headerBlurEffect: "regular",
            }}
          /> */}
      </Stack>
      <View
        style={{
          position: 'absolute',
          bottom: 80,
          right: 20,
        }}>
        <TouchableOpacity
          style={{
            borderRadius: 80,
            padding: 18,
            backgroundColor: Color.primary,
          }}>
          <Edit />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
