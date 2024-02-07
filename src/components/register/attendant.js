import React, { useState, useEffect } from "react";
import { Form, Button, Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

export default function Attendant() {
  const history = useHistory();
  const type = "2";

  const [date, setDate] = useState("");
  const [record, setRecord] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [imp1, setInput1] = useState("");
  const [imp2, setInput2] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setRecord(localStorage.getItem("RECORD"));
    setId(localStorage.getItem("ID"));
    setName(localStorage.getItem("NAME"));
    setLastName(localStorage.getItem("LASTNAME"));

    const today = new Date();
    const now = today.toLocaleString();
    setDate(now);

    setN1(generateRandomNumber());
    setN2(generateRandomNumber());
  }, []);

  const generateRandomNumber = () => Math.floor(Math.random() * 9);

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    const v1 = id.substring(n1 - 1, n1);
    const v2 = id.substring(n2 - 1, n2);

    if (!imp1 || !imp2) {
      setError("Por favor, complete ambos campos.");
      return;
    }

    if (v2 === imp2 && v1 === imp1) {
      axios.post(aux + myip, {
        type,
        record,
      })
      .then(() => {
        setN1(generateRandomNumber());
        setN2(generateRandomNumber());
        setInput1("");
        setInput2("");
        setError("");
        history.push("/login");
      });
    } else {
      setError("Los dígitos ingresados no coinciden con su cédula.");
    }
  };

  return (
    <div>
      <Form>
        <center>
          <h2>Bienvenido</h2>
          <br />
          <h2>{`${name} ${lastname}`}</h2>
        </center>
        <br />
        <br />
        <center>
          <h2>Fecha y Hora</h2>
          <h2>{date} </h2>
          <br />
          <h3>Para registrar su asistencia, ingrese los dígitos de su cédula</h3>
        </center>
        <br />
        <Form.Field>
          <label>{n1}</label>
          <input
            name="number1"
            type="number"
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Ingrese el dígito indicado"
          />
        </Form.Field>
        <Form.Field>
          <label>{n2}</label>
          <input
            name="number2"
            type="number"
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Ingrese el dígito indicado"
          />
        </Form.Field>
        <br />
        <center>
          <Button color="primary" type="submit" onClick={sendDataToApi}>
            Registrar
          </Button>
          <Link to="/login">
            <Button>Cancelar</Button>
          </Link>
        </center>
        {error && <Message color="red">{error}</Message>}
      </Form>
    </div>
  );
}
