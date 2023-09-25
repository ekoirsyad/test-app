import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Button, { ButtonVariant } from '@/components/ButtonVariant';
import { Font } from '@/styles/fonts';

const Account = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={{ ...styles.title, fontFamily: Font.regular }}>Moodboard in Regular</Text>
        <Text style={{ ...styles.title, fontFamily: Font.medium }}>Moodboard in Medium</Text>
        <Text style={{ ...styles.title, fontFamily: Font.semi }}>Moodboard in Semi</Text>
        <Text style={{ ...styles.title, fontFamily: Font.bold }}>Moodboard in Bold</Text>
        <Button label="ButtonPrimary" variant={ButtonVariant.Primary} />
        <Button label="ButtonSecondary" variant={ButtonVariant.Secondary} />
        <Button label="ButtonDisabled" variant={ButtonVariant.Disabled} />
        <Button label="ButtonBorder" variant={ButtonVariant.Border} />
        <Button label="ButtonBorderDark" variant={ButtonVariant.BorderDark} />
      </View>
    </View>
  );
};

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

export default Account;
