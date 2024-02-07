import React, { useState } from "react";
import { Form, Button, Input, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Create() {
  let history = useHistory();
  const type = "1";
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    let msg = "";
    let validationError = false;

    if (id.length !== 10) {
      msg += "Cedula incorrecta\n";
      validationError = true;
    }

    if (name.length < 3) {
      msg += "Máximo de caracteres para Nombre es 3\n";
      validationError = true;
    }

    if (lastname.length < 3) {
      msg += "Máximo de caracteres para Apellidos es 3\n";
      validationError = true;
    }

    const atIndex = email.indexOf("@");
    if (email.length < 10 || atIndex < 0) {
      msg += "Verifique el campo Email\n";
      validationError = true;
    }

    if (validationError) {
      setError(msg);
      alert(msg);
    } else {
      axios.post(aux + myip, {
        type,
        id,
        name,
        lastname,
        email,
        mobile
      })
        .then(() => {
          setId("");
          setName("");
          setLastName("");
          setEmail("");
          setMobile("");
          history.push("/login");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>
            <Icon name="id card outline" />
            Cédula *
          </label>
          <Input
            name="id"
            maxLength={10}
            onChange={(e) => setId(e.target.value)}
            placeholder='Cédula'
          />
        </Form.Field>
        <Form.Field>
          <label>
            <Icon name="user" />
            Nombres *
          </label>
          <Input
            name="name"
            maxLength={100}
            minLength={3}
            onChange={(e) => setName(e.target.value)}
            placeholder='Nombres'
          />
        </Form.Field>
        <Form.Field>
          <label>
            <Icon name="user outline" />
            Apellidos *
          </label>
          <Input
            name="lastname"
            maxLength={100}
            minLength={3}
            onChange={(e) => setLastName(e.target.value)}
            placeholder='Apellidos'
          />
        </Form.Field>
        <Form.Field>
          <label>
            <Icon name="mail outline" />
            Email *
          </label>
          <Input
            name="email"
            maxLength={100}
            minLength={10}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
        </Form.Field>
        <Form.Field>
          <label>
            <Icon name="phone" />
            Celular *
          </label>
          <Input
            name="mobile"
            maxLength={10}
            minLength={10}
            onChange={(e) => setMobile(e.target.value)}
            placeholder='Celular'
          />
        </Form.Field>
        <center>
          <Button color="blue" type='submit' onClick={sendDataToApi}>Guardar</Button>
          <Link to="/login">
            <Button>Cancelar</Button>
          </Link>
        </center>
        {error && <div style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</div>}
      </Form>
    </div>
  );
}
