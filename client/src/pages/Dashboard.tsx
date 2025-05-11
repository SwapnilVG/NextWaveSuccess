import React from "react";
import { Users, User, DollarSign, Star, Award, Activity, ChevronRight, Clock } from "lucide-react";
import Layout from "../components/layout/Layout";
import StatCard from "../components/dashboard/StatCard";
import UserInfoCard from "../components/dashboard/UserInfoCard";
import ProfileCard from "../components/dashboard/ProfileCard";
import QuickLinks from "../components/dashboard/QuickLinks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const currentTime = new Date().toLocaleString();
  
  // This would come from API in a real app
  const userStats = {
    productStatus: "PAID 24 4 25 Divesh",
    directCount: 3,
    teamCount: 5,
    dailyIncome: 240.00,
    totalIncome: 1800.00,
    rank: "Distributor",
    status: "Active",
    performance: 90.50
  };
  
  return (
    <Layout>
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-mlm-navy mb-2 flex flex-wrap items-center">
          Dashboard
          <Badge variant="outline" className="ml-0 sm:ml-3 mt-2 sm:mt-0 bg-blue-50 text-mlm-navy">
            Welcome Back
          </Badge>
        </h1>
        <p className="text-sm text-gray-600 flex items-center">
          <Clock size={14} className="mr-1" /> Last updated: {currentTime}
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        <UserInfoCard
          name="Rahul Vijay Waghmare"
          id="FW2655423"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          <StatCard
            title="My Direct"
            value={userStats.directCount}
            icon={<Users size={20} className="text-blue-600" />}
            bgColor="bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100"
          />
          <StatCard
            title="My Team"
            value={userStats.teamCount}
            icon={<Users size={20} className="text-indigo-600" />}
            bgColor="bg-gradient-to-br from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100"
          />
          <StatCard
            title="Daily Income"
            value={`₹${userStats.dailyIncome.toFixed(2)}`}
            icon={<DollarSign size={20} className="text-green-600" />}
            bgColor="bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100"
          />
          <StatCard
            title="Total Income"
            value={`₹${userStats.totalIncome.toFixed(2)}`}
            icon={<DollarSign size={20} className="text-emerald-600" />}
            bgColor="bg-gradient-to-br from-emerald-50 to-teal-50 hover:from-emerald-100 hover:to-teal-100"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          <StatCard
            title="My Rank"
            value={userStats.rank}
            icon={<Award size={20} className="text-yellow-600" />}
            bgColor="bg-gradient-to-br from-yellow-50 to-amber-50 hover:from-yellow-100 hover:to-amber-100"
          />
          <StatCard
            title="My Status"
            value={userStats.status}
            icon={<User size={20} className={userStats.status === "Active" ? "text-green-600" : "text-red-600"} />}
            bgColor={userStats.status === "Active" 
              ? "bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100" 
              : "bg-gradient-to-br from-red-50 to-orange-50 hover:from-red-100 hover:to-orange-100"}
            textColor={userStats.status === "Active" ? "text-green-700" : "text-red-700"}
          />
          <StatCard
            title="Performance"
            value={`${userStats.performance.toFixed(2)}%`}
            icon={<Activity size={20} className="text-purple-600" />}
            bgColor="bg-gradient-to-br from-purple-50 to-violet-50 hover:from-purple-100 hover:to-violet-100"
          />
        </div>
        
        <QuickLinks />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <ProfileCard
            id="FW2655423"
            name="Rahul Vijay Waghmare"
            sponsor="Fw2694692 Vishal Kumar Sharma"
            mobile="8485051063"
            team="Team B"
            pancard=""
            joinDate="23/04/2025"
            activeDate="23/04/2025"
            joinAmount="1800.00"
          />
          
          <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
              <CardTitle>Product Status & Activities</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-base font-medium text-mlm-navy mb-2">Product Status</h3>
                <p className="text-gray-700 bg-gray-50 p-3 rounded-md text-sm sm:text-base">{userStats.productStatus}</p>
              </div>
              
              <div>
                <h3 className="text-base font-medium text-mlm-navy mb-3">Recent Activities</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                    <div>
                      <p className="font-medium text-sm sm:text-base">Registration Completed</p>
                      <p className="text-xs sm:text-sm text-gray-500">23/04/2025</p>
                    </div>
                    <ChevronRight size={18} className="text-blue-400 group-hover:text-mlm-navy transition-colors duration-300" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                    <div>
                      <p className="font-medium text-sm sm:text-base">Product Purchase</p>
                      <p className="text-xs sm:text-sm text-gray-500">23/04/2025</p>
                    </div>
                    <ChevronRight size={18} className="text-blue-400 group-hover:text-mlm-navy transition-colors duration-300" />
                  </li>
                  <li className="flex justify-between items-center p-3 bg-white rounded-lg border border-gray-100 shadow-sm hover:border-blue-200 hover:bg-blue-50 transition-all duration-300">
                    <div>
                      <p className="font-medium text-sm sm:text-base">Account Activated</p>
                      <p className="text-xs sm:text-sm text-gray-500">23/04/2025</p>
                    </div>
                    <ChevronRight size={18} className="text-blue-400 group-hover:text-mlm-navy transition-colors duration-300" />
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
