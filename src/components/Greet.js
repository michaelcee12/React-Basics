import react from 'react'

/*function Greet(){
    return <h1>Welcome to my First component function</h1>
}*/

const Greet = props => {
    console.log(props)
return <h1 >Welcome to my First component function {props.name}</h1>
}


export default Greet