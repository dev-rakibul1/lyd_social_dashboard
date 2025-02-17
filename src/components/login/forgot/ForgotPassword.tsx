import { Col, Row } from "antd";
import LoginFormImage from "../LoginFormImage";
import ForgotPasswordForm from "./ForgotPasswordForm";

const ForgotPasswordComp = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ForgotPasswordForm />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <LoginFormImage />
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPasswordComp;
