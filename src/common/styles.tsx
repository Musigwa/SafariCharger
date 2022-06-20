import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  get flexCenter() {
    return { flex: 1, ...this.center };
  },
  get flexRow() {
    return { flex: 1, ...this.row };
  },
});
