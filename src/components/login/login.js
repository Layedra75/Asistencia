import React, { useState } from "react";
import { Form, Button, Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {

  let history = useHistory();
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState([]);
  const [error, setError] = useState('');

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    if (!user || !password) {
      setError('Por favor, complete ambos campos.');
      return;
    }

    axios.get(aux + myip, {
      params: {
        user: user,
        pass: password,
      },
    })
      .then(function (response) {
        console.log(response);
        setLogin(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        if (login.length > 0 && login[0].record === 0) {
          alert('¡Valide Usuario!');
        } else {
          history.push("/validate");
        }
      });
  }

  login.map((data) => {
    console.log("DATA INFO " + data.record);
    localStorage.setItem('RECORD', data.record);
    localStorage.setItem('ID', data.id);
    localStorage.setItem('NAME', data.names);
    localStorage.setItem('LASTNAME', data.lastnames);
  })

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Usuario *</label>
          <Input
            name="user"
            onChange={(e) => setUser(e.target.value)}
            iconPosition='left'
            placeholder='Usuario'>
            <Icon name='user' />
            <input />
          </Input>
        </Form.Field>
        <Form.Field>
          <label>Clave *</label>
          <Input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            iconPosition='left'
            placeholder='Clave'>
            <Icon name='lock' />
            <input />
          </Input>
        </Form.Field>
        <center>
          <Button type='submit' color="linkedin" onClick={sendDataToApi} icon>
            <Icon name='sign-in' />
            Ingresar
          </Button>
        </center>
        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
      </Form>
    </div>
  );
}
