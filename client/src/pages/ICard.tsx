
import React from "react";
import Layout from "../components/layout/Layout";
import IDCard from "../components/profile/IDCard";

const ICard = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">I-Card</h1>
        <p className="text-sm text-gray-500">
          Your identification card as a member of NextWaveSuccess Multitrade.
        </p>
      </div>
      
      <IDCard
        id="FW2655423"
        name="VIDYACHARAN PRALHADRAO TANGDE"
        designation="Distributor"
        joinDate="23/04/2025"
        address="Office No. Pune-411017"
      />
    </Layout>
  );
};

export default ICard;
