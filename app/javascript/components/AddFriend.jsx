import React from "react";

class AddFriend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      selected: "",
    };
  }
  componentDidMount() {
    this.fetchFriends();
  }
  searchFriends = () => {
    $(".ui.search").search({
      source: this.state.users,
      searchFields: ["title"],
    });
  };

  fetchFriends = (e) => {
    fetch("/email_list", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let search_users = [];
        data.map((user) => {
          search_users.push({
            title: user.email,
          });
        });
        this.setState({ users: search_users });
      });
  };

  handleChange(e) {
    if (e.target.value) {
      this.setState({ selected: e.target.value });
    } else {
      this.setState({ selected: e.target.textContent });
    }
  }

  handleSubmit = (e) => {
    fetch(`/friends/?email=${this.state.selected}`, {
      method: "GET",
    }).then((res) => {
      console.log(res);
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="ui search">
          <div className="ui icon input">
            <input
              id="friendInput"
              onKeyUp={this.searchFriends}
              className="prompt"
              type="text"
              placeholder="Search Friends"
              onChange={(e) => this.handleChange(e)}
              value={this.state.selected}
            />
            <i className="search icon"></i>
          </div>
          <div className="results" onClick={(e) => this.handleChange(e)}></div>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddFriend;
