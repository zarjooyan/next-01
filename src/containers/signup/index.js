import FormComponent from "../../components/Form";
import Card from "../../components/Card";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Successful from "./components/Successful";

function SignupPage() {
  const [show, setShow] = useState(false);
  return (
    <div className="d-flex justify-content-center mb-5">
      <Card>
        {show ? (
          <Successful setShow={setShow} />
        ) : (
          <FormComponent setShow={setShow} />
        )}
      </Card>
    </div>
  );
}

export default SignupPage;
