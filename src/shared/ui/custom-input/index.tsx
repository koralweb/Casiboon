import React from 'react';

import {styles} from './style';
import {StyleProp, Text, TextInput, View, ViewStyle} from 'react-native';
import {COLORS} from '../../styles';

type CustomInputProps = {
  inputValue: string;
  onChangeInputValue(val: string): void;
  placeholder?: string;
  label?: string;
  wrapperStyle?: StyleProp<ViewStyle>;
};
export const CustomInput: React.FC<CustomInputProps> = ({
  inputValue,
  onChangeInputValue,
  placeholder,
  label,
  wrapperStyle,
}) => {
  return (
    <View style={styles.container}>
      {!!label && (
        <View style={styles.labelContainer}>
          <Text style={styles.labelText}>{label}</Text>
        </View>
      )}
      <View style={[styles.inputContainer, wrapperStyle]}>
        <TextInput
          value={inputValue}
          placeholder={placeholder}
          onChangeText={onChangeInputValue}
          placeholderTextColor={COLORS.dark_000}
          style={styles.textInputStyle}
        />
      </View>
    </View>
  );
};
