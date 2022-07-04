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
  get rowBetween() {
    return { justifyContent: 'space-between', ...this.row };
  },

  mapContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  mapBubble: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 20,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    width: 80,
    paddingHorizontal: 12,
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    backgroundColor: 'transparent',
  },

  itemContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  item: {
    marginHorizontal: 10,
  },
  title: {
    fontSize: 14,
    color: 'black',
    marginBottom: 5,
    marginLeft: 5,
  },
  description: {
    fontSize: 12,
    color: 'gray',
  },
  get iconContainer() {
    return {
      backgroundColor: 'black',
      ...this.center,
      borderRadius: 50,
      padding: 8,
    };
  },
});
