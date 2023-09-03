/*const heading= React.createElement("h1",{id:"heading"},"hello world from react.");
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)*/


const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child"},[
    React.createElement("h1",{},"I am h1 tag"),
    React.createElement("h2",{},"I am h2 tag")
    ]),
    React.createElement("div",{id:"child2"},[
        React.createElement("h1",{},"I am h1 tag from c2"),
        React.createElement("h2",{},"I am h2 tag from c2")
        ]),
    ]);

const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)

console.log(parent)




