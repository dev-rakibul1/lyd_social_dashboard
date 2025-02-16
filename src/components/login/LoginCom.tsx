import { Col, Row } from "antd";
import LoginForm from "./LoginForm";
import LoginFormImage from "./LoginFormImage";

const LoginCom = () => {
  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <LoginForm />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <LoginFormImage />
        </Col>
      </Row>
    </div>
  );
};

export default LoginCom;
