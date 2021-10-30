const createElement = (tag,parentSelector="body",text="",cssClasses="",source="") => {
    const element = document.createElement(tag);
    if (cssClasses) element.classList = cssClasses;
    if (source) element.src = source;
    if (text) element.textContent = text;
    if (typeof parentSelector === 'string' || parentSelector instanceof String){
        const parent = document.querySelector(parentSelector);
        parent.appendChild(element);
    }
    else {
        parentSelector.appendChild(element);
    }
    return element
}

export default createElement;