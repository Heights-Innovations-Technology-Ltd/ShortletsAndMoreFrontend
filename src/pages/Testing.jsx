import React from "react";
import FileUpload from "../components/FileUpload";

const Testing = () => {
  const handleChange = (e) => {
    let file = e.target.files[0];
    console.log(file);
  };
  return (
    <div>
      <FileUpload
        // fileName={"Apartment Image"}
        onChange={handleChange}
        name="file"
      />
    </div>
  );
};

export default Testing;
