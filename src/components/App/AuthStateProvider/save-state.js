function saveState(data, itemKey = 'smaple-app') {
    try {
        const serialized = JSON.stringify(data)
        sessionStorage.setItem(itemKey, serialized)
    }
    catch (reason) {
        console.error('::: [save auth state] reason:', reason)
    }
}

export default saveState
