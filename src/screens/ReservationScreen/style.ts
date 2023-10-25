import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 18,
  },
  inputSpace: {
    marginBottom: 24,
  },
  header: {
    marginTop: 22,
  },
  bottomImage: {
    position: 'absolute',
    right: 0,
    width: 200,
    height: 200,
    zIndex: -1, // setting this to a negative value to ensure it's below
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 32,
    marginBottom: 32,
  },
});
