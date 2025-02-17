import { Col, Row } from "antd";
import ActiveAccountForm from "./ActiveAccountForm";
import SignUpImage from "./SignUpImage";

const ActiveAccount = () => {
  return (
    <div className="h-screen overflow-hidden">
      <Row>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <ActiveAccountForm />
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
          <SignUpImage />
        </Col>
      </Row>
    </div>
  );
};

export default ActiveAccount;
