import React from 'react';
import {
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';

import './Tab1.css';
import Login from '../components/login/login';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Registro de Asistencia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" color="light">
        <IonCard className="ion-text-center" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <img src="/assets/images/asistencia.jpg" alt="Asistencia" className="small-image" />
          <IonCardContent>
            <Login />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
