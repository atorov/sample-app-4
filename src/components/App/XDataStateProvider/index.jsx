import * as React from 'react'
import PropTypes from 'prop-types'

import initState from './init-state'
import reducer from './reducer'

const XDataDispatchContext = React.createContext(() => { })
XDataDispatchContext.displayName = 'XDataDispatchContext'

const XDataStateContext = React.createContext(initState)
XDataStateContext.displayName = 'XDataStateContext'

function useXDataDispatch() {
    const context = React.useContext(XDataDispatchContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function useXDataState() {
    const context = React.useContext(XDataStateContext)

    // if (context === undefined) {
    //     throw new Error('Must be used within a Provider')
    // }

    return context
}

function XDataStateProvider({ children }) {
    // Use state ---------------------------------------------------------------
    const [state, dispatch] = React.useReducer(reducer, initState)

    // Main renderer ===========================================================
    return (
        <XDataDispatchContext.Provider value={dispatch}>
            <XDataStateContext.Provider value={state}>
                {children}
            </XDataStateContext.Provider>
        </XDataDispatchContext.Provider>
    )
}

XDataStateProvider.propTypes = {
    children: PropTypes.any.isRequired,
}

export { useXDataState, useXDataDispatch }

export default XDataStateProvider
