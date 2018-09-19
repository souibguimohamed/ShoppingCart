import React,{Component} from 'react';  
import Item from './Item';
class MainContent extends Component{
    
    render(){
        const NumberOfItem = this.props.NumberOfItem;
        const handleAdding = this.props.handleAdding;
        return(
            <div className="MainContent">
                <Item Price={200}
                    NumberOfItem={NumberOfItem}
                    handleAdding={handleAdding}/>
                <Item Price={300}
                    NumberOfItem={NumberOfItem}
                    handleAdding={handleAdding}/>
                <Item Price={400}
                    NumberOfItem={NumberOfItem}
                    handleAdding={handleAdding}/>
                <Item Price={600}
                    NumberOfItem={NumberOfItem}
                    handleAdding={handleAdding}/>
            </div>
        );
    }
}
export default MainContent;
