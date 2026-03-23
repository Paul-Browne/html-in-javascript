export default (pathToComponent, options = {}) => {
    console.log(pathToComponent)
    return import(pathToComponent).then(M => M.default(options))
}