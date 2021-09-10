import React from "react";
import nextId from "react-id-generator";
import FileBase from "react-file-base64";
import { connect } from "react-redux";
import { postData, updateHotel } from "../redux/actions/formactions";
import "../Form/Form.css";

class Form extends React.Component {
  nameRef = React.createRef();
  dateRef = React.createRef();
  fileRef = React.createRef();
  tagsRef = React.createRef();
  state = {
    values: { selectedFile: "" },
  };

  componentDidMount() {
    if (this.props.hotelToEdit) {
      console.log("tets4", this.props);
      this.nameRef.current.value = this.props?.hotelToEdit?.name || "";
    }
  }
  onSubmit(e) {
    e.preventDefault();
    const name = this.nameRef.current.value;
    const date = this.dateRef.current.value;
    const file = this.state.values.selectedFile;
    const tags = this.tagsRef.current.value;
    console.log(name, date, file, tags);
  }

  render() {
    console.log(this.props);

    return (
      <div className="col col-sm-4">
        <form
          className="mybutton border p-3"
          onSubmit={(e) => this.onSubmit(e)}
        >
          <h4 className="text-center">
            {this.props.hotelToEdit ? "Edit Hotel" : "Add Hotel"}
          </h4>
          <div className="mb-3">
            <label htmlFor="Input1" className="form-label">
              Hotel Name:
            </label>
            <input
              maxLength="20"
              type="text"
              className="form-control"
              name="name"
              ref={this.nameRef}
              placeholder="Hotel Name"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Input2" className="form-label">
              Created Date:
            </label>
            <input
              type="date"
              className="form-control"
              name="createdAt"
              placeholder="date"
              ref={this.dateRef}
              required
            />
          </div>
          <div className="mb-3">
            <FileBase
              type="file"
              ref={this.fileRef}
              multiple={false}
              onDone={(files) =>
                this.setState({
                  values: {
                    ...this.state.values,
                    selectedFile: files.base64,
                  },
                })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Input3" className="form-label">
              Tags:
            </label>
            <input
              required
              maxLength="20"
              type="text"
              className="form-control"
              name="tags"
              placeholder="linistit mancare buna"
              ref={this.tagsRef}
            />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-primary " type="submit">
              {this.props.hotelToEdit ? "Editeaza" : "Adauga"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    formTransmited: (payload) => dispatch(postData(payload)),
    updateHotel: (payload) => dispatch(updateHotel(payload)),
  };
}

const mapStateToProps = (state) => ({
  singleHotel: state.form.singleHotel,
  editHotel: state.form.editHotel,
  hotelToEdit: state.form.hotelToEdit,
  hotels: state.form.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
