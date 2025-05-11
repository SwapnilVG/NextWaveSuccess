
import React from "react";
import Layout from "../components/layout/Layout";
import WelcomeLetterComponent from "../components/profile/WelcomeLetter";

const WelcomeLetter = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-mlm-navy mb-2">Welcome Letter</h1>
        <p className="text-sm text-gray-500">
          Your welcome letter cum receipt for joining NextWaveSuccess Multitrade.
        </p>
      </div>
      
      <WelcomeLetterComponent
        id="FW2655423"
        name="VIDYACHARAN PRALHADRAO TANGDE"
        package="Star Pack"
        amount={1800}
        productName="Freewings Sanitary Pad 1800"
        productPrice={1800}
      />
    </Layout>
  );
};

export default WelcomeLetter;
