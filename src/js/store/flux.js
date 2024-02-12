const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [

			],
			favorites: []
		},
		actions: {
			
			getCharacters: async () => {
                const API_URL = "https://www.swapi.tech/api/people";
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data.results);
                setStore({characters:data.results})
            },
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			getCharacters: async () => {
                const API_URL = "https://www.swapi.tech/api/people";
                const response = await fetch(API_URL);
                const data = await response.json();
                console.log(data.results);
                setStore({ characters: data.results });
            },
            addToFavorites: (character) => {
                const store = getStore();
                const favorites = [...store.favorites, character];
                setStore({ favorites });
            },
            removeFromFavorites: (character) => {
                const store = getStore();
                const updatedFavorites = store.favorites.filter((fav) => fav.uid !== character.uid);
                setStore({ favorites: updatedFavorites });
            }
		}
	};
};

export default getState;