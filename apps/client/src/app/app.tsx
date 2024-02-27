import { useState } from "react";
import { Outlet } from "react-router-dom";
import { MobilePanel } from "./component/mobile-panel.tsx";
import DesktopPanel from "./component/desktop-panel.tsx";
import NavigationBar from "./component/navigation-bar.tsx";
import NavigationContent from "./component/navigation-content.tsx";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div>
        <MobilePanel
          show={sidebarOpen}
          onClose={setSidebarOpen}
          onClick={() => { setSidebarOpen(false); }}
        >
          <NavigationContent closeSidebar={() => { setSidebarOpen(false); }} />
        </MobilePanel>

        {/* Static sidebar for desktop */}
        <DesktopPanel>
          <NavigationContent />
        </DesktopPanel>

        <div className="lg:pl-72">
          <NavigationBar setSidebarOpen={setSidebarOpen} />
          <main className="py-2 sm:py-4 lg:py-6 px-2 sm:px-4 lg:px-6">
            <div className="flex-col space-y-4">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
