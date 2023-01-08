import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import AllActivities from './pages/AllActivities/Pokedex';
import AddActivities from './pages/AddActivities/AddActivities';
import {bodyOutline,addCircle, playCircle, bookmarks} from 'ionicons/icons';
import PokemonsContextProvider from './data/PokemonsContextProvider';
import AllPokemons from './pages/AllPokemons/AllPokemons';
import PokemonDetails from './pages/PokemonDetails/PokemonDetails';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side='start' contentId='scheduleAppM1'>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle>
              Pokemons
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
          <IonMenuToggle>
              <IonItem routerLink='/all-activities' routerDirection='none' lines='none'>
                <IonIcon color='medium' slot='start' icon={bookmarks}/>
                <IonLabel>Pokedex</IonLabel>
              </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
                <IonItem routerLink='/add-activities' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={addCircle}/>
                  <IonLabel>Add activities</IonLabel>
                </IonItem>
            </IonMenuToggle>
            <IonMenuToggle>
                <IonItem routerLink='/all-pokemons' routerDirection='none' lines='none'>
                  <IonIcon color='medium' slot='start' icon={playCircle}/>
                  <IonLabel>Pokemons</IonLabel>
                </IonItem>
            </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      {/* se creó un contexto y se envolvió la funcionalidad de la aplicacion con este mismo */}
      <PokemonsContextProvider>
        <IonRouterOutlet id='scheduleAppM1'>
            <Route path="/all-activities" component={AllActivities}/>
            <Route path="/add-activities" component={AddActivities}/>
            <Route path="/all-pokemons" component={AllPokemons}/>
            <Route path="/PokemonDetails/:name" component={PokemonDetails}/>
            <Redirect to="/all-activities"/>
        </IonRouterOutlet>
      </PokemonsContextProvider>
    </IonReactRouter>
  </IonApp>
);

export default App;
