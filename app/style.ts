import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 244, 247, 0.85)',
    padding: 16,
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    padding: 24,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  textHeader: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  textLabel: {
    fontSize: 20,
    color: '#333',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 16,
    paddingHorizontal: 20,
    width: '100%',
    marginVertical: 10,
    fontSize: 18,
    color: '#333',
  },
  button: {
    width: '100%',
    backgroundColor: '#FF6347',
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  productItem: {
    padding: 16,
    borderBottomColor: '#c0c0c0',
    borderBottomWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  itemTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  itemDetails: {
    fontSize: 18,
    opacity: 0.8,
    color: '#666',
  },
  itemBadge: {
    fontSize: 24,
    color: '#204080',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  itemBadgeError: {
    color: 'red',
  },
  page: {
    flex: 1,
    backgroundColor: 'rgba(240, 244, 247, 0.85)',
    padding: 16,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 12,
  },
  col: {
    flexGrow: 1,
    fontSize: 18,
    color: '#333',
  },
  colAuto: {
    fontSize: 18,
    color: '#333',
  },
  stockError: {
    color: 'red',
  },
  text: {
    fontSize: 18,
  },
});
