import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState,useContext } from "react";
import ActivitiesContext from "../../data/activities-context";
// estilos personalizados
import classes from './allActivities.module.css';
const AllActivities: React.FC=()=>{
    
    const pokemonList =()=>{
        return(<></>)
    }
    const activitiesCtxt=useContext(ActivitiesContext);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>All activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {
                        activitiesCtxt.activities.map(item=>(
                            <IonRow key={item.id}>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <img src={item.imageUrl} alt='Activity'/>
                                        <IonCardHeader>
                                            <IonCardTitle>{item.hour}</IonCardTitle>
                                            <IonCardSubtitle>{item.title}</IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{item.description}</p>
                                            <IonItem lines='none'>
                                                <IonButton fill="clear" className={classes.FullWidth}>Complete Activity</IonButton>
                                            </IonItem>
                                        </IonCardContent>
                                    </IonCard>
                                </IonCol>
                            </IonRow>
                        ))
                    }
                </IonGrid>
            </IonContent>
        </IonPage>
    );
}
export default AllActivities;