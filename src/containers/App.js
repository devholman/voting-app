import React, {Component} from 'react';
import { connect } from 'react-redux';
import { setNameField } from '../actions';
import ContestantSignUpForm from '../contestant-signUp';
import VoteChoice from '../voterChoice';
//what state do I listen to & send down as props
const mapStateToProps = state => {
    return {
        nameField: state.nameField
    }
}

//what props I should listen to that are actions that need to get dispatched
const mapDispatchToProps = (dispatch) => {
    return {
        onSetName: (event) => dispatch(setNameField(event.target.value))
    }
}


 class App extends Component {
    // const {onSetName} = props,
    handleSignUp = values => {
        console.log(values);
    };
   render(){
    return (
        <div>
        <VoteChoice/>
        </div>
     )
   }
 }
   


export default connect(mapStateToProps, mapDispatchToProps)(App);