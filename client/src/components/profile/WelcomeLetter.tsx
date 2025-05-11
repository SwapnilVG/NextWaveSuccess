
import React from "react";
import { Printer } from "lucide-react";

interface WelcomeLetterProps {
  id: string;
  name: string;
  package: string;
  amount: number;
  productName: string;
  productPrice: number;
}

const WelcomeLetter: React.FC<WelcomeLetterProps> = ({
  id,
  name,
  package: packageName,
  amount,
  productName,
  productPrice
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mlm-card print:shadow-none">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium text-mlm-navy">Welcome Letter Cum Receipt</h3>
        <button 
          onClick={handlePrint} 
          className="mlm-btn-primary flex items-center text-sm print:hidden"
        >
          <Printer size={16} className="mr-2" /> Print
        </button>
      </div>
      
      <div className="welcome-letter border-2 border-gray-200 p-6 rounded-lg bg-white">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-mlm-navy">
            <span className="text-mlm-gold">NextWaveSuccess</span> Multitrade (OPC) Pvt Ltd
          </h2>
          <p className="text-sm text-gray-500">www.nextwavesuccess.com</p>
        </div>
        
        <div className="border-t-2 border-b-2 border-gray-200 py-6 my-6">
          <h3 className="text-xl font-medium mb-4 text-center">
            Welcome <span className="font-bold">{name}</span> to NextWaveSuccess Multitrade (OPC) Pvt Ltd.
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <p className="text-sm text-gray-600 mb-1">Registration ID:</p>
              <p className="font-bold">{id}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Package:</p>
              <p className="font-bold">{packageName}</p>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-1">Amount:</p>
              <p className="font-bold">₹ {amount.toFixed(2)}</p>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-2">Product Details:</h4>
            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span>{productName}</span>
                <span className="font-bold">₹ {productPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-lg font-medium">Thanks for joining the NextWaveSuccess Multitrade family.</p>
          <p className="text-sm text-gray-500 mt-2">
            This is an electronically generated letter and does not require a signature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeLetter;
