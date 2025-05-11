import React from "react";
import { User, Star, Edit, UserCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface UserInfoCardProps {
  name: string;
  id: string;
  profileImage?: string;
}

const UserInfoCard: React.FC<UserInfoCardProps> = ({ name, id, profileImage }) => {
  return (
    <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="bg-gradient-to-r from-mlm-navy to-blue-600 h-24 relative"></div>
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row md:items-center px-6 pb-6 relative">
          <div className="mr-6 -mt-12">
            {profileImage ? (
              <img 
                src={profileImage} 
                alt={name} 
                className="w-20 h-20 rounded-full border-4 border-white shadow-md object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center border-4 border-white shadow-md">
                <User size={32} className="text-white" />
              </div>
            )}
          </div>
          
          <div className="mt-4 md:mt-0 flex-grow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
              <div>
                <h3 className="text-xl font-bold text-mlm-navy">{name}</h3>
                <p className="text-gray-600 flex items-center text-sm">
                  ID: {id}
                  <Badge variant="outline" className="ml-3 bg-yellow-50 text-amber-700 flex items-center">
                    <Star size={12} className="mr-1" /> Distributor
                  </Badge>
                </p>
              </div>
              
              <div className="flex mt-3 md:mt-0 space-x-3">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit size={14} /> Edit Profile
                </Button>
                <Button variant="default" size="sm" className="flex items-center gap-1">
                  <UserCheck size={14} /> Follow
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserInfoCard;
