
let heading = React.createElement('h1',{id:"heading"},'Hi iam h1 tag')
let root = ReactDOM.createRoot(document.getElementById('root'));
let heading2= React.createElement('h2',{id:"heading1"},'Hi i am h2 tag');




const parent = React.createElement('div',{},[heading,heading2]);
root.render(parent);