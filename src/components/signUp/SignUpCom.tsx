import { Col, Row } from "antd";
import SignUpForm from "./SignUpForm";
import SignUpImage from "./SignUpImage";

const SignUpCom = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <SignUpForm />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <SignUpImage />
        </Col>
      </Row>
    </div>
  );
};

export default SignUpCom;
