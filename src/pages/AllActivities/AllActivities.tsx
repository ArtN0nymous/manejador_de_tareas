import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState,useContext } from "react";
import PokemonsContext from "../../data/pokemons-context";
// estilos personalizados
import classes from './allActivities.module.css';
const AllPokemons: React.FC=()=>{
    const activitiesCtxt=useContext(PokemonsContext);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>All Pokemons</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {
                        activitiesCtxt.pokemons.map(item=>(
                            <IonRow key={item.id}>
                                <IonCol className="ion-text-center">
                                    <IonCard>
                                        <img src={item.imgUrl} alt='pokemon'/>
                                        <IonCardHeader>
                                            <IonCardTitle>{item.name}</IonCardTitle>
                                            <IonCardSubtitle>Experiencia base: {item.base_experience}</IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>Tipo: {item.type}</p>
                                            <IonItem lines='none'>
                                                <IonButton fill="clear" className={classes.FullWidth}>Detalles</IonButton>
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
export default AllPokemons;