import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import Read from "../components/read/read";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Usuarios</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light">
        <div className="ion-text-center">
          <h3>Lista de Usuarios</h3>
        </div>
        <Read />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
