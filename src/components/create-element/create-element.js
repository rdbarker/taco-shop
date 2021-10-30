const createElement = (tag,parentSelector="body",cssClasses="",source="") => {
    const element = document.createElement(tag);
    if (cssClasses) element.classList = cssClasses;
    if (source) element.src = source;
    const parent = document.querySelector(parentSelector);
    parent.appendChild(element);
    return element
}

export default createElement;