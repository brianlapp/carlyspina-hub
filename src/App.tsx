import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import SpinalEnergetics from "./pages/SpinalEnergetics";
import Reiki from "./pages/Reiki";
import ReikiTraining from "./pages/ReikiTraining";
import AkashicRecords from "./pages/AkashicRecords";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/spinal-energetics" element={<SpinalEnergetics />} />
          <Route path="/reiki" element={<Reiki />} />
          <Route path="/reiki-training" element={<ReikiTraining />} />
          <Route path="/akashic-records" element={<AkashicRecords />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;