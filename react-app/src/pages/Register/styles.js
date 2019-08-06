import { StyleSheet } from 'react-native';

import colorTheme from '../../styles/stylesGlobal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
  }, 

  titleLogin: {
    fontWeight: "bold",
    fontSize: 18
  },

  containerButton: {
    width: '96%',
    marginTop: 22,
  },
  
  inputLogin:{
    marginTop: 15,
  },

  buttonStyle: {
    backgroundColor: colorTheme.colorButton,
    borderRadius: 0,
  },
  
  titleButton: {
    textTransform: "uppercase",
  },

});


export default styles;