import React from 'react';
import { SearchBar } from 'react-native-elements';
export default class App extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          placeholder="Find Something"
          onChangeText={this.updateSearch}
          value={search}
          placeholderColor='#86939e'
       
          
        />
    
      );

      
    }
  }