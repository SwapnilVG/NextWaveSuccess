import React, { useState } from "react";
import { Users, Search, Bookmark, PhoneOutgoing, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DirectAgent {
  id: string;
  name: string;
  joinDate: string;
  mobile: string;
  package: string;
  amount: number;
  status: "Active" | "Inactive";
}

// Sample data for demonstration
const sampleAgents: DirectAgent[] = [
  {
    id: "FW2655424",
    name: "User One",
    joinDate: "24-04-2025",
    mobile: "9876543210",
    package: "Freewings Sanitary Pad 1800",
    amount: 1800,
    status: "Active",
  },
  {
    id: "FW2655425",
    name: "User Two",
    joinDate: "25-04-2025",
    mobile: "8765432109",
    package: "Freewings Combo Pack 3300",
    amount: 3300,
    status: "Active",
  },
  {
    id: "FW2655426",
    name: "User Three",
    joinDate: "26-04-2025",
    mobile: "7654321098",
    package: "Combo Pack 7000",
    amount: 7000,
    status: "Inactive",
  },
];

const MyDirectTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredAgents = sampleAgents.filter(agent => 
    agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    agent.mobile.includes(searchTerm)
  );
  
  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <CardTitle className="flex items-center">
          <Users className="mr-2 text-blue-600" size={20} />
          My Direct Members
          <Badge variant="outline" className="ml-2 bg-blue-50 border-blue-200 text-blue-600">
            {filteredAgents.length}
          </Badge>
        </CardTitle>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          <Input 
            placeholder="Search members..." 
            className="pl-10" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        {/* Desktop table view */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                <th className="p-4 text-left font-medium">#</th>
                <th className="p-4 text-left font-medium">ID</th>
                <th className="p-4 text-left font-medium">Name</th>
                <th className="p-4 text-left font-medium">Join Date</th>
                <th className="p-4 text-left font-medium">Mobile</th>
                <th className="p-4 text-left font-medium">Package</th>
                <th className="p-4 text-left font-medium">Amount (₹)</th>
                <th className="p-4 text-left font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent, index) => (
                <tr 
                  key={agent.id} 
                  className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-blue-50 transition-colors duration-150`}
                >
                  <td className="p-4 border-b border-gray-100">{index + 1}</td>
                  <td className="p-4 border-b border-gray-100 font-medium text-blue-700 flex items-center">
                    <Bookmark size={14} className="mr-1 text-blue-500" /> {agent.id}
                  </td>
                  <td className="p-4 border-b border-gray-100 font-medium">{agent.name}</td>
                  <td className="p-4 border-b border-gray-100 text-gray-600">{agent.joinDate}</td>
                  <td className="p-4 border-b border-gray-100 text-gray-600 flex items-center">
                    <PhoneOutgoing size={14} className="mr-1 text-blue-500" /> {agent.mobile}
                  </td>
                  <td className="p-4 border-b border-gray-100 text-gray-600">{agent.package}</td>
                  <td className="p-4 border-b border-gray-100 font-medium">₹{agent.amount.toFixed(2)}</td>
                  <td className="p-4 border-b border-gray-100">
                    <Badge
                      variant={agent.status === "Active" ? "success" : "destructive"}
                      className="font-medium"
                    >
                      {agent.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile card view */}
        <div className="md:hidden">
          {filteredAgents.map((agent, index) => (
            <div 
              key={agent.id} 
              className={`p-4 border-b ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center">
                  <Bookmark size={14} className="mr-1 text-blue-500" />
                  <span className="font-medium text-blue-700">{agent.id}</span>
                </div>
                <Badge
                  variant={agent.status === "Active" ? "success" : "destructive"}
                  className="font-medium"
                >
                  {agent.status}
                </Badge>
              </div>
              
              <h3 className="font-medium text-gray-900 mb-2">{agent.name}</h3>
              
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="text-gray-500">Join Date:</div>
                <div>{agent.joinDate}</div>
                
                <div className="text-gray-500">Mobile:</div>
                <div className="flex items-center">
                  <PhoneOutgoing size={14} className="mr-1 text-blue-500" />
                  {agent.mobile}
                </div>
                
                <div className="text-gray-500">Package:</div>
                <div className="truncate">{agent.package}</div>
                
                <div className="text-gray-500">Amount:</div>
                <div className="font-medium">₹{agent.amount.toFixed(2)}</div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredAgents.length === 0 && (
          <div className="p-8 text-center">
            <p className="text-gray-500">No direct members found</p>
            {searchTerm && (
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MyDirectTable;
