import * as React from 'react'
import PropTypes from 'prop-types'

import initState from './init-state'
import reducer from './reducer'

const AppDispatchContext = React.createContext(() => { })
AppDispatchContext.displayName = 'AppDispatchContext'

const AppStateContext = React.createContext(initState)
AppStateContext.displayName = 'AppStateContext'

function useAppDispatch() {
    const context = React.useContext(AppDispatchContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function useAppState() {
    const context = React.useContext(AppStateContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function AppStateProvider({ children }) {
    // Use state ---------------------------------------------------------------
    const [state, dispatch] = React.useReducer(reducer, initState)

    // Main renderer ===========================================================
    return (
        <AppDispatchContext.Provider value={dispatch}>
            <AppStateContext.Provider value={state}>
                {children}
            </AppStateContext.Provider>
        </AppDispatchContext.Provider>
    )
}

AppStateProvider.propTypes = {
    children: PropTypes.any.isRequired,
}

export { useAppState, useAppDispatch }

export default AppStateProvider
