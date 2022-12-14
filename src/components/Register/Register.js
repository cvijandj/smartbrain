import React from 'react';


class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      entries: '0'
    }
  };
   
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
   onEmailChange = (event) => {
    this.setState({email: event.target.value})

  }
   onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('https://smartbrain-api-i5zr.onrender.com/register', {
      method: 'post',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        name: this.state.name,
        entries: this.state.entries
      })
    }).then(response => response.json())
    .then(user => {
      if (user.id) {
        this.props.loadUser(user);
        this.props.onRouteChange('home')
      }
    })
  }


  render() {
    const { onRouteChange} = this.props;
    return (
        <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center shadow-5">
        <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 dib  ph0 mh0">Register</legend>
            <div className="mt3">
              <label className="db fw5 b white lh-copy f5" htmlFor="name">Name</label>
              <input onChange={this.onNameChange}
              className="pa2 input-reset ba br2 bg-transparent hover-bg-black hover-white w-100" type="email" name="name"  id="name"/>
            </div>
            <div className="mt3">
              <label className="db fw5 b white lh-copy f5" htmlFor="email-address">Email</label>
              <input onChange={this.onEmailChange} 
              className="pa2 input-reset ba br2 bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
              <label className="db fw5 b white lh-copy f5" htmlFor="password">Password</label>
              <input onChange={this.onPasswordChange}
              className="b pa2 input-reset br2 ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
            </div>
          </fieldset>
          <div className="">
            <input 
            onClick={this.onSubmitSignIn}
            className="b white ph3 pv2 br2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
            type="submit" 
            value="Register"/>
          </div>
          
        </div>
      </main>
      </article>
    )
}
}



export default Register;