import React from "react";
import "../Hotel/style.hotel.css";
import moment from "moment";
import { connect } from "react-redux";
import {
  deleteHotel,
  edithotel,
  getOne,
} from "../../redux/actions/formactions";

const Hotel = (props) => {
  const { tags, name, createdAt } = props;
  return (
    <div className="col col-lg-4 col-md-6 py-2 mb-4 d-flex align-items-stretch">
      <div className="card profile-card-5">
        <div className="card-img-block">
          <img
            className="card-img-top"
            src={props.selectedFile}
            alt="selected file"
          />
        </div>
        <div className="card-body mt-1">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{moment(createdAt).fromNow()}</p>
          <div className="d-flex flex-row justify-content-evenly flex-wrap py-2">
            {tags.map((item, index) => {
              return (
                <span
                  className="badge rounded-pill bg-light text-dark mb-1"
                  key={index}
                >
                  #{item}
                </span>
              );
            })}
          </div>
          <div className="d-flex justify-content-evenly  p-1">
            <button
              className="btn btn-primary"
              onClick={() => props.deleteItem(props.id)}
            >
              Delete
            </button>

            <button
              className="btn btn-primary"
              onClick={() => props.editHotel(props)}
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteItem: (id) => dispatch(deleteHotel(id)),
    getOne: (id) => dispatch(getOne(id)),
    editHotel: (hotel) => dispatch(edithotel(hotel)),
  };
};

export default connect(null, mapDispatchToProps)(Hotel);
