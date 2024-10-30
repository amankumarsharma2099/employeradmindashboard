import ActivityStream from "./components/ActivityStream/ActivityStream.jsx";
import Dashboard from "./components/Dashboard/Dashboard"
import NearestEvents from "./components/NearestEvents/NearestEvents.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Sidebar from "./components/Sidebar/Sidebar"
import Workload from "./components/Workload/Workload.jsx";
function App() {
return (
    <>
    <Sidebar/>
    <Dashboard/>
    <Workload/>
    <ActivityStream/>
    <NearestEvents/>
    <Projects/>
    </>
  )
}
export default App
