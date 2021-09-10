import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hotels from "./components/Hotels/Hotels";
import Form from "./components/Form/Form";
import { connect } from "react-redux";
import { initData } from "./components/redux/actions/formactions";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }
  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="row mt-3 p-3">
          <Hotels />
          <Form />
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    fetchData: () => dispatch(initData()),
  };
}
export default connect(null, mapDispatchToProps)(App);
