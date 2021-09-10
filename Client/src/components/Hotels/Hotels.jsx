import React from "react";
import Hotel from "./Hotel/Hotel";
import { connect } from "react-redux";

const Hotels = (props) => {
  return (
    <div className="col col-sm-8">
      <div className="row">
        {props.hotels.length === 0 || !props.hotels ? (
          <p>Loading...</p>
        ) : (
          props.hotels.map((item, index) => {
            return <Hotel {...item} key={index} />;
          })
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  hotels: state.form.data,
});
export default connect(mapStateToProps, null)(Hotels);
