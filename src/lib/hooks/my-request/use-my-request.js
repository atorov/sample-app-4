import * as React from 'react'

import { useAuthDispatch, useAuthState } from '../../../components/App/AuthStateProvider'

import request from '../../api/request'

function useMyRequest() {
    // Use context -------------------------------------------------------------
    const authDispatch = useAuthDispatch()
    const authState = useAuthState()

    // Use callback  -----------------------------------------------------------
    const myRequest = React.useCallback((resource, init, custom = {}) => request(resource, init, {
        dispatch: authDispatch,
        state: authState,
        ...custom,
    }), [authDispatch, authState])

    // -------------------------------------------------------------------------
    return myRequest
}

export default useMyRequest
