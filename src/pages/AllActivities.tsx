import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
const AllActivities: React.FC=()=>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>All activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <h1>All activities works!</h1>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default AllActivities;