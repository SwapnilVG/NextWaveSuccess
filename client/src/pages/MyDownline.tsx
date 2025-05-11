import React from "react";
import Layout from "../components/layout/Layout";
import BinaryTree from "../components/downline/BinaryTree";
import MyDirectTable from "../components/downline/MyDirectTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart, ArrowLeft, ArrowRight, Network } from "lucide-react";

const MyDownline = () => {
  return (
    <Layout>
      <div className="mb-8">
        <div className="flex flex-wrap items-center mb-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-mlm-navy mr-3">My Downline</h1>
          <Badge variant="outline" className="bg-blue-50 text-blue-600">Network</Badge>
        </div>
        <p className="text-sm text-gray-600 flex items-center">
          <Network size={16} className="mr-2" /> View your downline structure, points, and team performance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:gap-8">
        <Card className="shadow-lg overflow-hidden border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="flex items-center text-lg">
              <Users className="mr-2 text-blue-600" size={20} />
              Network Structure
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 overflow-x-auto">
            <BinaryTree />
          </CardContent>
        </Card>
        
        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
            <CardTitle className="flex items-center text-lg">
              <BarChart className="mr-2 text-blue-600" size={20} />
              My Points
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-blue-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowLeft size={16} className="mr-1 sm:mr-2 text-blue-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Left PV</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-blue-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowRight size={16} className="mr-1 sm:mr-2 text-emerald-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Right PV</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-emerald-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowLeft size={16} className="mr-1 sm:mr-2 text-indigo-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Left Match</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-indigo-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowRight size={16} className="mr-1 sm:mr-2 text-purple-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Right Match</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-purple-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowLeft size={16} className="mr-1 sm:mr-2 text-amber-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Left PB</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-amber-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-orange-400 to-orange-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowRight size={16} className="mr-1 sm:mr-2 text-orange-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Right PB</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-orange-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-teal-400 to-teal-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowLeft size={16} className="mr-1 sm:mr-2 text-teal-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Left PB Match</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-teal-700">0</p>
                </CardContent>
              </Card>
              
              <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-0 overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-red-400 to-red-600"></div>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center mb-1 sm:mb-2">
                    <ArrowRight size={16} className="mr-1 sm:mr-2 text-red-500" />
                    <p className="text-xs sm:text-sm font-medium text-gray-600">Right PB Match</p>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-red-700">0</p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
        
        <MyDirectTable />
      </div>
    </Layout>
  );
};

export default MyDownline;
