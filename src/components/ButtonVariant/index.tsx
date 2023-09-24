import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import type { TextStyle, ViewStyle } from 'react-native';

import { Color } from '@/styles/color';
import { Font } from '@/styles/fonts';

export enum ButtonVariant {
  Primary = 'primary',
  Secondary = 'secondary',
  Disabled = 'disabled',
}

interface ButtonVariantProps {
  container: ViewStyle;
  text: TextStyle;
}

const useButtonVariant = (variant: ButtonVariant) => {
  const variantStyle: ButtonVariantProps = {
    container: {},
    text: {},
  };

  if (variant === ButtonVariant.Primary) {
    /**
     * Primary button variant
     */
    variantStyle.container = {
      backgroundColor: Color.primary,
    };
    variantStyle.text = {
      color: Color.white,
    };
  } else if (variant === ButtonVariant.Secondary) {
    /**
     * Secondary button variant
     */
    variantStyle.container = {
      backgroundColor: Color.danger,
    };
    variantStyle.text = {
      color: Color.white,
    };
  } else if (variant === ButtonVariant.Disabled) {
    /**
     * Disabled button variant
     */
    variantStyle.container = {
      backgroundColor: Color.tertiary,
    };
    variantStyle.text = {
      color: Color.white,
    };
  }

  return variantStyle;
};

interface ButtonProps {
  label: string;
  variant?: ButtonVariant;
}

/**
 * Main button component
 */
const Button = (props: ButtonProps) => {
  const variantStyle = useButtonVariant(props.variant || ButtonVariant.Primary);

  return (
    <TouchableOpacity style={{ ...styles.container, ...variantStyle.container }}>
      <View>
        <Text style={{ ...styles.text, ...variantStyle.text }}>{props.label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    padding: 18,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: Font.bold,
  },
});

export default Button;
