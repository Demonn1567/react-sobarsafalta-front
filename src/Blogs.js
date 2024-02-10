// Blogs.js
import React from "react";
import Card from "./Card";

const Blogs = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blogs</h2>
      <div className="row">
        <div className="col-md-4">
          <Card title="Blog 1" content="Content for Blog 1" />
        </div>
        <div className="col-md-4">
          <Card title="Blog 2" content="Content for Blog 2" />
        </div>
        <div className="col-md-4">
          <Card title="Blog 3" content="Content for Blog 3" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
