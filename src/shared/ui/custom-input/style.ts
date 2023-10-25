import {StyleSheet} from 'react-native';
import {FONTS} from '../../constants';
import {COLORS} from '../../styles';

export const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    backgroundColor: '#DCDFE566',
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
  },
  labelContainer: {
    marginBottom: 12,
  },
  textInputStyle: {
    fontFamily: FONTS.Poppins_Regular,
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.dark_000,
  },
  labelText: {
    color: COLORS.dark_000,
    fontFamily: FONTS.Poppins_Regular,
    fontWeight: '500',
  },
});
