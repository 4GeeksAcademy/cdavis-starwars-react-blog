import React, { useState, useEffect } from "react";
import getState from "./flux.js";

// Crear el contexto global
export const Context = React.createContext(null);

// Esta función inyecta el almacenamiento global en cualquier vista/componente donde quieras usarlo.
const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    // Esto se pasará como el valor del contexto.
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updatedStore =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions }
          })
      })
    );

    useEffect(() => {
      /**
       * EDITA ESTO
       * Esta función es equivalente a "window.onLoad", solo se ejecuta una vez en toda la vida útil de la aplicación.
       * Deberías hacer tus solicitudes ajax o fetch api aquí. No uses setState() para guardar datos en el
       * almacenamiento, en su lugar usa acciones, como esto:
       *
       * state.actions.loadSomeData(); <---- llamando a esta función desde las acciones de flux.js
       *
       **/
    }, []);

    // El valor inicial del contexto ya no es nulo, sino el estado actual de este componente,
    // el contexto ahora tendrá funciones getStore, getActions y setStore disponibles, porque fueron declaradas
    // en el estado de este componente.
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };

  return StoreWrapper;
};

export default injectContext;
