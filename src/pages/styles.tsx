import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerImg: {
    height: 173,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0D0D0D',
    padding: 16,
  },
  containerList: {
    flex: 1,
    backgroundColor: '#1b1b1b',
    padding: 16,
  },
  img: {
    width: 110,
    height: 32,
  },
  viewInput: {
    bottom: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginRight: 5,
    padding: 16,
    height: 54,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#1E6F9F',
    width: 52,
    height: 52,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconAdd: {
    width: 16,
    height: 16,
  },
});
