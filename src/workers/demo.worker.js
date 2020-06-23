// TODO: https://github.com/airbnb/javascript/issues/1632
// eslint-disable-next-line no-restricted-globals
const ctx = self

ctx.onmessage = ({ data: rxData = {} } = {}) => {
    const txData = {
        message: `Received a ${rxData?.message} and sending a Pong!`,
    }
    setTimeout(() => ctx.postMessage(txData), 1550)
}
