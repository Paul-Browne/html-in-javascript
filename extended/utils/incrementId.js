const incId = () => {
    incId.count = incId.count || 0;
    incId.count++;
    return `i${incId.count}`;
}

export default incId