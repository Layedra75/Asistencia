import React from 'react';
import { IonContent, IonHeader, IonPage, IonCard, IonCardContent } from '@ionic/react';
import Report from "../components/read/report";
import Attendant from '../components/register/attendant';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader />
      <IonContent fullscreen color="medium" className="ion-padding">
        <IonCard className="ion-text-center" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
          <IonCardContent>
            <Attendant />
            <Report />
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
