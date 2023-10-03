import Collaborators from "../components/Collaborators"
import Courses from "../components/Courses"
import ExamPreparation from "../components/ExamPreparation"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Problem from "../components/Problem"


const Home = () => {
  return (
    <>
      <Hero />
      <Collaborators />
      <Features />
      <ExamPreparation />
      <Courses />
      <Problem />
    </>
  )
}

export default Home
