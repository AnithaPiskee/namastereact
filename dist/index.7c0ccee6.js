/**
 <div id=parent1> 
    <div id=child1> 
        <h1>heading1</h1>
        <h2>heading2</h2>
    </div>
    <div id=child2> 
        <h1>heading1</h1>
        <h2>heading2</h2>
    </div>
 </div>
 * 
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "heading1"),
        React.createElement("h2", {}, "heading2")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "heading1"),
        React.createElement("h2", {}, "heading2")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
