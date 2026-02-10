import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InnovationChallenge from "./pages/InnovationChallenge";
import UpcomingConferences from "./pages/UpcomingConferences";
import RecentConferences from "./pages/RecentConferences";
import Proceedings from "./pages/Proceedings";
import PastSpeakers from "./pages/PastSpeakers";
import AdvisorySpeakers from "./pages/AdvisorySpeakers";
import Registrations from "./pages/Registrations";
import Books from "./pages/Books";
import ShareYourStory from "./pages/ShareYourStory";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/innovation-challenge" element={<InnovationChallenge />} />
          <Route path="/upcoming-conferences" element={<UpcomingConferences />} />
          <Route path="/recent-conferences" element={<RecentConferences />} />
          <Route path="/proceedings" element={<Proceedings />} />
          <Route path="/past-speakers" element={<PastSpeakers />} />
          <Route path="/advisory-speakers" element={<AdvisorySpeakers />} />
          <Route path="/registrations" element={<Registrations />} />
          <Route path="/books" element={<Books />} />
          <Route path="/share-your-story" element={<ShareYourStory />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
