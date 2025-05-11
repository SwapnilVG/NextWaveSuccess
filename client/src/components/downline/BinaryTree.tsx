import React from "react";
import { Users, User, UserPlus, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TreeNode {
  id: string;
  name: string;
  isActive: boolean;
  children: [TreeNode | null, TreeNode | null];
}

const sampleTreeData: TreeNode = {
  id: "FW2655423",
  name: "Vidyacharan Tangde",
  isActive: true,
  children: [
    {
      id: "FW2655424",
      name: "User One",
      isActive: true,
      children: [null, null],
    },
    {
      id: "FW2655425",
      name: "User Two",
      isActive: false,
      children: [null, null],
    },
  ],
};

const BinaryTree = () => {
  return (
    <div className="overflow-x-auto">
      <div className="flex justify-center min-w-[320px] md:min-w-[800px] p-2 md:p-4">
        <div className="flex flex-col items-center">
          <TreeNodeComponent node={sampleTreeData} level={0} />
        </div>
      </div>
    </div>
  );
};

interface TreeNodeComponentProps {
  node: TreeNode | null;
  level: number;
  position?: "left" | "right";
}

const TreeNodeComponent: React.FC<TreeNodeComponentProps> = ({ node, level, position }) => {
  if (!node) {
    return (
      <div className="flex flex-col items-center">
        <div className="w-24 md:w-36 h-24 md:h-28 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors duration-300 group">
          <div className="text-center">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center mx-auto mb-2 transition-colors duration-300">
              <UserPlus className="text-gray-400 group-hover:text-gray-500 transition-colors duration-300" size={20} />
            </div>
            <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-300">Empty Position</span>
          </div>
        </div>
        
        {level < 2 && (
          <div className="mt-4 md:mt-8 flex space-x-16 md:space-x-28">
            <TreeNodeComponent node={null} level={level + 1} position="left" />
            <TreeNodeComponent node={null} level={level + 1} position="right" />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-40 md:w-56 p-3 md:p-4 rounded-xl flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1
          ${node.isActive 
            ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white" 
            : "bg-white border border-gray-200"}`}
      >
        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full mb-2 md:mb-3 flex items-center justify-center border-2 border-white shadow-md overflow-hidden">
          {node.isActive ? (
            <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center">
              <User className="text-white" size={24} />
            </div>
          ) : (
            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
              <User className="text-gray-500" size={24} />
            </div>
          )}
        </div>
        
        <div className="text-center">
          <p className={`text-xs md:text-sm font-medium ${node.isActive ? "text-blue-100" : "text-gray-600"}`}>{node.id}</p>
          <p className={`text-sm md:text-base font-bold mt-1 ${node.isActive ? "text-white" : "text-gray-800"}`}>{node.name}</p>
          
          <Badge 
            variant={node.isActive ? "success" : "destructive"}
            className="mt-2 px-2 md:px-3 py-0.5 text-xs"
          >
            {node.isActive ? "Active" : "Inactive"}
          </Badge>
        </div>
      </div>
      
      {level < 2 && (
        <>
          <div className="h-6 md:h-10 w-px bg-gray-300"></div>
          
          <div className="flex items-start">
            <div className="flex flex-col items-center relative">
              <div className="h-px w-16 md:w-32 bg-gray-300"></div>
              <div className="h-6 md:h-10 w-px bg-gray-300"></div>
              <div className="absolute -left-3 top-0">
                <ChevronLeft className="text-gray-400" size={16} />
              </div>
              <TreeNodeComponent node={node.children[0]} level={level + 1} position="left" />
            </div>
            
            <div className="flex flex-col items-center relative">
              <div className="h-px w-16 md:w-32 bg-gray-300"></div>
              <div className="h-6 md:h-10 w-px bg-gray-300"></div>
              <div className="absolute -right-3 top-0">
                <ChevronRight className="text-gray-400" size={16} />
              </div>
              <TreeNodeComponent node={node.children[1]} level={level + 1} position="right" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BinaryTree;
