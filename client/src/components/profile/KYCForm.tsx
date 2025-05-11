
import React, { useState } from "react";
import { Upload, X, Check } from "lucide-react";

interface DocumentUpload {
  id: string;
  name: string;
  file: File | null;
  preview: string | null;
  status: "pending" | "uploaded" | "error";
}

const KYCForm = () => {
  const [documents, setDocuments] = useState<DocumentUpload[]>([
    { id: "selfPhoto", name: "Self Photo", file: null, preview: null, status: "pending" },
    { id: "aadharFront", name: "Aadhar Card (Front)", file: null, preview: null, status: "pending" },
    { id: "aadharBack", name: "Aadhar Card (Back)", file: null, preview: null, status: "pending" },
    { id: "pancard", name: "Pancard", file: null, preview: null, status: "pending" },
    { id: "bankDetails", name: "Bank Details", file: null, preview: null, status: "pending" },
  ]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>, docId: string) => {
    if (!event.target.files?.length) return;
    
    const file = event.target.files[0];
    if (!file) return;
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("File size should not exceed 5MB");
      return;
    }
    
    // Create preview URL
    const preview = URL.createObjectURL(file);
    
    setDocuments(prevDocuments => 
      prevDocuments.map(doc => 
        doc.id === docId 
          ? { ...doc, file, preview, status: "uploaded" } 
          : doc
      )
    );
  };

  const handleRemoveFile = (docId: string) => {
    setDocuments(prevDocuments => 
      prevDocuments.map(doc => 
        doc.id === docId 
          ? { ...doc, file: null, preview: null, status: "pending" } 
          : doc
      )
    );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Check if all documents are uploaded
    const allUploaded = documents.every(doc => doc.file !== null);
    
    if (!allUploaded) {
      alert("Please upload all required documents");
      return;
    }
    
    // In a real app, submit to server here
    console.log("Documents submitted:", documents);
    alert("KYC documents submitted successfully!");
  };

  return (
    <div className="mlm-card">
      <h3 className="text-xl font-medium text-mlm-navy mb-6">My KYC Documents</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Please upload clear, legible images of your documents. Supported formats: JPG, PNG, PDF. Maximum file size: 5MB.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documents.map((doc) => (
            <div key={doc.id} className="mlm-form-group">
              <label htmlFor={doc.id} className="mlm-label">{doc.name}</label>
              
              {!doc.preview ? (
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-mlm-navy transition-colors">
                  <input
                    type="file"
                    id={doc.id}
                    accept="image/jpeg,image/png,application/pdf"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, doc.id)}
                  />
                  <label htmlFor={doc.id} className="cursor-pointer w-full h-full flex flex-col items-center">
                    <Upload size={32} className="text-gray-400 mb-2" />
                    <p className="text-sm font-medium text-gray-600">Click to upload {doc.name}</p>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG or PDF (max 5MB)</p>
                  </label>
                </div>
              ) : (
                <div className="relative border rounded-lg p-2">
                  {doc.file?.type.includes('image') ? (
                    <img
                      src={doc.preview}
                      alt={doc.name}
                      className="w-full h-40 object-cover rounded"
                    />
                  ) : (
                    <div className="w-full h-40 bg-gray-100 rounded flex items-center justify-center">
                      <p className="text-gray-600 font-medium">PDF Document</p>
                    </div>
                  )}
                  
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(doc.id)}
                      className="bg-mlm-red text-white rounded-full p-1 hover:bg-opacity-90 transition-colors"
                    >
                      <X size={16} />
                    </button>
                    {doc.status === "uploaded" && (
                      <span className="bg-mlm-green text-white rounded-full p-1">
                        <Check size={16} />
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm font-medium mt-2 truncate">
                    {doc.file?.name}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-end mt-8">
          <button
            type="submit"
            className="mlm-btn-success"
          >
            Submit KYC Documents
          </button>
        </div>
      </form>
    </div>
  );
};

export default KYCForm;
