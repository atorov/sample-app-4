import delay from '../utils/delay'

(async () => {
    await delay(2000)

    // --------------------
    // Class private fields
    // --------------------
    // class Starship {
    //     static #STATIC_FIELD = 'something'

    //     #message = 'Mayday! Mayday!'

    //     broadcast() {
    //         console.log('### es2020/private fields:', this.#message)
    //     }
    // }

    // console.log('### es2020/private static field:', myShip.#STATIC_FIELD)
    // const myShip = new Starship()

    // myShip.broadcast()

    // ----------------------------------------
    // Optional chaining and nullish coalescing
    // ----------------------------------------
    const myObj = {
        a: {
            b: 0,
        },
    }

    console.log('### es2020/optional chaining:', myObj?.a?.b ?? 'We have an `undefined` value here!')
    console.log('### es2020/optional chaining:', myObj?.c ?? 'We have an `undefined` value here!');

    // ---------------
    // Dynamic imports
    // ---------------
    const { add } = await import('./calc')
    console.log('### es2020/dynamic imports:', add(12, 30))

    // ------
    // BigInt
    // ------
    const maxFloat = Number.MAX_VALUE
    console.log('### es2020/big int:', maxFloat)

    const maxInt = Number.MAX_SAFE_INTEGER
    console.log('### es2020/big int:', maxInt)

    // const reallyBigInt = 123_456_789_012_345_678_901_234_567_890n
    const reallyBigInt = 123456789012345678901234567890n
    console.log('### es2020/big int:', reallyBigInt)
})()
