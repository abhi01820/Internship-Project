import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import TabSwitcher from "./components/TabSwitcher";
import HeaderSection from "./components/HeaderSection";
import Spreadsheet from "./components/Spreadsheet";
import FooterTabs from "./components/FooterTabs";
import AvatarGroup from "./components/AvatarGroup";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen max-h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Fixed Top Section */}
        <Header />
        <Toolbar />
        <TabSwitcher />
        <HeaderSection />

        {/* Scrollable Content Below */}
        <div className="flex-1 overflow-y-auto">
          <Spreadsheet />
          <AvatarGroup />
          <FooterTabs />
        </div>
      </div>
    </div>
  );
}

export default App;
