import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Modal extends React.Component {
  item = React.createRef();
  componentDidMount() {
    const options = {
      onOpenStart: () => {
        console.log("Open Start");
      },
      onOpenEnd: () => {
        console.log("Open End");
      },
      onCloseStart: () => {
        console.log("Close Start");
      },
      onCloseEnd: () => {
        console.log("Close End");
      },
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      dismissible: false,
      startingTop: "4%",
      endingTop: "10%"
    };
    M.Modal.init(this.Modal, options);
  }

  render() {
    return (
      <>
        <a
          className="waves-effect waves-light btn modal-trigger blue"
          data-target="modal1"
        >
          {this.props.text}
        </a>

        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id="modal1"
          className="modal"
        >
          <div className="modal-content">
            <h4>{this.props.header}</h4>
            <input ref={ this.item }type="text"/>
          </div>
          <div className="modal-footer">
            <a className="modal-close waves-effect waves-red btn-flat">
              Close
            </a>
            <a onClick={()=>{console.log(this.item.current.value);this.props.action(this.item.current.value)}} className="modal-close waves-effect waves-green btn-flat">
              Add
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Modal;
