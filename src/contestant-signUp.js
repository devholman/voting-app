import React from 'react';
import { reduxForm, Field } from 'redux-form';

// const ContestantSignUpForm = (props) => {
//     return (
//         <form>
//             <label>name:</label>
//             <input onChange={props.setName}/>
//             <label>Costume Name:</label>
//             <input onChange={props.setName}></input>
//         </form>
//     )
// }


const SignUpForm = (props) => {
    const { handleSubmit } = props;
    return <form onSubmit={handleSubmit} className="form">
      <div className="field">
        <div className="control">
          <label className="label">First Name</label>
          <Field className="input" name="firstName" component="input" type="text" placeholder="First Name"/>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Last Name</label>
          <Field className="input" name="lastName" component="input" type="text" placeholder="Last Name"/>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Costume Name</label>
          <Field className="input" name="costumeName" component="input" type="text" placeholder="Costume Description"/>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <label className="label">Categories:</label>
          <label className="checkbox">
            <Field name="scary" component="input" type="checkbox" id="Scary" />
            {' '}
            Scary
          </label>
          <label className="checkbox">
            <Field name="funny" component="input" type="checkbox" id="Funny" />
            {' '}
            Funny
          </label>
          <label className="checkbox">
            <Field name="Group" component="input" type="checkbox" id="Group" />
            {' '}
            Group
          </label>
        </div>
      </div>
  
      <div className="field">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
      </div>
      <input type="file" accept="image/*;capture=camera"/>
    </form>;
  };

  const ContestantSignUpForm = reduxForm({
    form: 'signIn',
  })(SignUpForm);

  export default ContestantSignUpForm;
