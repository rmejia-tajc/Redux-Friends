import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: 0,
            email: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addNewFriend = event => {
        event.preventDefault();
        this.props.addFriend(this.state);
    };

    render() {
        return (
            <div>
                <form>

                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="name"
                        value={this.state.name}
                        placeholder="Name"
                    />
                    <input
                        onChange={this.handleChanges}
                        type="number"
                        name="age"
                        value={this.state.age}
                        placeholder="Age"
                    />
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="email"
                        value={this.state.email}
                        placeholder="Email"
                    />

                    <button onClick={this.addNewFriend}>Add Friend</button>

                </form>
            </div>
        );
    }
}

export default Form;