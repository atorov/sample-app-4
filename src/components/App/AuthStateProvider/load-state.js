function loadState(itemKey = APP_NAME) {
    let saved = {}
    try {
        const serialized = sessionStorage.getItem(itemKey)
        if (serialized) {
            saved = JSON.parse(serialized)
        }
    }
    catch (reason) {
        console.error('::: [load auth state] reason:', reason)
    }

    return saved
}

export default loadState
