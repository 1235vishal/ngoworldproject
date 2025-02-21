import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout"; // Import Layout component

import AcharyaBrahaspati from "./pages/AboutUs/AcharyaBrahaspati";
import ImageGallery from "./pages/AboutUs/ImageGallery";
import Members from "./pages/AboutUs/Members";
import OurMission from "./pages/AboutUs/OurMission";
import VisionAndMission from "./pages/AboutUs/VisionAndMission";
import ABTBlog from "./pages/Archives/ABTBlog";
import Archives from "./pages/Archives/Archives";
import Contact from "./pages/Contact";
import Events from "./pages/Events/Events";
import RecentEvents from "./pages/Events/RecentEvents";
import UpcomingEvents from "./pages/Events/UpcomingEvents";
import ArtandCultureSessions from "./pages/Explore/ArtandCultureSessions";
import ClassicalDanceSessions from "./pages/Explore/ClassicalDanceSessions";
import ClassicalMusicSessions from "./pages/Explore/ClassicalMusicSessions";
import Explore from "./pages/Explore/Explore";
import Podcasts from "./pages/Explore/Podcasts";
import UpcomingSessions from "./pages/Explore/UpcomingSessions";
import SupportUs from "./pages/SupportUs";
import ArtistForm from "./pages/WorkWithUs/ArtistForm";
import CorporateForm from "./pages/WorkWithUs/CorporateForm";
import IndividualForm from "./pages/WorkWithUs/IndividualForm";
import InternForm from "./pages/WorkWithUs/InternForm";
import VolunteerForm from "./pages/WorkWithUs/VolunteerForm";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes use Layout, which includes the Navbar */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="events/recent" element={<RecentEvents />} />
          <Route path="events/upcoming" element={<UpcomingEvents />} />
          <Route path="explore" element={<Explore />} />
          <Route path="explore/classical-music" element={<ClassicalMusicSessions />} />
          <Route path="explore/classical-dance" element={<ClassicalDanceSessions />} />
          <Route path="explore/art-culture" element={<ArtandCultureSessions />} />
          <Route path="explore/upcoming-sessions" element={<UpcomingSessions />} />
          <Route path="explore/podcasts" element={<Podcasts />} />
          <Route path="archives" element={<Archives />} />
          <Route path="archives/blog" element={<ABTBlog />} />
          <Route path="about/vision-mission" element={<VisionAndMission />} />
          <Route path="about/acharya-brahaspati" element={<AcharyaBrahaspati />} />
          <Route path="about/members" element={<Members />} />
          <Route path="gallery" element={<ImageGallery />} />
          <Route path="about/OurMission" element={<OurMission />} />
          <Route path="work/corporate-form" element={<CorporateForm />} />
          <Route path="work/volunteer-form" element={<VolunteerForm />} />
          <Route path="work/individual-form" element={<IndividualForm />} />
          <Route path="work/intern-form" element={<InternForm />} />
          <Route path="work/artist-form" element={<ArtistForm />} />
          <Route path="supportus" element={<SupportUs />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
