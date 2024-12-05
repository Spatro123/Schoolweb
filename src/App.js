import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header';
import Banner from './Banner';
import Events from './Events';
import About from './aboutus';
import Whyus from './Whyus';
import Start from './Starts';
import Footer from './Footer';
import Page2 from './Page2';
import classes from './App.module.css';
import AcademicsPage from './AcademicsPage';
import Ourteam from "./Ourteam";
import Contactus from "./Contactus";
import Addmission from "./Addmission";
import AcademicPrograms from './AcademicPrograms';
import StudentLife from './StudentLife';
import CoursesPage from './CoursesPage';
import Count from './Count';
import Gallery from './GalleryComponent';
import RulesAndRegulations from './Rulesandregulation';
import Library from './Librarypage';
import NewsPage from './Newspage';
import Article from "./Article";
import Abouttoppage from "./Abouttoppage";
import WelcomeCard from './Wordfromfounder';
import NoticePage from './NoticePage';
import MissionVision from './Missionvissionpage';
import ResearchPage from './Research';
import ResearchSpotlight from './ResearchSpotlight';
import EventPage from './EventPage';
import Parenttestimonial from "./ParentTestimonial";
import Result from "./Result";
import PrincipalFounder from './PrincipalFounder';
import Testimonialhome from './Testimonialhome';
import Header1 from './Header1';
import Virtualtour from './Virtualtour';
import CampusLifePage from './Campuslife';
import Recognitions from './Recogination';
import Infrastructure from './Infrastructure';


function App() {
  return (
    <div className={classes.App}>
      <Header1 />
      <Routes>
        <Route path="/" element={
          <>
            <Banner />
            <div className={classes.content}>
              <Events />
            </div>
            <Count />
            <About />
            <PrincipalFounder />
            <CoursesPage />
            <Virtualtour />
            <CampusLifePage />
            <Recognitions />
            <Parenttestimonial />
            <ResearchSpotlight />
            {/* <Whyus /> */}
            <Start />
          </>
        } />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/academicpage" element={<AcademicsPage />} /> 
        <Route path="/ourteam" element={<Ourteam />} /> 
        <Route path="/contactus" element={<Contactus />} /> 
        <Route path="/addmission" element={<Addmission />} /> 
        <Route path="/academicprograms" element={<AcademicPrograms />} /> 
        <Route path="/studentlife" element={<StudentLife />} /> 
        <Route path="/gallery" element={<Gallery />} /> 
        <Route path="/rulesandregulations" element={<RulesAndRegulations />} /> 
        <Route path="/library" element={<Library />} /> 
        <Route path="/news-page" element={<NewsPage />} /> 
        <Route path="/article" element={<Article />} /> 
        <Route path="/history" element={<Abouttoppage />} /> 
        <Route path="/welcomecard" element={<WelcomeCard />} /> 
        <Route path="/notices" element={<NoticePage />} /> 
        <Route path="/missionvission" element={<MissionVision />} /> 
        <Route path="/research" element={<ResearchPage />} /> 
        <Route path="/event" element={<EventPage />} /> 
        <Route path="/parenttestimonial" element={<Parenttestimonial />} /> 
        <Route path="/infrastruture" element={<Infrastructure />} /> 


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
