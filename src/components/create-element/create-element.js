const createElement = ({tag="div",parent="",inner="",css="",src=""} = {}) => {
    const element = document.createElement(tag);
    console.log(inner)
    if (css) element.classList = css;
    if (src) element.src = src;
    if (inner) {
        if (typeof inner === "string") element.textContent = inner;
        else {element.appendChild(inner);}
    }
    if (parent){
        if (typeof parent === 'string' || parent instanceof String){
            document.querySelector(parent).appendChild(element);
        }
        else {
            parent.appendChild(element);
        }
    }
    return element
}

export default createElement;