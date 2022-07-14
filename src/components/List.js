import { Component } from "react";

export default class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://yurii-cv-api.azurewebsites.net/")
      .then((response) => response.json())

      .then((json) => {
        this.setState({ users: json });
      });
  }

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.users.map((user) => (
          <li key={user.id}>
            <a href={`/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </a>
          </li>
        ))}
      </ul>
    );
  }
}
