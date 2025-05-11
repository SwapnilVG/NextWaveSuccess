import React from "react";
import { User, Edit, Phone, Calendar, CreditCard, Users, Building, FileText } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  id: string;
  name: string;
  sponsor: string;
  mobile: string;
  team: string;
  pancard: string;
  joinDate: string;
  activeDate: string;
  joinAmount: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  id,
  name,
  sponsor,
  mobile,
  team,
  pancard,
  joinDate,
  activeDate,
  joinAmount,
}) => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b py-3 md:pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-mlm-navy text-base sm:text-lg">Personal Details</CardTitle>
          <Button variant="default" size="sm" className="flex items-center gap-1 text-xs sm:text-sm">
            <Edit size={14} /> Update
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="p-4 sm:p-6">
        <div className="space-y-3 sm:space-y-4">
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <User size={14} className="text-blue-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">ID:</div>
            <div className="w-2/3 font-medium text-sm sm:text-base">{id}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <User size={14} className="text-blue-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Name:</div>
            <div className="w-2/3 font-medium text-sm sm:text-base">{name}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <Users size={14} className="text-indigo-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Sponsor:</div>
            <div className="w-2/3 text-xs sm:text-sm">{sponsor}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <Phone size={14} className="text-green-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Mobile:</div>
            <div className="w-2/3 text-xs sm:text-sm">{mobile}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <Users size={14} className="text-purple-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Team:</div>
            <div className="w-2/3 text-xs sm:text-sm">{team}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <FileText size={14} className="text-yellow-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Pancard:</div>
            <div className="w-2/3 text-xs sm:text-sm">{pancard || "Not provided"}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <Calendar size={14} className="text-orange-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Join Date:</div>
            <div className="w-2/3 text-xs sm:text-sm">{joinDate}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <Calendar size={14} className="text-red-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Active Date:</div>
            <div className="w-2/3 text-xs sm:text-sm">{activeDate}</div>
          </div>
          
          <div className="flex items-center hover:bg-blue-50 p-2 rounded-lg transition-colors duration-200">
            <CreditCard size={14} className="text-emerald-500 mr-3 hidden sm:block" />
            <div className="w-1/3 text-gray-500 text-xs sm:text-sm">Join Amount:</div>
            <div className="w-2/3 font-medium text-emerald-600 text-sm sm:text-base">₹{joinAmount}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
