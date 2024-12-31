import { ScrollArea } from "@/components/ui/scroll-area";
import Header from "./Header";
import UserOnboarding from "@/components/custom/UserOnboarding";

interface LayoutWrapperProps {
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<LayoutWrapperProps> = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Header />
      <ScrollArea className="h-full w-full bg-muted rounded-md p-1 overflow-x-hidden">
        {children}
      </ScrollArea>
      {/* <UserOnboarding /> */}
    </div>
  );
};

export default LayoutWrapper;
