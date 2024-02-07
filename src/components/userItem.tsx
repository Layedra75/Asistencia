import React from 'react';
import { IonItem, IonLabel } from '@ionic/react';
import { User } from './../models/user.model';

const UserItem : React.FC <{user: User}>  = ({user}) => {
    return (
        //<>
        <IonItem>
            <IonLabel>
                <h1>{user.id}</h1>
                <h2>{user.name}</h2>
                <h2>{user.username}</h2>
                <p>{user.email}</p>
            </IonLabel>
        </IonItem>
    );
}

export default UserItem;