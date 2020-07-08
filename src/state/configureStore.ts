import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './rootReducer'
import thunk from 'redux-thunk'

const configureStore = (initialState?: {}) => {
    const middleware = [thunk]
    const createStoreWithMiddleware = compose(
        applyMiddleware(...middleware)
    )(createStore);

    const store = createStoreWithMiddleware(reducers, initialState)
    return store
}

export default configureStore