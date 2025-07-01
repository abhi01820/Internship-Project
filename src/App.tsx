import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import TabSwitcher from "./components/TabSwitcher";
import Spreadsheet from "./components/Spreadsheet";

function App() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <Toolbar />
        <TabSwitcher />
        <Spreadsheet />
      </div>
    </div>
  );
}

export default App;
