import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useState,useContext, useEffect } from "react";
import PokemonsContext from "../../data/pokemons-context";
// estilos personalizados
import classes from './allActivities.module.css';
const AllPokemons: React.FC=()=>{
    const pokemonsCtxt=useContext(PokemonsContext);
    const [state,setState]=useState([{
        id:'',
        type:'',
        imgUrl:'',
        base_experience:'',
        name:''
    }]);
    useEffect(()=>{
        let data = pokemonsCtxt.pokemons;
        let unicos:any=[];
        //recorre el arreglo para ver elemento por elemento
        for(var i = 0; i < data.length; i++) {
            //tomanos el elemento en el indice i
            const pokemon = data[i];
            //inicializamos un estado como no duplicado en este caso falso
            let esDuplicado = false;
            //recorremos el arreglo donde no habrá repetidos
            for(var j = 0; j < unicos.length; j++) {
                //comparamos si el elemento en el indice j del arreglo nuevo tiene un id igual
                // al elemento de nuestro array principal, si su id es igual está repetido
              if (unicos[j].id === pokemon.id) {
                //en caso de ser un id igual, indicamos el estado como repetido
                esDuplicado = true;
                break;
              }
            }
            //validamos que nuestra variable "esDuplicado" sea falsa e insertamos el
            // elemento en nuestro nuevo arreglo si no es duplicado
            if (!esDuplicado) {
              unicos.push(pokemon);
            }
        }
        setState(unicos);
    },[pokemonsCtxt]);
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
                        state.map(item=>(
                            <IonRow key={Math.random()}>
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