
import React from "react";
import Layout from "../components/layout/Layout";
import UnusedPinsTable from "../components/epins/UnusedPinsTable";

const UnusedPins = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">E-Pins</h1>
        <p className="text-sm text-gray-500">
          Manage your unused pins, request new pins, or transfer pins to other agents.
        </p>
      </div>
      
      <UnusedPinsTable />
    </Layout>
  );
};

export default UnusedPins;
