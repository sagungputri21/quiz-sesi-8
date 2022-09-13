import React from "react";
import Modal from "./Modal";

const Content = () => {
  return (
    <>
      <div className="p-5 my-4 bg-light rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">First Paragraph in Jumbotron</h1>
          <p className="col-md-8 fs-4">
            Using a series of utilities, you can creat this jumbotron, just like
            the one in previous versions of Bootstrap. Check out the examples
            below for how you can remix and restyle it to your liking.
          </p>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Click here to show Modal Box
          </button>
        </div>
      </div>

      {/* Modals */}
      <div
        id="exampleModal"
        className="modal fade"
        tableindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <Modal />
      </div>
    </>
  );
};

export default Content;
