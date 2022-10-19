import {useState, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { styles } from './assets/styles/myStyles.js'

export default function App() {
  const [identificacion, setIdentificacion] = useState('')
  const [nombre, setNombre] = useState('');
  const [asignatura, setAsignatura] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  const [nota3, setNota3] = useState('');
  const [definitiva,setDefinitiva] = useState('');
  const [observacion, setObservacion] = useState('');
  const [registros, setRegistros] = useState([])
  // Referencias a elementos
  let refIdentificacion = useRef()
  const guardar = () => {
    // Variables
    let miDefinitiva = 0
    miDefinitiva = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3
    if (miDefinitiva <= 2){
      setObservacion('Reprueba')
    } else if (miDefinitiva > 2 && miDefinitiva <= 2.94){
      setObservacion('Habilita')
    }else {
      setObservacion('Aprueba')
    }
    setDefinitiva(miDefinitiva)

    //Agregar datos al array a través del método setSalarios para el array registros
    setRegistros(miregistros => [...miregistros,{identificacion:identificacion, nombre:nombre, asignatura:asignatura, nota1:nota1, nota2:nota2, nota3:nota3}]);
    refIdentificacion.current.focus();
  }

  let limpiar = () => {
    setIdentificacion('');
    setNombre('');
    setAsignatura('')
    setNota1('');
    setNota2('');
    setNota3('');
    setDefinitiva('');
    setObservacion('');
    refIdentificacion.current.focus();
  }
  
  let buscar = (idenbuscar) =>{
    let idenc = registros.find(reg => reg.identificacion == identificacion);
    let miDefinitiva = 0
    if (idenc != undefined){
      setNombre(idenc.nombre);
      setAsignatura(idenc.asignatura)
      setNota1(idenc.nota1);
      setNota2(idenc.nota2);
      setNota3(idenc.nota3);
      setDefinitiva(idenc.definitiva);
      setObservacion(idenc.observacion);
      
      miDefinitiva = (parseFloat(idenc.nota1) + parseFloat(idenc.nota2) + parseFloat(idenc.nota3)) / 3
      if (miDefinitiva <= 2){
        setObservacion('Reprueba')
      } else if (miDefinitiva > 2 && miDefinitiva <= 2.94){
        setObservacion('Habilita')
      } else {
        setObservacion('Aprueba')
      }
      setDefinitiva(miDefinitiva)
    }
    else{
      alert("Identificacion no encontrada");
    }
  }
  return (
    <View style={styles.container}>
      <Text>Notas</Text>
      <View style={[styles.contenido,{flexDirection:'row'}]}>
        <View style={[styles.alignViews]}>
          <Text style={styles.margenes}>Identificacion</Text>
          <Text style={styles.margenes}>Nombres</Text>
          <Text style={styles.margenes}>Asignatura</Text>
          <Text style={styles.margenes}>Nota 1</Text>
          <Text style={styles.margenes}>Nota 2</Text>
          <Text style={styles.margenes}>Nota 3</Text>
          <Text style={styles.margenes}>Definitiva</Text>
          <Text style={styles.margenes}>Observacion</Text>
        </View>
        <View style={[styles.alignViews]}>
          <TextInput
            placeholder=''      
            onChangeText={identificacion => setIdentificacion(identificacion)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={identificacion}
            ref={refIdentificacion}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            onChangeText={nombre => setNombre(nombre)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={nombre}
            keyboardType={Text}
          />
          <TextInput
            placeholder=''
            onChangeText={asignatura => setAsignatura(asignatura)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={asignatura}
            keyboardType={Text}
          />
          <TextInput
            placeholder=''
            onChangeText={nota1 => setNota1(nota1)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={nota1}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            onChangeText={nota2 => setNota2(nota2)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={nota2}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            onChangeText={nota3 => setNota3(nota3)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={nota3}
            keyboardType={Number}
          />
          <TextInput
            placeholder=''
            onChangeText={definitiva => setDefinitiva(definitiva)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={definitiva}
          />
          <TextInput
            placeholder=''
            onChangeText={observacion => setObservacion(observacion)}
            style={[styles.margenes,{borderColor:'black', textAlign: 'center', borderBottomWidth:1}]}
            value={observacion}
          />
        </View>

        <View style={[styles.espaciadoColumna,{alignItems:'center',justifyContent:'center'}]}>
          <Button
            title='Calcular/Guardar'
            color='green'
            onPress={guardar}
          />
          <Text>{`\n`}</Text>
          <Button
            title='Buscar'
            color='green'
            onPress={buscar}
          />
          <Text>{`\n`}</Text>
          <Button
            title='Limpiar'
            color='green'
            onPress={limpiar}
          />
        </View>
      </View>
    </View>
  );
}
