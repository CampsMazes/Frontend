import Collaborators from "../components/Collaborators"
import Courses from "../components/Courses"
import ExamPreparation from "../components/ExamPreparation"
import Features from "../components/Features"
import Hero from "../components/Hero"
import Problem from "../components/Problem"
import Feedback from "../components/Feedback"
import Counsellor from "../components/Counsellor"
import Faq from "../components/Faq"

const Home = () => {
  return (
    <>
      <Hero />
      <Collaborators />
      <Features />
      <ExamPreparation />
      <Courses />
      <Problem />
      <Feedback />
      <Counsellor />
      <Faq />
    </>
  )
}

export default Home
