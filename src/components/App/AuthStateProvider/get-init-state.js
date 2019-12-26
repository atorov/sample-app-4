import initState from './init-state'
import loadState from './load-state'

function getInitState() {
    const savedState = loadState(/* 'sample-app-4' */)

    return { ...initState, ...savedState }
}

export default getInitState
