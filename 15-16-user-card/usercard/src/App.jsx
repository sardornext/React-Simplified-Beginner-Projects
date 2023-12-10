import "./App.css";
import user from "../../before/user.json";
import React from "react";

function App() {
  return (
    <>
      <UserCard user={user} />
      <UserCardClass user1={user} />;
    </>
  );
}

export default App;

function UserCard({ user }) {
  return (
    <div className="card">
      <h1 className="name">{user.name}</h1>
      <div className="body">
        <label className="label" htmlFor="age">
          Age:
        </label>
        <span>{user.age}</span>
        <label className="label" htmlFor="age">
          Phone:
        </label>
        <span>{user.phoneNumber} </span>
        <label className="label" htmlFor="age">
          Address:
        </label>
        <span>{user.address} </span>
      </div>
    </div>
  );
}

class UserCardClass extends React.Component {
  render() {
    const { user1 } = this.props;
    return (
      <div className="card">
        <h1 className="name">{user1.name}</h1>
        <div className="body">
          <label className="label" htmlFor="age">
            Age:
          </label>
          <span>{user1.age}</span>
          <label className="label" htmlFor="age">
            Phone:
          </label>
          <span>{user1.phoneNumber} </span>
          <label className="label" htmlFor="age">
            Address:
          </label>
          <span>{user1.address} </span>
        </div>
      </div>
    );
  }
}
