import React from "react";
import { Row, Accordion } from "react-bootstrap";
import question from "../Data";

function QAList({ data, deleteOneItems }) {
  const dataLocal = JSON.parse(localStorage.getItem("items"));
  //delete one items from array
  const onDeleteOneItems = (ID) => {
    if (localStorage.getItem("items") != null) {
      const index = question.findIndex((items) => items.id === ID);
      question.splice(index, 1);
      deleteOneItems(question);
    }
  };
  return (
    <Row>
      <Accordion>
        {localStorage.getItem("items") != null ? (
          dataLocal.map((item, index) => {
            return (
              <>
                <Accordion.Item key={index} eventKey={item.id}>
                  <Accordion.Header>
                    <div className="m-auto">{item.q}</div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className="m-auto px-3 d-inline"> {item.a} </div>
                    <button
                      onClick={() => onDeleteOneItems(item.id)}
                      className="btn-color"
                    >
                      مسح السؤال
                    </button>
                  </Accordion.Body>
                </Accordion.Item>
              </>
            );
          })
        ) : (
          <h2 className="fs-4 text-center p-5"> لا يوجد اسألة الأن</h2>
        )}
      </Accordion>
    </Row>
  );
}

export default QAList;
