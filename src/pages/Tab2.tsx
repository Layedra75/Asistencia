import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react';

import './Tab2.css';
import Create from '../components/create/create';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle className="ion-text-center">Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="light" className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle className="ion-text-center">
              Registro de Asistencia Estudiantil
            </IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <Create />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
