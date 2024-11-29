import { useState } from "react";
import { Button, Modal, Input, Row, Col, Typography, Card } from "antd";
import { PoundCircleOutlined } from "@ant-design/icons"; // You can import any other icons if needed
import "antd/dist/reset.css"; // Import Ant Design styles
// import "./styles.scss"; 
const { Title, Text } = Typography;

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(null); // Default value is null
  const [interestRate, setInterestRate] = useState(null); // Default value is null
  const [loanTenure, setLoanTenure] = useState(null); // Default value is null
  const [loanEMI, setLoanEMI] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // If input is empty, set it to null for better control
    if (value === "") {
      if (name === "loanAmount") setLoanAmount(null);
      if (name === "interestRate") setInterestRate(null);
      if (name === "loanTenure") setLoanTenure(null);
      return;
    }

    // Validate and enforce minimum value of 1
    const numericValue = Math.max(1, parseFloat(value) || 0);

    if (name === "loanAmount") setLoanAmount(numericValue);
    if (name === "interestRate") setInterestRate(numericValue);
    if (name === "loanTenure") setLoanTenure(numericValue);
  };

  const calculateEMI = () => {
    if (interestRate === 0) {
      const emi = loanAmount / loanTenure;
      setLoanEMI(emi);
      setTotalAmount(Math.round(emi * loanTenure));
      setTotalInterest(0); // No interest for 0% rate
      return;
    }

    const emi =
      loanAmount *
      (interestRate / 12 / 100) *
      (Math.pow(1 + interestRate / 12 / 100, loanTenure) /
        (Math.pow(1 + interestRate / 12 / 100, loanTenure) - 1));

    setLoanEMI(emi);
    setTotalAmount(Math.round(loanTenure * emi));
    setTotalInterest(Math.round(loanTenure * emi) - loanAmount);
  };

  const formatCurrency = (value) => {
    return value.toLocaleString("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 0,
    });
  };

  const showModal = () => {
    setIsModalVisible(true); // Show the modal
  };

  const handleOk = () => {
    setIsModalVisible(false); // Close the modal
  };

  const handleCancel = () => {
    setIsModalVisible(false); // Close the modal
  };

  // Disable button only if any field is empty or less than or equal to 0
  const isButtonDisabled =
    loanAmount === null || loanAmount <= 0 ||
    interestRate === null || interestRate <= 0 ||
    loanTenure === null || loanTenure <= 0;

  return (
    <div style={{ padding: "50px", maxWidth: "600px", margin: "auto" }}>
      {/* Button to open EMI Calculator */}
      <Button
        type="primary"
        onClick={showModal}
        style={{ marginBottom: "20px", background: "#1d8a34", color: "#fff" }}
      >
        Open EMI Calculator
      </Button>

      {/* Modal with EMI Calculator inside */}
      <Modal
        title="Loan EMI Calculator"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null} // Disable default footer buttons
        width={600}
        bodyStyle={{ padding: "20px" }}
      >
        <Card bordered={false} style={{ boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            EMI Calculator
          </Title>
          <Row gutter={16}>
            <Col span={12}>
              <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>Loan Amount</Text>
              <Input
                prefix="₹" // Directly using ₹ symbol here
                type="number"
                name="loanAmount"
                value={loanAmount === null ? "" : loanAmount} // Display empty string if value is null
                onChange={handleInputChange}
                placeholder="Enter loan amount"
                min={1} // Minimum value is 1
                style={{ marginBottom: "16px" }}
              />
            </Col>
            <Col span={12}>
              <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>Interest Rate (%)</Text>
              <Input
                type="number"
                name="interestRate"
                value={interestRate === null ? "" : interestRate} // Display empty string if value is null
                onChange={handleInputChange}
                placeholder="Enter interest rate"
                min={1} // Minimum value is 1
                style={{ marginBottom: "16px" }}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Text style={{ fontSize: "12px", display: "block", marginBottom: "8px" }}>Loan Tenure (months)</Text>
              <Input
                type="number"
                name="loanTenure"
                value={loanTenure === null ? "" : loanTenure} // Display empty string if value is null
                onChange={handleInputChange}
                placeholder="Enter loan tenure"
                min={1} // Minimum value is 1
                style={{ marginBottom: "16px" }}
              />
            </Col>
          </Row>
          <Button
            type="primary"
            block
            onClick={calculateEMI}
            style={{
              marginBottom: "20px",
              opacity: isButtonDisabled ? 0.5 : 1, // Fade out if button is disabled
              pointerEvents: isButtonDisabled ? "none" : "auto", // Disable click if button is disabled
            }}
            disabled={isButtonDisabled} // Disable button if fields are empty or invalid
          >
            Calculate EMI
          </Button>
          <div style={{ textAlign: "center" }}>
            <Text strong>Loan EMI: {formatCurrency(Math.round(loanEMI))}</Text>
            <br />
            <Text>Total Interest Payable: {formatCurrency(totalInterest)}</Text>
            <br />
            <Text>Total Amount Payable: {formatCurrency(totalAmount)}</Text>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default EmiCalculator;
