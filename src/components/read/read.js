import React, { useEffect, useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel } from '@ionic/react';
import axios from 'axios';

const Read = () => {
  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/index.php/3";

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios.get(aux + myip)
      .then((getData) => {
        setApiData(getData.data);
      });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonLabel>ID</IonLabel>
          </IonCol>
          <IonCol size="4">
            <IonLabel>NOMBRES</IonLabel>
          </IonCol>
          <IonCol size="4">
            <IonLabel>APELLIDOS</IonLabel>
          </IonCol>
        </IonRow>
        {apiData.map((data) => (
          <IonCard key={data.record} style={{ marginBottom: '15px' }}>
            <IonCardContent>
              <IonRow>
                <IonCol size="4">
                  <IonLabel>{data.record}</IonLabel>
                </IonCol>
                <IonCol size="4">
                  <IonLabel>{data.names}</IonLabel>
                </IonCol>
                <IonCol size="4">
                  <IonLabel>{data.lastnames}</IonLabel>
                </IonCol>
              </IonRow>
            </IonCardContent>
          </IonCard>
        ))}
      </IonGrid>
    </div>
  );
};

export default Read;
