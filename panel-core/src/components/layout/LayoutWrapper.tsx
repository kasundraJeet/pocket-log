import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "./Header";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <ScrollArea className="h-full w-full bg-muted rounded-md p-1 overflow-x-hidden">{children}</ScrollArea>
    </div>
  );
};

export default LayoutWrapper;
