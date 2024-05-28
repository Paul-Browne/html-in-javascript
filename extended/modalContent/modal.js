import htjs from 'html-in-javascript'
// runs once
console.log("hello world!!")

const modalClickListener = (params) => {
    console.log(params)

    const { div, p } = htjs

    return div(
        p("hello world"),
        p("hello again"),
    )

    // if (modalClickListener.attached) return;
    // modalClickListener.attached = true;
    // document.addEventListener('click', e => {
    //     console.log(e.target)
    // });
}

export default modalClickListener