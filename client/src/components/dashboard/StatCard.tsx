import React from "react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  iconColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  bgColor = "bg-gradient-to-br from-blue-50 to-indigo-50",
  textColor = "text-gray-800",
  iconColor = "text-blue-500",
}) => {
  return (
    <Card className={`overflow-hidden group hover:-translate-y-1 transition-all duration-300 ${bgColor} border-0 shadow-md hover:shadow-xl`}>
      <CardContent className="p-3 sm:p-4 md:p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs sm:text-sm font-medium text-gray-600 mb-1">{title}</p>
            <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${textColor}`}>{value}</h3>
          </div>
          {icon && (
            <div className={`${iconColor} bg-white p-2 sm:p-3 rounded-full shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300`}>
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
