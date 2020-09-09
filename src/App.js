import React, { Component } from "react";
import { Menu, Icon } from "semantic-ui-react";
import ImageCard from "./Card";
import "./App.css";
// import firebase from "./firebase";
import axios from "axios";

export class App extends Component {
  state = {
    images: [],
  };
  componentDidMount() {
    // const message = firebase.messaging();
    // message
    //   .requestPermission()
    //   .then(() => {
    //     return message.getToken();
    //   })
    //   .then((data) => {
    //     console.warn(data);
    //   });

    const url =
      "https://api.unsplash.com/collections/featured?client_id=QZxuVTM2FB_3KYCUMGHJPl-AHmwwoHk7_bRjVXTfzSM&content_filter=high&per_page=40";
    axios.get(url).then((res) => {
      this.setState({ images: res.data });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Menu borderless>
          <Menu.Item>
            <Icon name="pushed" size="big" />
            <h1 style={{ display: "contents" }}>Pics Roster</h1>
          </Menu.Item>
        </Menu>

        <div style={{ margin: "50px 0px" }}></div>

        <div className="row">
          <div className="column">
            {this.state.images &&
              this.state.images
                .slice(0, 6)
                .map((image) => (
                  <ImageCard key={image.id} image={image.cover_photo} />
                ))}
          </div>
          <div className="column">
            {this.state.images &&
              this.state.images
                .slice(7, 12)
                .map((image) => (
                  <ImageCard key={image.id} image={image.cover_photo} />
                ))}
          </div>
          <div className="column">
            {this.state.images &&
              this.state.images
                .slice(14, 20)
                .map((image) => (
                  <ImageCard key={image.id} image={image.cover_photo} />
                ))}
          </div>
          <div className="column">
            {this.state.images &&
              this.state.images
                .slice(21, 26)
                .map((image) => (
                  <ImageCard key={image.id} image={image.cover_photo} />
                ))}
          </div>
        </div>
        <button onClick={this.subscribe}>Subscribe</button>
      </React.Fragment>
    );
  }
}

export default App;
