function saveState(data, itemKey = APP_NAME) {
    try {
        const serialized = JSON.stringify(data)
        sessionStorage.setItem(itemKey, serialized)
    }
    catch (reason) {
        console.error('::: [save auth state] reason:', reason)
    }
}

export default saveState
