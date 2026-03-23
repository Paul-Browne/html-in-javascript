let i = 0;

export const STORE = {}

export default (initialValue) => {
    i++;
    const key = `µ${i}`
    STORE[key] = initialValue
    return [
        key,    // key
        STORE[key], // current value
        setValue => STORE[key] = setValue // set value
    ]
}

export const key = () => `µ${i++}`

export const store = {}