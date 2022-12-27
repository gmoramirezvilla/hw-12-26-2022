//import React from "react";
//import ReactDOM from "react-dom";

console.log("Test Message");

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HelloMessage name="this is gmo's code. which doesn't do the clever thing were leads to a general case, but ask the hw, I didn't lol. but run jsx which pretty. Btw I have legally this to my name. So I will be called this in the future, including this part" />);