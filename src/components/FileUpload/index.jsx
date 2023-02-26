import React, { useState } from "react";
import styled from "styled-components";
import { FiUpload } from "react-icons/fi";
import { ReactComponent as DocumentIcon } from "../../assets/svg/document.svg";
// import { imageTypeImage } from "utils/config";
import { Container, Middle, UploadedTitle } from "./style";

const FileUpload = ({ errorMsg, onChange, name, fileName, code }) => {
  return (
    <Container>
      <Middle>
        <label htmlFor={name}>
          {/* {fileName ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                padding: "20px 10px",
              }}
            >
              <UploadedTitle>{fileName}</UploadedTitle>
              {/* <DeleteIcon onClick={handleRemove} /> */}
          {/* </div> */}
          {/* ) : ( */} *
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              padding: "20px 10px",
              color: "#8BA00D",
              gap: "7px",
            }}
          >
            <DocumentIcon />
            <span style={{ color: "#8BA00D", fontWeight: 600 }}>
              Upload Files
            </span>
            <p
              style={{
                color: "#BCC873",
              }}
            >
              PNG,MP4,JPG files are allowed
            </p>
          </div>
          {/* )} */}
          <input
            type="file"
            id={name}
            accept="image/*"
            name={name}
            onChange={onChange}
            style={{
              display: "none",
            }}
          />
        </label>
      </Middle>
    </Container>
  );
};

export default FileUpload;
