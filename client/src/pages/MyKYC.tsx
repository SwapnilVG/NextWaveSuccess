
import React from "react";
import Layout from "../components/layout/Layout";
import KYCForm from "../components/profile/KYCForm";

const MyKYC = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">My KYC</h1>
        <p className="text-sm text-gray-500">
          Upload and manage your KYC (Know Your Customer) documents.
        </p>
      </div>
      
      <KYCForm />
    </Layout>
  );
};

export default MyKYC;
