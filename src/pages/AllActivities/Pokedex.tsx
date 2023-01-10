import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonSearchbar, IonTitle, IonToolbar } from "@ionic/react";
import { search } from "ionicons/icons";
import React, { useState,useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import PokemonsContext from "../../data/pokemons-context";
// estilos personalizados
import classes from './pokedex.module.css';
const AllPokemons: React.FC=()=>{
    const pokemonsCtxt=useContext(PokemonsContext);
    //UTILIZAMOS HISTORY PARA ACCEDER A LAS RUTAS (se debe importar)
    const history = useHistory();
    const [state,setState]=useState([{
        id:'',
        type:'',
        imgUrl:'https://www.senacrs.com.br/assets/images/default-image.png',
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
    const [name,setName]=useState('');
    //recibimos el evento del input y obtenemos el valor
    const validate = (ev: Event) => {
        const value = (ev.target as HTMLInputElement).value;
        setName(value);
      };
    function Search(){
        if(name!==""){
            fetch("https://pokeapi.co/api/v2/pokemon/"+name)
            .then(result=>result.json()).then(data=>{
                history.push("/PokemonDetails/"+name);
            }).catch((error)=>{
                alert("Pokemon no encontrado");
            });
        }
    }
    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start">
                        <IonMenuButton/>
                    </IonButton>
                    <IonSearchbar onIonInput={(event)=>validate(event)}/>
                    <IonButton slot="end" onClick={()=>Search()}>
                        <IonIcon icon={search}/>
                    </IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {
                        state.map(item=>(
                            <IonRow key={Math.random()}>
                                <IonCol className="ion-text-center">
                                    <IonCard routerLink={"/PokemonDetails/"+item.name}>
                                        <img src={item.imgUrl} alt='pokemon'/>
                                        <IonCardHeader>
                                            <IonCardTitle>{item.name}</IonCardTitle>
                                        </IonCardHeader>
                                        <IonCardContent>
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