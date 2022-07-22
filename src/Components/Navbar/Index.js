import React, { useState } from "react";
import LoginIndex from "../Login/LoginIndex";

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">Home</li>
            </ul>
            <button
              className="btn btn-outline-secondary"
              onClick={() => setIsModalVisible(true)}
            >
              Login
            </button>
          </div>
          <LoginIndex
            isModalVisible={isModalVisible}
            setIsModalVisible={setIsModalVisible}
          />
        </div>
      </nav>
    </>
  );
};

export default Index;
