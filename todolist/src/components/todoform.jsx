import React from "react";

const Todoform = () => {
  return (
    <section>
      <form className="add">
        <div className="add-form">
          <input type="text" className="add-input" />
          <button className="add-btn main-black-color">Add</button>
        </div>
      </form>
    </section>
  );
};

export default Todoform;
