
import React, { useState } from "react";

interface Pin {
  id: string;
  pinNumber: string;
  package: string;
  amount: number;
  generatedDate: string;
  status: string;
}

// Sample data for demonstration
const samplePins: Pin[] = [
  {
    id: "1",
    pinNumber: "FW1234567",
    package: "Freewings Sanitary Pad 1800",
    amount: 1800,
    generatedDate: "01-05-2025",
    status: "Unused",
  },
  {
    id: "2",
    pinNumber: "FW2345678",
    package: "Freewings Combo Pack 3300",
    amount: 3300,
    generatedDate: "02-05-2025",
    status: "Unused",
  },
  {
    id: "3",
    pinNumber: "FW3456789",
    package: "Combo Pack 7000",
    amount: 7000,
    generatedDate: "03-05-2025",
    status: "Unused",
  },
];

const UnusedPinsTable = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [filteredPins, setFilteredPins] = useState<Pin[]>(samplePins);

  const handleSearch = () => {
    // In a real app, this would filter based on the date range
    // For this demo, we'll just simulate filtering
    if (!startDate && !endDate) {
      setFilteredPins(samplePins);
      return;
    }
    
    // Simple simulation of date filtering
    const filtered = samplePins.filter((pin) => {
      const pinDate = new Date(pin.generatedDate.split("-").reverse().join("-"));
      const start = startDate ? new Date(startDate) : new Date(0);
      const end = endDate ? new Date(endDate) : new Date(3000, 0, 1);
      
      return pinDate >= start && pinDate <= end;
    });
    
    setFilteredPins(filtered);
  };

  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    setFilteredPins(samplePins);
  };

  return (
    <div className="mlm-card">
      <h3 className="text-xl font-medium text-mlm-navy mb-6">Unused Pins</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="mlm-form-group">
          <label htmlFor="startDate" className="mlm-label">From Date</label>
          <input
            type="date"
            id="startDate"
            className="mlm-input"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>
        
        <div className="mlm-form-group">
          <label htmlFor="endDate" className="mlm-label">To Date</label>
          <input
            type="date"
            id="endDate"
            className="mlm-input"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        
        <div className="flex items-end space-x-2">
          <button
            className="mlm-btn-primary h-10"
            onClick={handleSearch}
          >
            Search
          </button>
          
          <button
            className="bg-gray-200 text-gray-800 py-2 px-4 rounded-md hover:bg-gray-300 transition-colors h-10"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="mlm-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Pin Number</th>
              <th>Package</th>
              <th>Amount (₹)</th>
              <th>Generated Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredPins.length > 0 ? (
              filteredPins.map((pin, index) => (
                <tr key={pin.id}>
                  <td>{index + 1}</td>
                  <td>{pin.pinNumber}</td>
                  <td>{pin.package}</td>
                  <td>{pin.amount.toFixed(2)}</td>
                  <td>{pin.generatedDate}</td>
                  <td>
                    <span className="mlm-badge-active">{pin.status}</span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4">
                  No pins found for the selected date range
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnusedPinsTable;
