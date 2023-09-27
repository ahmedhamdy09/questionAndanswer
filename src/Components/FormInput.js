import React from "react";
import { useState } from "react";
import { Col, Row, Form } from "react-bootstrap";
import question from "../Data";
const FormInput = ({ onAdd, notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("من فضلك اكمل البيانات", "Error");
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
    console.log(question);
  };

  //to push data to array
  return (
    <>
      <Row className="my-3">
        <Col sm="5">
          <Form.Control
            value={qu}
            onChange={(e) => setQu(e.target.value)}
            type="text"
            placeholder="أدخل السؤال"
          />
        </Col>

        <Col sm="5">
          <Form.Control
            value={an}
            onChange={(e) => setAn(e.target.value)}
            type="text"
            placeholder="ادخل الاجابة"
          />
        </Col>

        <Col sm="2">
          <button
            onClick={addNewItem}
            className="btn-color w-100"
            type="submit"
          >
            اضافة
          </button>
        </Col>
      </Row>
    </>
  );
};

export default FormInput;
