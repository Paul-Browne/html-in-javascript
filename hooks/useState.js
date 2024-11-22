let i = 0;

export default () => {
    const r = `µ${i}`;
    i++;
    return [
        r,
        v => `${r} = ${v}`
    ]
}