import { Col, Row } from "antd";
import LoginFormImage from "../LoginFormImage";
import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordCom = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ResetPasswordForm />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={24}
          lg={12}
          xl={12}
          xxl={12}
          // className="block lg:block"
        >
          <LoginFormImage />
        </Col>
      </Row>
    </div>
  );
};

export default ResetPasswordCom;
