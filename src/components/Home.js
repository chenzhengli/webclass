import React from "react";
import { DatePicker,Input } from 'antd';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'hello Mr Right',
            lastName:'Mr'
        }
    }
    
    render (){
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
                
               
    }
}
export default Home;