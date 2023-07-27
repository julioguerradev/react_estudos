const root = document.querySelector('#root')

const t1 = React.createElement('h1', {id: 'Título Principal'}, 'Hello World');
const t2 = React.createElement('h4', {id: 'Título Principal'}, 'SubTítulo');

const headLine = React.createElement('div', null, t1, t2)

// O que será renderizado e onde será renderizado
ReactDOM.render(headLine, root)
