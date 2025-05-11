
import React, { useState } from "react";

const EditProfileForm = () => {
  const [formData, setFormData] = useState({
    firstName: "RAHUL",
    middleName: "VIJAY",
    lastName: "WAGHMARE",
    address: "",
    mobile: "8485051063",
    dob: "",
    pancard: "",
    nomineeName: "",
    relation: "",
    
    // Bank details
    accountHolder: "RAHUL VIJAY WAGHMARE",
    bankName: "",
    accountNumber: "",
    confirmAccountNumber: "",
    ifscCode: "",
    branchName: "",
    accountMode: "saving",
    
    // Password change
    newPassword: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (formData.accountNumber !== formData.confirmAccountNumber) {
      alert("Account numbers do not match!");
      return;
    }
    
    if (formData.newPassword && formData.newPassword !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // In a real app, submit to server here
    console.log("Form submitted:", formData);
    alert("Profile updated successfully!");
  };

  return (
    <div className="mlm-card">
      <h3 className="text-xl font-medium text-mlm-navy mb-6">Edit Profile</h3>
      
      <form onSubmit={handleSubmit}>
        {/* Personal Details Section */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-mlm-navy mb-4 pb-2 border-b border-gray-200">Personal Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="mlm-form-group">
              <label htmlFor="firstName" className="mlm-label">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mlm-input"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="middleName" className="mlm-label">Middle Name</label>
              <input
                type="text"
                id="middleName"
                name="middleName"
                className="mlm-input"
                value={formData.middleName}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="lastName" className="mlm-label">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mlm-input"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group md:col-span-3">
              <label htmlFor="address" className="mlm-label">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                className="mlm-input"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your full address"
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="mobile" className="mlm-label">Mobile</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mlm-input"
                value={formData.mobile}
                onChange={handleInputChange}
                pattern="[0-9]{10}"
                title="Please enter a 10-digit mobile number"
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="dob" className="mlm-label">Date of Birth</label>
              <input
                type="date"
                id="dob"
                name="dob"
                className="mlm-input"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="pancard" className="mlm-label">Pancard</label>
              <input
                type="text"
                id="pancard"
                name="pancard"
                className="mlm-input"
                value={formData.pancard}
                onChange={handleInputChange}
                placeholder="e.g., ABCDE1234F"
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="nomineeName" className="mlm-label">Nominee Name</label>
              <input
                type="text"
                id="nomineeName"
                name="nomineeName"
                className="mlm-input"
                value={formData.nomineeName}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="relation" className="mlm-label">Relation</label>
              <select
                id="relation"
                name="relation"
                className="mlm-select"
                value={formData.relation}
                onChange={handleInputChange}
              >
                <option value="">Select Relation</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Bank Details Section */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-mlm-navy mb-4 pb-2 border-b border-gray-200">Bank Details</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="mlm-form-group">
              <label htmlFor="accountHolder" className="mlm-label">Account Holder Name</label>
              <input
                type="text"
                id="accountHolder"
                name="accountHolder"
                className="mlm-input"
                value={formData.accountHolder}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="bankName" className="mlm-label">Bank Name</label>
              <input
                type="text"
                id="bankName"
                name="bankName"
                className="mlm-input"
                value={formData.bankName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="accountNumber" className="mlm-label">Account Number</label>
              <input
                type="text"
                id="accountNumber"
                name="accountNumber"
                className="mlm-input"
                value={formData.accountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="confirmAccountNumber" className="mlm-label">Confirm Account Number</label>
              <input
                type="text"
                id="confirmAccountNumber"
                name="confirmAccountNumber"
                className="mlm-input"
                value={formData.confirmAccountNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="ifscCode" className="mlm-label">IFSC Code</label>
              <input
                type="text"
                id="ifscCode"
                name="ifscCode"
                className="mlm-input"
                value={formData.ifscCode}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="branchName" className="mlm-label">Branch Name</label>
              <input
                type="text"
                id="branchName"
                name="branchName"
                className="mlm-input"
                value={formData.branchName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="accountMode" className="mlm-label">Account Mode</label>
              <select
                id="accountMode"
                name="accountMode"
                className="mlm-select"
                value={formData.accountMode}
                onChange={handleInputChange}
                required
              >
                <option value="saving">Saving</option>
                <option value="current">Current</option>
                <option value="joint">Joint</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Password Change Section */}
        <div className="mb-8">
          <h4 className="text-lg font-medium text-mlm-navy mb-4 pb-2 border-b border-gray-200">Password Change</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="mlm-form-group">
              <label htmlFor="newPassword" className="mlm-label">New Password</label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="mlm-input"
                value={formData.newPassword}
                onChange={handleInputChange}
              />
              <p className="text-xs text-gray-500 mt-1">
                Leave blank if you don't want to change it
              </p>
            </div>
            
            <div className="mlm-form-group">
              <label htmlFor="confirmPassword" className="mlm-label">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="mlm-input"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4 mt-6">
          <button
            type="reset"
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            Clear
          </button>
          <button
            type="submit"
            className="mlm-btn-success"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileForm;
