import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Pokemon } from "../../data/pokemons-context";
//PARA RECIBIR PARAMETROS DESDE OTRAS RUTAS
interface Props  extends RouteComponentProps<{
    name:string;
}>{}
const PokemonDetails:React.FC<Props>=({match})=>{
    const [state,setState]=useState<Pokemon>({
        id:'',
        name:'',
        base_experience:0,
        type:'',
        imgUrl:'',
        weight:0
    });
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/'+match.params.name).then(result=>result.json()).then(data=>{
            fetch(data.forms[0].url).then(result=>result.json()).then(imgData=>{
                let tipo='';
                for(var i=0;i<data.types.length;i++){
                    tipo+=" "+data.types[i].type.name;
                }
                let pokemon:Pokemon={
                    id:data.id,
                    base_experience:data.base_experience,
                    name:data.name,
                    type:tipo,
                    weight:data.weight,
                    imgUrl:imgData.sprites.front_default
                }
                setState(pokemon);
            });
        });
    },[match.params.name]);
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>Detalles</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonRow>
                    <IonCol className="ion-text-center">
                    <IonCard>
                        <img src={state.imgUrl} alt='pokemon'/>
                        <IonCardHeader>
                            <IonCardTitle>{state.name}</IonCardTitle>
                            <IonCardSubtitle>Experiencia base: {state.base_experience}</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Tipo: {state.type}</p>
                        </IonCardContent>
                    </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
export default PokemonDetails;