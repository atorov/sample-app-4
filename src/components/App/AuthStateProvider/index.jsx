import * as React from 'react'
import PropTypes from 'prop-types'

import checkAuth from './check-auth'
import getInitState from './get-init-state'
import reducer from './reducer'
import saveState from './save-state'

const initState = getInitState(APP_NAME)

const AuthDispatchContext = React.createContext(() => { })
AuthDispatchContext.displayName = 'AuthDispatchContext'

const AuthStateContext = React.createContext(initState)
AuthStateContext.displayName = 'AuthStateContext'

function useAuthDispatch() {
    const context = React.useContext(AuthDispatchContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function useAuthState() {
    const context = React.useContext(AuthStateContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function useAuth() {
    const authDispatch = useAuthDispatch()
    const authState = useAuthState()

    const auth = React.useCallback((goAuth = true, data = {}) => {
        if (goAuth === true) {
            authDispatch({
                type: ':authState/PATCH:',
                payload: data,
            })
        }
        else {
            authDispatch({ type: ':authState/INIT:' })
        }
    }, [authDispatch])

    return [
        checkAuth(authState),
        auth,
    ]
}

function AuthStateProvider({ children }) {
    // Use state ---------------------------------------------------------------
    const [state, dispatch] = React.useReducer(reducer, initState)

    // Use effect --------------------------------------------------------------
    React.useEffect(() => {
        saveState(state/* , 'sample-app-4' */)
    }, [state])

    // Main renderer ===========================================================
    return (
        <AuthDispatchContext.Provider value={dispatch}>
            <AuthStateContext.Provider value={state}>
                {children}
            </AuthStateContext.Provider>
        </AuthDispatchContext.Provider>
    )
}

AuthStateProvider.propTypes = {
    children: PropTypes.any.isRequired,
}

export { useAuthState, useAuthDispatch, useAuth }

export default AuthStateProvider
