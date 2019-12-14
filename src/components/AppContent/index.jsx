import React from 'react'

import { BrowserRouter } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import LinearProgress from '@material-ui/core/LinearProgress'

// import useMyRequest from '../../../lib/api/hooks/my-request/use-my-request'

// import Routes from '../Routes'
import TopBar from '../TopBar'

import { AppStateContext } from '../App/AppStateProvider'
import {
    XDataDispatchContext,
    // XDataStateContext,
} from '../App/XDataStateProvider'

const useStyles = makeStyles((theme) => ({
    appMain: ({ topBarHeight }) => ({
        flexGrow: 1,
        marginTop: topBarHeight,
        paddingTop: 0,
        paddingRight: theme.spacing(3),
        paddingBottom: theme.spacing(8),
        paddingLeft: theme.spacing(3),
    }),
    appWrapper: {
        display: 'flex',
        flexDirection: 'row',
    },
}))

function AppContent() {
    // Use context -------------------------------------------------------------
    const appState = React.useContext(AppStateContext)

    const xdataDispatch = React.useContext(XDataDispatchContext)
    // const xdataState = React.useContext(XDataStateContext)

    // Use Material UI hook ----------------------------------------------------
    const classes = useStyles({ topBarHeight: appState.ui.topBar.height })

    // Use custom hook ---------------------------------------------------------
    // const myRequest = useMyRequest()

    // Use state ---------------------------------------------------------------
    const [status, setStatus] = React.useState(':GET_STARTED:') // ':GET_STARTED:' | ':PENDING:' | ':ERROR:' | ':READY:'

    // Use effect --------------------------------------------------------------
    // Initialize
    React.useEffect(() => {
        if (status === ':GET_STARTED:') {
            setStatus(':PENDING:')

            ; (async () => {
                xdataDispatch({ type: ':xdataState/INIT:' })

                // let xDataResponse = null
                // try {
                //     xDataResponse = await myRequest.current('/sample-app/xdata/index.json')
                // }
                // catch (reason) {
                //     console.error('::: Gateway request error!')
                // setStatus(':ERROR:')
                //     throw reason
                // }

                // if (xDataResponse) {
                //     xDataDispatch({
                //         type: ':xdataState/SET_DATA:',
                //         payload: xDataResponse,
                //     })
                //     xDataDispatch({
                //         type: ':xdataState/SET_STATUS:',
                //         payload: ':READY:',
                //     })
                // }

                // setStatus(':READY:')
            })()
        }
    }, [status, xdataDispatch])

    // Main renderer ===========================================================
    return (
        <BrowserRouter basename="/sample-app">
            <div className={classes.appWrapper}>
                <TopBar />
                <main className={classes.appMain}>
                    {status === ':READY:' ? null /* <Routes /> */ : <LinearProgress />}
                </main>
            </div>
        </BrowserRouter>
    )
}

export default AppContent
