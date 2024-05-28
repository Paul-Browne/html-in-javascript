import htjs from 'html-in-javascript'

console.log("will run once!!")

export default _this => {
    const {div, p, h1} = htjs
    const content = div(
        h1("Hello World"),
        p("This is a modal"),
        p(_this.dataset.foo)
    )
    // const container = document.createElement('SECTION')
    // document.body.appendChild(container)
    // container.outerHTML = content;

    document.getElementById(_this.dataset.formodal).innerHTML = content

}
