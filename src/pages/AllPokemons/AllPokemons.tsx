import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useContext } from "react";
import PokemonsContext from "../../data/pokemons-context";
import classes from './AllPokemons.module.css';
const AllPokemons:React.FC=()=>{
    const pokemonsCtx=useContext(PokemonsContext);
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
                        pokemonsCtx.pokemons.map(item=>(
                            <IonRow>
                                <IonCol class="ion-text-center">
                                    <IonCard>
                                        <img src={item.imgUrl} alt='Pokemon'/>
                                        <IonCardHeader>
                                            <IonCardTitle>{item.name}</IonCardTitle>
                                            <IonCardSubtitle>{item.base_experience}</IonCardSubtitle>
                                        </IonCardHeader>
                                        <IonCardContent>
                                            <p>{item.type}</p>
                                            <IonItem lines="none">
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
    )
}
export default AllPokemons;