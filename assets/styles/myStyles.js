import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contenido: {
        flex: 1,
        backgroundColor: '#BDE8D0',
        width: '80%',
        height: '100%',
        marginBottom: '5%',
        marginTop: '5%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alignViews: {
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    columnas: {
        flexDirection: 'column',
    },
    margenes: {
        marginBottom: 20,
        marginLeft: 10,
    },
    espaciadoColumna: {
        marginLeft: 150,
    },
    boton: {
        fontSize: 20,
        width: 150,
        color: 'green'
    }
});

export {styles}