import Adminlayout from "./Admin-layout/Adminlayout";
import Sidebar from "./Admin-layout/Sidebar";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Sidebar />
        <Adminlayout />
      </div>
    </>
  );
};

export default App;
