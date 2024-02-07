import React, { useEffect, useState } from "react";
import { IonGrid, IonRow, IonCol } from "@ionic/react";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { Card, Header, Loader, Segment } from "semantic-ui-react";

export default function Report() {
  const [apiData, setApiData] = useState([]);
  const [record, setRecord] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = (record) => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/http://40.75.120.104/apiweb/index.php/2?record=${record}`)
      .then(function (getData) {
        setApiData(getData.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    setRecord(localStorage.getItem("RECORD"));
  }, []);

  useEffect(() => {
    if (record) {
      fetchData(record);
    }
  }, [record]);

  return (
    <div>
      <br />
      <center>
        <Header as="h2">Registro de Asistencia</Header>
      </center>
      {loading ? (
        <Segment basic loading>
          <Loader active>Loading...</Loader>
        </Segment>
      ) : (
        <IonGrid>
          <IonRow>
            <IonCol sizeSm="3" className="ion-text-center">
              <Header as="h3">Fecha</Header>
            </IonCol>
            <IonCol sizeSm="9" className="ion-text-center">
              <Header as="h3">Hora</Header>
            </IonCol>
          </IonRow>
          {apiData.map((data) => (
            <IonRow key={data.record}>
              <IonCol sizeSm="6" className="ion-text-center">
                <Card>{data.date}</Card>
              </IonCol>
              <IonCol sizeSm="6" className="ion-text-center">
                <Card>{data.time}</Card>
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
      )}
    </div>
  );
}
