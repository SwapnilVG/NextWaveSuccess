
import React from "react";
import { Printer, User } from "lucide-react";

interface IDCardProps {
  id: string;
  name: string;
  designation: string;
  joinDate: string;
  address: string;
  profileImage?: string;
}

const IDCard: React.FC<IDCardProps> = ({
  id,
  name,
  designation,
  joinDate,
  address,
  profileImage,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="mlm-card print:shadow-none">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-medium text-mlm-navy">I-Card</h3>
        <button 
          onClick={handlePrint} 
          className="mlm-btn-primary flex items-center text-sm print:hidden"
        >
          <Printer size={16} className="mr-2" /> Print
        </button>
      </div>
      
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <div className="id-card border-2 border-mlm-navy rounded-lg overflow-hidden bg-white shadow-lg">
            {/* ID Card Header */}
            <div className="bg-gradient-to-r from-mlm-navy to-blue-800 text-white p-4 text-center">
              <h2 className="text-xl font-bold">
                <span className="text-mlm-gold">Freewings</span> 4u
              </h2>
              <p className="text-xs mt-1">Multitrade (OPC) Pvt Ltd</p>
            </div>
            
            {/* ID Card Content */}
            <div className="p-4">
              <div className="flex justify-center mb-4">
                {profileImage ? (
                  <img 
                    src={profileImage} 
                    alt={name} 
                    className="w-24 h-24 rounded-full border-4 border-mlm-navy object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center border-4 border-mlm-navy">
                    <User size={40} className="text-gray-400" />
                  </div>
                )}
              </div>
              
              <div className="text-center mb-4">
                <h3 className="text-lg font-bold text-mlm-navy">{name}</h3>
                <p className="text-sm text-gray-600">{designation}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex">
                  <div className="w-1/3 text-gray-600 text-sm">Member ID:</div>
                  <div className="w-2/3 font-medium">{id}</div>
                </div>
                
                <div className="flex">
                  <div className="w-1/3 text-gray-600 text-sm">Joining Date:</div>
                  <div className="w-2/3">{joinDate}</div>
                </div>
                
                <div className="flex">
                  <div className="w-1/3 text-gray-600 text-sm">Address:</div>
                  <div className="w-2/3">{address}</div>
                </div>
              </div>
            </div>
            
            {/* ID Card Footer */}
            <div className="bg-gray-100 p-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-xs text-gray-500">Valid Until</p>
                  <p className="text-sm font-medium">Lifetime</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500">Authorized Signature</p>
                  <div className="w-20 h-8 border-b border-gray-400 mt-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IDCard;
