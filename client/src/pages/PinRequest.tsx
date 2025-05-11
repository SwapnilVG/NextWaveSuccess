
import React from "react";
import Layout from "../components/layout/Layout";
import PinRequestForm from "../components/epins/PinRequestForm";

const PinRequest = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">Pin Request</h1>
        <p className="text-sm text-gray-500">
          Request new e-pins for registration or package upgrades.
        </p>
      </div>
      
      <PinRequestForm />
    </Layout>
  );
};

export default PinRequest;
