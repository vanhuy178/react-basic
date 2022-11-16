# THREE CORE CONCEPTS

- Example: 

Cake shop:
    - Entities:
        - Shop: stores cakes on a shelf
        - Shopkeeper: at the font of the store
        - Customer: at the store entrance
    - Activites
        - Customer: buy a cake
        - Shopkeeper: remove a cake from the shelf
        - Receipt to keep track

CakeShop                    Redux               Purpose
Shop                        Store               Holds the state of your app
Intension to BUY_CAKE       Action              Describes what happened
Shopkeeper                  Reducer             Ties the store and actions together


- A store that holds the state of your apps
- An action that describes the changes in the state of the app
- A reducer which actually carries out the state transition depending on the action


# THREE PRINCIPLES

1. First principle
    - The state of your whole application is stored in an object tree within a single store, maintain our app state in a single object which would be managed by the Redux store
        
    - Ex: 
        - CakeShop: let's assume we are tracking the number of cakes on the shelf
            {
                numberOfCakes: 0
            }
2. Second principle 
    - The only way to change the state is to emit an action, an object describing what happened, to update the state of your app, you need to let Redux know about what with an action, Not allowed to directly update the state object

    - Ex: 
        - CakeShop: let's the shoppkeeper know about our action BUY_CAKE
        {
            type: BUY_CAKE
        }

3. Third principle: 
    - To specify how the state tree is transformed by actions, your write pure reducers
    - Reducer - (prevState, action) => newState

    - Ex:
        - Reducer is the shopkeeper:
            const reducer = (state, action) => {
                switch(action.type) {
                    case BUY_CAKE: 
                        return {numberOfCakes: state.numberOfCakes -1}
                }
            }


# ACTIONS AND ACTION CONTRUCTORS

# STORE
- One store for the entire app
    - Responsibility
        - Hold app state
        - Allows access to state via getState()
        - Allows state to be updated via dispatch(action)
        - Registers listener via subcribe(listener)
        - Handles unregistering of listeners vias the function returned by subcribe(listener)
