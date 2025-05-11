
import React, { useState } from "react";

const PinRequestForm = () => {
  const [formData, setFormData] = useState({
    package: "",
    numberOfPins: 1,
    paymentMode: "bank",
    transactionDetails: "",
  });

  const [packageAmount, setPackageAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Package options with their prices
  const packages = [
    { name: "Freewings Sanitary Pad 1800", price: 1800 },
    { name: "Freewings Combo Pack 3300", price: 3300 },
    { name: "Combo Pack 7000", price: 7000 },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: value,
    });

    // Calculate amounts when package or number of pins change
    if (name === "package" || name === "numberOfPins") {
      const selectedPackage = packages.find(p => p.name === (name === "package" ? value : formData.package));
      const pinsCount = name === "numberOfPins" ? parseInt(value) || 0 : parseInt(formData.numberOfPins.toString()) || 0;
      
      if (selectedPackage) {
        const packagePrice = selectedPackage.price;
        setPackageAmount(packagePrice);
        setTotalAmount(packagePrice * pinsCount);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    // Show success message to user
    alert("Pin request submitted successfully!");
  };

  const handleClear = () => {
    setFormData({
      package: "",
      numberOfPins: 1,
      paymentMode: "bank",
      transactionDetails: "",
    });
    setPackageAmount(0);
    setTotalAmount(0);
  };

  return (
    <div className="mlm-card">
      <h3 className="text-xl font-medium text-mlm-navy mb-6">Pin Request</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mlm-form-group">
            <label htmlFor="package" className="mlm-label">Select Package</label>
            <select
              id="package"
              name="package"
              className="mlm-select"
              value={formData.package}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a package</option>
              {packages.map((pkg, index) => (
                <option key={index} value={pkg.name}>
                  {pkg.name} (₹{pkg.price})
                </option>
              ))}
            </select>
          </div>
          
          <div className="mlm-form-group">
            <label htmlFor="numberOfPins" className="mlm-label">Number of Pins</label>
            <input
              type="number"
              id="numberOfPins"
              name="numberOfPins"
              min="1"
              className="mlm-input"
              value={formData.numberOfPins}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="mlm-form-group">
            <label htmlFor="packageAmount" className="mlm-label">Package Amount (₹)</label>
            <input
              type="text"
              id="packageAmount"
              className="mlm-input bg-gray-50"
              value={packageAmount.toFixed(2)}
              readOnly
            />
          </div>
          
          <div className="mlm-form-group">
            <label htmlFor="totalAmount" className="mlm-label">Total Amount (₹)</label>
            <input
              type="text"
              id="totalAmount"
              className="mlm-input bg-gray-50"
              value={totalAmount.toFixed(2)}
              readOnly
            />
          </div>
          
          <div className="mlm-form-group md:col-span-2">
            <label className="mlm-label">Payment Mode</label>
            <div className="flex space-x-4 mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="bank"
                  checked={formData.paymentMode === "bank"}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-mlm-navy"
                />
                <span className="ml-2">Bank</span>
              </label>
              
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="paymentMode"
                  value="other"
                  checked={formData.paymentMode === "other"}
                  onChange={handleInputChange}
                  className="form-radio h-5 w-5 text-mlm-navy"
                />
                <span className="ml-2">Other</span>
              </label>
            </div>
          </div>
          
          <div className="mlm-form-group md:col-span-2">
            <label htmlFor="transactionDetails" className="mlm-label">Transaction Details</label>
            <textarea
              id="transactionDetails"
              name="transactionDetails"
              rows={3}
              className="mlm-input"
              value={formData.transactionDetails}
              onChange={handleInputChange}
              placeholder="Enter transaction details like reference number, date, etc."
              required
            ></textarea>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="button"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            type="submit"
            className="mlm-btn-success"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PinRequestForm;
