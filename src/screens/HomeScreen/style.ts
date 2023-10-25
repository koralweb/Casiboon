import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 100,
    paddingHorizontal: 22,
  },
  footerText: {
    color: COLORS.dark_000,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 22,
    textTransform: 'uppercase',
  },
});
