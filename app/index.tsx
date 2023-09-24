import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from '@expo-google-fonts/montserrat';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

import Button, { ButtonVariant } from '@/components/ButtonVariant';
import { Font } from '@/styles/fonts';

export default function Page() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if (!fontsLoaded)
    return (
      <View>
        <ActivityIndicator />
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={{ ...styles.title, fontFamily: Font.regular }}>Nobi Moodboard in Regular</Text>
        <Text style={{ ...styles.title, fontFamily: Font.medium }}>Nobi Moodboard in Medium</Text>
        <Text style={{ ...styles.title, fontFamily: Font.semi }}>Nobi Moodboard in Semi</Text>
        <Text style={{ ...styles.title, fontFamily: Font.bold }}>Nobi Moodboard in Bold</Text>
        <Button label="ButtonPrimary" variant={ButtonVariant.Primary} />
        <Button label="ButtonSecondary" variant={ButtonVariant.Secondary} />
        <Button label="ButtonDisabled" variant={ButtonVariant.Disabled} />
        <Button label="ButtonBorder" variant={ButtonVariant.Border} />
        <Button label="ButtonBorderDark" variant={ButtonVariant.BorderDark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    maxWidth: 960,
    marginHorizontal: 'auto',
  },
  title: {
    fontSize: 24,
  },
});
