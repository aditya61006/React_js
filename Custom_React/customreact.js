function CustomRander(element, container)
{
   const DomElement = document.createElement(element.type)
   
    DomElement.innerHTML = element.children
    for(const prop in element.props){
        if(prop === 'children') continue;
        DomElement.setAttribute(prop ,element.props[prop])

    }
    container.appendChild(DomElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

CustomRander(reactElement, mainContainer)

 
