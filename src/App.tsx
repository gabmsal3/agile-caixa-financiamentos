
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import ServicosPage from "./pages/ServicosPage";
import SobrePage from "./pages/SobrePage";
import ContatoPage from "./pages/ContatoPage";
import NotFound from "./pages/NotFound";

// Admin Pages
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import TextsPage from "./pages/admin/TextsPage";
import ContactInfoPage from "./pages/admin/ContactInfoPage";
import ServiceItemsPage from "./pages/admin/ServiceItemsPage";
import SettingsPage from "./pages/admin/SettingsPage";
import AdminLayout from "./components/admin/AdminLayout";
import ProtectedRoute from "./components/admin/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Toaster />
        <Sonner />
        <Routes>
          {/* Site Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/servicos" element={<ServicosPage />} />
          <Route path="/sobre" element={<SobrePage />} />
          <Route path="/contato" element={<ContatoPage />} />
          
          {/* Admin Routes */}
          <Route path="/adm/login" element={<LoginPage />} />
          <Route path="/adm" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="texts" element={<TextsPage />} />
            <Route path="contact-info" element={<ContactInfoPage />} />
            <Route path="service-items" element={<ServiceItemsPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="" element={<DashboardPage />} />
          </Route>
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
