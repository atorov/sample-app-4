import React from 'react'

import {
    Redirect,
    // Route,
    Switch,
    // useHistory,
} from 'react-router-dom'

// import ErrorBoundary from '../../widgets/ErrorBoundary'

// import Fallback from './Fallback'
// import PrivateRoute from './PrivateRoute'

// const CDashboard = lazy(() => import('../../Dashboard'))
// const CHome = lazy(() => import('../../Home'))
// const CSignIn = lazy(() => import('../../SignIn'))

function Routes() {
    // Use ref -----------------------------------------------------------------
    // const unlisten = useRef()

    // Use React Router hook ---------------------------------------------------
    // const history = useHistory()

    // Use ref -----------------------------------------------------------------
    // useEffect(() => {
    //     unlisten.current = history.listen(() => window.scrollTo(0, 0))
    //     return () => unlisten.current()
    // }, [history])

    // Main renderer ===========================================================
    return (
        // <ErrorBoundary>
        // <React.Suspense fallback={<Fallback />}>
        <Switch>
            {/* <Route path=["/", "/home"] exact>
                <Home />
            </Route> */}

            {/* <Route path="/" exact>
                <CDashboard />
            </Route> */}

            {/* <Route path="/sign-in" exact>
                <CSignIn />
            </Route> */}

            {/* <PrivateRoute path="/private" exact PrivateComponent={...} /> */}

            <Redirect to="/" />
        </Switch>
        // </React.Suspense>
        // </ErrorBoundary>
    )
}

export default Routes
