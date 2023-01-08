import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react";
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
    const [details,setDetails]=useState({
        id:'',
        base_experience:'',
        name:'',
        weight:0,
        type:'',
        imgUrl:'',
        description:'',
        stats:{
            hp:0,
            speed:0,
            defense:0,
            especial_defense:0,
            attack:0,
            special_attck:0
        },
        abilities:[],
    })
    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon/'+match.params.name).then(result=>result.json()).then(data=>{
            fetch(data.forms[0].url).then(result=>result.json()).then(imgData=>{
                let tipo='';
                for(var i=0;i<data.types.length;i++){
                    tipo+=" "+data.types[i].type.name;
                }
                let abilities=data.abilities.map((item:any)=>{
                    return(
                        <p key={Math.random()}>{item.ability.name}</p>
                    )
                });
                fetch(data.species.url).then(result=>result.json()).then(desc=>{
                    let description = '';
                    for (let i = 0; i < desc.flavor_text_entries.length; i++) {
                        const element = desc.flavor_text_entries[i];
                        if(element.language.name==='es'){
                            description=element.flavor_text;
                            break;
                        }
                    }
                    setDetails({
                        id:data.id,
                        base_experience:data.base_experience,
                        name:data.name,
                        type:tipo,
                        weight:data.weight,
                        imgUrl:imgData.sprites.front_default,
                        description:description,
                        stats:{
                            hp:data.stats[0].base_stat,
                            speed:data.stats[5].base_stat,
                            defense:data.stats[2].base_stat,
                            especial_defense:data.stats[4].base_stat,
                            attack:data.stats[1].base_stat,
                            special_attck:data.stats[3].base_stat
                        },
                        abilities:abilities,
                    });
                });
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
                        <img src={details.imgUrl} alt='pokemon' style={{width:300,height:300}}/>
                        <IonCardHeader>
                            <IonCardTitle>{details.name}</IonCardTitle>
                            <IonCardSubtitle>Experiencia base: {details.base_experience}</IonCardSubtitle>
                            <div className="ion-text-justify">
                                <IonText>{details.description}</IonText>
                            </div>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Tipo: {details.type}</p>
                            <p>Peso: {details.weight}</p>
                            <h1>Stats:</h1>
                            <p>HP: {details.stats.hp}</p>
                            <p>Defense: {details.stats.defense}</p>
                            <p>Special Defense: {details.stats.especial_defense}</p>
                            <p>Attack: {details.stats.attack}</p>
                            <p>Special Attack: {details.stats.special_attck}</p>
                            <p>Speed: {details.stats.speed}</p>
                            <h1>Abilities:</h1>
                            {details.abilities}
                        </IonCardContent>
                    </IonCard>
                    </IonCol>
                </IonRow>
            </IonContent>
        </IonPage>
    )
}
export default PokemonDetails;