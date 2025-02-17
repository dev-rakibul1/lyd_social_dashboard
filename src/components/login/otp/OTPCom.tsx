import { Col, Row } from "antd";
import LoginFormImage from "../LoginFormImage";
import OTPForm from "./OTPForm";

const OTPCom = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <OTPForm />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <LoginFormImage />
        </Col>
      </Row>
    </div>
  );
};

export default OTPCom;
