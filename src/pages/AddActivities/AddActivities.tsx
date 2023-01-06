import { IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
const AddActivities:React.FC=()=>{
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Add activities works!</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>Add activitiers works!</IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    )
}
export default AddActivities;