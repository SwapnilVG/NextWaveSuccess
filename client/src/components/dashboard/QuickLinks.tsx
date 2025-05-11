import React from "react";
import { Link } from "react-router-dom";
import { Wallet, Users, User, CreditCard, File, Settings } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";

const QuickLinks = () => {
  const links = [
    {
      title: "Income Wallet",
      icon: <Wallet size={20} className="mb-2 md:mb-3" />,
      to: "/dashboard",
      color: "from-blue-500 to-blue-600",
      description: "View your earnings",
    },
    {
      title: "My Direct",
      icon: <Users size={20} className="mb-2 md:mb-3" />,
      to: "/my-downline",
      color: "from-green-500 to-emerald-600",
      description: "View your team",
    },
    {
      title: "My Profile",
      icon: <User size={20} className="mb-2 md:mb-3" />,
      to: "/edit-profile",
      color: "from-purple-500 to-indigo-600",
      description: "Update your info",
    },
    {
      title: "Manage Pins",
      icon: <CreditCard size={20} className="mb-2 md:mb-3" />,
      to: "/unused-pins",
      color: "from-amber-500 to-orange-600",
      description: "Manage E-pins",
    },
    {
      title: "Documents",
      icon: <File size={20} className="mb-2 md:mb-3" />,
      to: "/welcome-letter",
      color: "from-cyan-500 to-teal-600",
      description: "View your files",
    },
    {
      title: "Settings",
      icon: <Settings size={20} className="mb-2 md:mb-3" />,
      to: "/dashboard",
      color: "from-gray-600 to-gray-700",
      description: "Manage account",
    }
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b py-3 md:pb-4">
        <CardTitle className="text-mlm-navy text-base sm:text-lg">Quick Access</CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="group flex flex-col items-center justify-center text-center bg-white border border-gray-100 p-3 sm:p-4 rounded-xl hover:bg-gradient-to-br hover:text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md hover:shadow-lg"
              style={{ 
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mb-2 text-white bg-gradient-to-br ${link.color} shadow-md group-hover:bg-white group-hover:text-current group-hover:scale-110 transition-all duration-300`}>
                {link.icon}
              </div>
              <span className="font-medium text-xs sm:text-sm text-gray-800 group-hover:text-white transition-colors duration-300">{link.title}</span>
              <span className="text-[10px] sm:text-xs text-gray-500 mt-1 group-hover:text-white opacity-80 transition-colors duration-300 hidden sm:block">{link.description}</span>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickLinks;
