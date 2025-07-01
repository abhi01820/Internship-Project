import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import TabSwitcher from "./components/TabSwitcher";
import Spreadsheet from "./components/Spreadsheet";
import FooterTabs from "./components/FooterTabs";
import HeaderSection from "./components/HeaderSection";
import ToolbarActions from "./components/ToolbarActions";


function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Toolbar />
        <ToolbarActions/>
        <TabSwitcher />
        <HeaderSection />
        <Spreadsheet />
        <FooterTabs/>
      </div>
    </div>
  );
}

export default App;
