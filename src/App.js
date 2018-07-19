import React from "react";
import { DatePicker,Input } from 'antd';
class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'hello Mr Right',
            lastName:'Mr'
        }
    }
    componentWillMount(){
        console.log("THIS IS COMONENTWILLMOUNT");
    }
    componentDidMount(){
        console.log("THIS IS COMONENTDIDMOUNT");
    }
    componentWillReceiveProps(){
        console.log("THIS IS componentWillReceiveProps");
    }
    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        
    }
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    render (){
        return <div>
                    <h1 onClick={()=>{
                        this.setState({firstName:'HI'})
                    }}>{this.state.firstName}</h1>
                    <h3>{this.state.lastName}</h3>
                    <DatePicker></DatePicker>
                    <Input style={{width:200,backgroundColor:'#f40'}}/>
                </div>
    }
}
export default App;