const uid = ({
    prefix = 'i', 
    length = 7
} = {}) => {
    prefix += Math.random().toString(36).substring(2);
    if(prefix.length < length) return uid({prefix, length});
    return prefix.slice(0, 7);
}

export default uid