import initState from './init-state'
import loadState from './load-state'

function getInitState(itemKey = APP_NAME) {
    const savedState = loadState(itemKey)

    return { ...initState, ...savedState }
}

export default getInitState
