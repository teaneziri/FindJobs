import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import HomeCards from "./components/HomeCards"
import JobsListings from "./components/JobsListings"
import ViewAllJobs from "./components/ViewAllJobs"

const App = () => {
  return (
    <>
     <Navbar />
     <Hero title='Become a React Dev' subtitle="Find the React job that fits your skills and needs"/>
     <HomeCards />
     <JobsListings />
     <ViewAllJobs />
    </>
  )
}

export default App