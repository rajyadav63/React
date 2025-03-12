
function mainContainer(reactElementt, container) {
    document.createElement(reactElementt.type)
}
const reactElementt = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blanck'
    },
    childeen: "Click me to visit google"
}

const mainContainer = document.querySelector('#root')

customRender(reactElementt, mainContainer);
