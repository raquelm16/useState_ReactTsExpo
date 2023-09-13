import { StatusBar, } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [form, setForm] = useState({
    nome:'',
    genero:'',
    nascimento:'',
    user:'',
    senha:'',
    email:'',
    confirmar:'',
    cpf:'',
    idioma:'',
  })

  return (
    <View style={styles.container}>
      
      <Text style={styles.inputText}>Nome</Text>
      <TextInput style={styles.input} value={form.nome} onChange={
        e => {setForm({...form,
        nome: e.target.value})}}/>

      <Text style={styles.inputText}>Gênero</Text>
      <TextInput style={styles.input} value={form.genero} onChange={
        e => {setForm({...form,
        genero: e.target.value})}}/>

      <Text style={styles.inputText}>Data de nascimento</Text>
      <TextInput style={styles.input} value={form.nascimento} onChange={
        e => {setForm({...form,
        nascimento: e.target.value})}}/>

      <Text style={styles.inputText}>Usuário</Text>
      <TextInput style={styles.input} value={form.user} onChange={
        e => {setForm({...form,
        user: e.target.value})}}/>

      <Text style={styles.inputText}>Senha</Text>
      <TextInput style={styles.input} secureTextEntry={true}
      value={form.senha} onChange={
        e => {setForm({...form,
        senha: e.target.value})}}/>

      <Text style={styles.inputText}>E-mail</Text>
      <TextInput style={styles.input} value={form.email} onChange={
        e => {setForm({...form,
        email: e.target.value})}}/>

      <Text style={styles.inputText}>Confirme seu e-mail</Text>
      <TextInput style={styles.input} value={form.confirmar} onChange={
        e => {setForm({...form,
        confirmar: e.target.value})}}/>

      <Text style={styles.inputText}>CPF</Text>
      <TextInput style={styles.input} value={form.cpf} onChange={
        e => {setForm({...form,
        cpf: e.target.value})}}/>

      <Text style={styles.inputText}>Idioma</Text>
      <TextInput style={styles.input} value={form.idioma} onChange={
        e => {setForm({...form,
        idioma: e.target.value})}}/>

      <Text>
        {'\n'}
        {form.nome}{'\n'}
        {form.genero}{'\n'}
        {form.nascimento}{'\n'}
        {form.user}{'\n'}
        {form.senha}{'\n'}
        {form.email}{'\n'}
        {form.confirmar}{'\n'}
        {form.cpf}{'\n'}
        {form.idioma}
      </Text>

    <View style={styles.button}>
      <Button title='Cadastrar'/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    color:'black',
    width:'25%',
    borderWidth:1,
    borderRadius:8,
    borderColor:'grey',
    padding:6,
    fontSize:13
  },
  inputText:{
    fontSize:13,
    margin:5,
    marginTop:10
  },
  title:{
    fontSize:20,
    margin:15,
  },
  button:{
    margin:20,
    width:'25%',
  }

});
