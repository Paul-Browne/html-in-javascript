export default el => {
    const computedFontSize = parseFloat(window.getComputedStyle(el).fontSize);
    el.style.fontSize = (computedFontSize * 1.1) + "px"
}