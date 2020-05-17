import React from 'react';
//import Spinner from 'react-bootstrap/Spinner';
import {View, Text} from 'react';
import { Button, Spinner} from 'react-bootstrap';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

/*   componentDidMount(){
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  } */

  render(){

    function Item(props) {
      return <li>{this.state.datasource}</li>;
    }
   
    function MyList(items) {
        return (
        <ul>
          {items.map((item) => <Item key={item.key} value={item} />)}
        </ul>
      );
    }

    if(this.state.isLoading){
      return(
        <View>
          <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
          </Spinner>
        </View>
      )
    }
    console.log(this.state.dataSource);
    return(
      <View>
        <MyList/>
        <Button
          title='BUTTON'
          onClick={()=> {

            fetch('http://192.168.0.39:5000/api/people', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              lname: 'Titi',
              fname: 'Caca',
            })
            })
            fetch('http://192.168.0.39:5000/api/people')
              .then((response) => response.json())
              .then((responseJson) => {

                this.setState({
                  isLoading: false,
                  dataSource: responseJson,
                }, function(){

                });

              }) 
          }
        }
        />
      </View>
    );
  }
}
