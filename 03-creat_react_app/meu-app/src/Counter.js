import React from "react";

// Métodos de ciclo de vida não exitem em uma função somente em uma class

class Counter extends React.Component{

    constructor(props){
        super(props)

        this.state = {count: this.props.count}
        this.add = this.add.bind(this)
    }


    add() {
        // Forma errada
        // this.setState({count: this.state.count + 1})

        // Forma correta
        // Voltar e questionar o pq após um único clique executa duas vezes um console.log
        this.setState((state)=>{return{count: state.count + 1}}, () => {
            console.log(this.state)
            
        })
    }

    // Método só será chamado após o componente ser apresentado na tela
    componentDidMount() {
        document.title = this.state.count
        this.setState(JSON.parse(localStorage.getItem('state')))
    }

    // Método só será chamado se o componente for atualizado
    componentDidUpdate() {
        document.title = this.state.count
        localStorage.setItem('state', JSON.stringify(this.state))
    }

    // Método chamado quando o componente for removido da tela
    componentWillUnmount(){
        
    }

    // Meu componente deve ser atualizado ?
    // shouldComponentUpdate() {
    //     return false;
    // }

    render() {
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.add}>add</button>
            </div>
        )
    }
}

export default Counter;
