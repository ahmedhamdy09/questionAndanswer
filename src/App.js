import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import FormInput from "./Components/FormInput";
import QAList from "./Components/QAList";
import question from "./Data";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [data, setData] = useState(question);

  // to add new items
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تم الاضافة بنجاح", "success");
  };

  //delete to all data items
  const deleteAll = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف الكل بنجاح", "success");
  };

  // to delete only one items from array
  const deleteOneItems = (items) => {
    localStorage.setItem("items", JSON.stringify([...items]));
    setData([...items]);
    notify("تم حذف السؤال بنجاح", "success");
    if (items.length <= 0) {
      deleteAll();
    }
  };

  // to push notifaction
  const notify = (message, type) => {
    if (type === "Error") {
      toast.error(message);
    } else if (type === "success") {
      toast.success(message);
    }
  };

  return (
    <div className="App">
      <div className="font text-center color-body">
        <Container className="p-5">
          <Row className="justify-content-center">
            <Col sm="4">
              <div className="fs-3 text-center py-3">أسئلة واجوبة شائعة</div>
            </Col>
            <Col sm="8">
              <FormInput onAdd={addItem} notify={notify} />
              <QAList data={data} deleteOneItems={deleteOneItems} />
              {localStorage.getItem("items") != null ? (
                <button onClick={deleteAll} className="btn-color w-100 my-3">
                  مسح الكل
                </button>
              ) : null}
            </Col>
          </Row>
          <ToastContainer />
        </Container>
      </div>
    </div>
  );
}

export default App;
