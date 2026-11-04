import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  User, 
  Code, 
  Globe, 
  Download, 
  Sparkles, 
  Plus, 
  Trash2, 
  ChevronDown, 
  ChevronUp, 
  FileText, 
  Share2, 
  Copy, 
  Check, 
  Palette, 
  Layout, 
  Eye, 
  RefreshCw, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github,
  ExternalLink,
  Sliders,
  Maximize2,
  FolderGit2,
  Award,
  Wand2,
  CheckCircle2,
  AlertCircle,
  Type,
  Layers,
  Settings2,
  Image as ImageIcon,
  Upload,
  X,
  FileCheck
} from 'lucide-react';

// Sample Data with certificates and images
const SAMPLE_DATA = {
  personalInfo: {
    fullName: "Elena Rostova",
    title: "Senior Lead Product Designer & Frontend Strategist",
    email: "elena.rostova@designstudio.io",
    phone: "+34 612 890 456",
    location: "Madrid, España",
    website: "https://elenarostova.dev",
    linkedin: "linkedin.com/in/elena-rostova",
    github: "github.com/elena-design",
    summary: "Diseñadora de Producto Senior con más de 8 años de experiencia liderando equipos de diseño e interfaz de usuario en SaaS de alto impacto. Especializada en Design Systems escalables, arquitectura Frontend en React/Tailwind y optimización de conversión UX. Enfocada en unir visión de negocio y elegancia estética."
  },
  experience: [
    {
      id: "exp-1",
      role: "Lead UI/UX Designer & Frontend Architect",
      company: "Nexus Tech Solutions",
      period: "2021 - Presente",
      location: "Madrid (Híbrido)",
      description: "Lideré la reestructuración completa del sistema de diseño empresarial, reduciendo el tiempo de desarrollo UI en un 40%.\n- Dirigí a un equipo multidisciplinario de 6 diseñadores y 10 desarrolladores.\n- Implementé metodologías de testeo de usabilidad con más de 500 usuarios reales."
    },
    {
      id: "exp-2",
      role: "Senior Product Designer",
      company: "Vanguard Apps Lab",
      period: "2018 - 2021",
      location: "Barcelona, España",
      description: "Diseño end-to-end para plataformas Fintech transaccionales.\n- Incrementé la tasa de conversión de registro de un 12% a un 28% mediante un flujo optimizado.\n- Creación de prototipos interactivos de alta fidelidad."
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Máster en Diseño de Interacción y Experiencia de Usuario",
      institution: "Universidad Politécnica de Madrid",
      period: "2017 - 2018",
      location: "Madrid, España"
    },
    {
      id: "edu-2",
      degree: "Grado en Ingeniería Multimedia",
      institution: "Universidad de Valencia",
      period: "2013 - 2017",
      location: "Valencia, España"
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Design System Fajsa UI",
      link: "https://fajsa-ui.dev",
      description: "Librería de componentes UI accesible y modular en Tailwind CSS y React con más de 10k descargas mensuales."
    },
    {
      id: "proj-2",
      title: "Fintech Dashboard Analytics",
      link: "https://github.com/elena-design/analytics",
      description: "Panel de control financiero en tiempo real utilizando Next.js, Recharts y WebSockets."
    }
  ],
  certifications: [
    { 
      id: "cert-1", 
      name: "AWS Certified Solutions Architect", 
      issuer: "Amazon Web Services", 
      year: "2023",
      credentialUrl: "https://aws.amazon.com/verification",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='100%' height='100%' fill='%231e293b'/><rect x='10' y='10' width='280' height='180' fill='none' stroke='%236366f1' stroke-width='2'/><text x='150' y='80' font-family='sans-serif' font-size='16' font-weight='bold' fill='%23ffffff' text-anchor='middle'>CERTIFICADO DE LOGRO</text><text x='150' y='110' font-family='sans-serif' font-size='12' fill='%23818cf8' text-anchor='middle'>AWS Solutions Architect</text><text x='150' y='140' font-family='sans-serif' font-size='10' fill='%2394a3b8' text-anchor='middle'>Otorgado a Elena Rostova • 2023</text></svg>"
    },
    { 
      id: "cert-2", 
      name: "NN/g UX Master Certification", 
      issuer: "Nielsen Norman Group", 
      year: "2022",
      credentialUrl: "https://nngroup.com/ux-master",
      image: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='100%' height='100%' fill='%230f172a'/><rect x='10' y='10' width='280' height='180' fill='none' stroke='%2310b981' stroke-width='2'/><text x='150' y='80' font-family='sans-serif' font-size='16' font-weight='bold' fill='%23ffffff' text-anchor='middle'>DIPLOMA ESPECIALISTA UX</text><text x='150' y='110' font-family='sans-serif' font-size='12' fill='%2334d399' text-anchor='middle'>Nielsen Norman Group</text><text x='150' y='140' font-family='sans-serif' font-size='10' fill='%2394a3b8' text-anchor='middle'>Certificado #94821 • 2022</text></svg>"
    }
  ],
  skills: [
    { name: "Figma / Design Systems", level: 95 },
    { name: "React.js & Next.js", level: 90 },
    { name: "Tailwind CSS / UI Styling", level: 95 },
    { name: "Investigación UX & Testing", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Gestión de Producto (Agile)", level: 85 }
  ],
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1 - Avanzado Profesional" },
    { name: "Alemán", level: "B1 - Intermedio" }
  ]
};

const EMPTY_DATA = {
  personalInfo: { fullName: "", title: "", email: "", phone: "", location: "", website: "", linkedin: "", github: "", summary: "" },
  experience: [],
  education: [],
  projects: [],
  certifications: [],
  skills: [],
  languages: []
};

const COLOR_THEMES = [
  { id: 'indigo', name: 'Índigo Neón', primary: '#6366f1', secondary: '#e0e7ff', text: '#312e81', bg: '#f5f3ff' },
  { id: 'emerald', name: 'Esmeralda', primary: '#10b981', secondary: '#d1fae5', text: '#064e3b', bg: '#ecfdf5' },
  { id: 'cyan', name: 'Cian Pro', primary: '#06b6d4', secondary: '#cffaff', text: '#164e63', bg: '#ecfeff' },
  { id: 'rose', name: 'Rosa Neón', primary: '#f43f5e', secondary: '#ffe4e6', text: '#881337', bg: '#fff1f2' },
  { id: 'amber', name: 'Ámbar Cálido', primary: '#f59e0b', secondary: '#fef3c7', text: '#78350f', bg: '#fffbeb' },
  { id: 'slate', name: 'Gris Oscuro', primary: '#334155', secondary: '#f1f5f9', text: '#0f172a', bg: '#f8fafc' },
];

const FONTS = [
  { id: 'sans', name: 'Sans-Serif Moderno', value: 'font-sans' },
  { id: 'serif', name: 'Serif Clásico', value: 'font-serif' },
  { id: 'mono', name: 'Monospace Tech', value: 'font-mono' }
];

export default function App() {
  const [cvData, setCvData] = useState(SAMPLE_DATA);
  const [template, setTemplate] = useState('modern'); // 'modern', 'executive', 'minimal'
  const [themeColor, setThemeColor] = useState(COLOR_THEMES[0]);
  const [fontFamily, setFontFamily] = useState(FONTS[0]);
  const [activeTab, setActiveTab] = useState('personal');
  const [isExporting, setIsExporting] = useState(false);
  const [showAtsChecker, setShowAtsChecker] = useState(false);
  const [previewImageModal, setPreviewImageModal] = useState(null);
  const [showCertImagesInPdf, setShowCertImagesInPdf] = useState(true);

  const cvPreviewRef = useRef(null);

  useEffect(() => {
    if (!window.html2pdf) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const calculateAtsScore = () => {
    let score = 0;
    if (cvData.personalInfo.fullName) score += 15;
    if (cvData.personalInfo.email && cvData.personalInfo.phone) score += 15;
    if (cvData.personalInfo.summary?.length > 50) score += 20;
    if (cvData.experience.length > 0) score += 20;
    if (cvData.education.length > 0) score += 15;
    if (cvData.skills.length >= 3) score += 15;
    return Math.min(score, 100);
  };

  const atsScore = calculateAtsScore();

  const enhanceSummaryWithAI = () => {
    const title = cvData.personalInfo.title || "Profesional";
    const aiText = `${title} orientad@ a resultados y con sólida trayectoria técnica. Apasionad@ por la innovación, el trabajo colaborativo en equipos ágiles y la entrega de soluciones escalables de alto valor de negocio.`;
    handlePersonalChange('summary', aiText);
  };

  const handleDownloadPDF = () => {
    if (!cvPreviewRef.current) return;
    setIsExporting(true);

    const element = cvPreviewRef.current;
    
    const opt = {
      margin: 0,
      filename: `${cvData.personalInfo.fullName.replace(/\s+/g, '_') || 'CV'}_fajsa.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, logging: false },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    if (window.html2pdf) {
      window.html2pdf()
        .set(opt)
        .from(element)
        .save()
        .then(() => setIsExporting(false))
        .catch(err => {
          console.error("PDF Export error:", err);
          setIsExporting(false);
        });
    } else {
      alert("Cargando la librería de exportación PDF. Reintenta en unos segundos.");
      setIsExporting(false);
    }
  };

  const handlePersonalChange = (field, value) => {
    setCvData(prev => ({ ...prev, personalInfo: { ...prev.personalInfo, [field]: value } }));
  };

  const addItem = (section, newItem) => {
    setCvData(prev => ({ ...prev, [section]: [...prev[section], newItem] }));
  };

  const updateItem = (section, id, field, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: prev[section].map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeItem = (section, id) => {
    setCvData(prev => ({ ...prev, [section]: prev[section].filter(item => item.id !== id) }));
  };

  // Image upload helper for certifications
  const handleImageUpload = (certId, e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("La imagen es demasiado grande. Por favor selecciona una de menos de 5MB.");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        updateItem('certifications', certId, 'image', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans antialiased selection:bg-indigo-500 selection:text-white">
      
      {/* HEADER NAV */}
      <header className="h-16 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md px-4 md:px-8 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
            <Sparkles className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <span className="font-black text-xl tracking-wider bg-gradient-to-r from-white via-zinc-200 to-indigo-400 bg-clip-text text-transparent">
              fajsa
            </span>
            <span className="hidden sm:inline-block text-[10px] font-bold tracking-widest uppercase ml-2 px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
              Studio Pro
            </span>
          </div>
        </div>

        {/* Quick Action Toolbar */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setShowAtsChecker(!showAtsChecker)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-all shadow-sm"
          >
            <CheckCircle2 className={`w-3.5 h-3.5 ${atsScore >= 80 ? 'text-emerald-400' : 'text-amber-400'}`} />
            <span>ATS Score: <strong className="text-indigo-400">{atsScore}%</strong></span>
          </button>

          <button
            onClick={() => setCvData(SAMPLE_DATA)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 rounded-lg border border-zinc-800 transition-all"
            title="Cargar datos de ejemplo"
          >
            <RefreshCw className="w-3.5 h-3.5 text-indigo-400" />
            <span className="hidden md:inline">Ejemplo</span>
          </button>

          <button
            onClick={() => setCvData(EMPTY_DATA)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-400 hover:text-rose-400 bg-zinc-900 hover:bg-zinc-800/40 rounded-lg border border-zinc-800 transition-all"
            title="Limpiar campos"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span className="hidden md:inline">Limpiar</span>
          </button>

          <div className="h-4 w-px bg-zinc-800 mx-1 hidden sm:block"></div>

          {/* MAIN DOWNLOAD BUTTON */}
          <button
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 hover:from-indigo-500 hover:to-purple-500 active:scale-95 rounded-lg shadow-lg shadow-indigo-500/25 border border-indigo-400/30 transition-all"
          >
            {isExporting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Exportando...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Descargar PDF</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* ATS CHECKER MODAL BANNER */}
      {showAtsChecker && (
        <div className="bg-indigo-950/80 border-b border-indigo-500/30 px-6 py-3 flex items-center justify-between text-xs text-indigo-200">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <div>
              <strong className="text-white">Optimizador ATS (Applicant Tracking Systems):</strong> Tu CV tiene un cumplimiento del {atsScore}%.
              {atsScore < 80 ? " Añade un resumen amplio, al menos 3 habilidades y tu experiencia detallada para superar filtros automáticos." : " ¡Tu hoja de vida tiene un formato óptimo para reclutadores!"}
            </div>
          </div>
          <button onClick={() => setShowAtsChecker(false)} className="text-zinc-400 hover:text-white">✕</button>
        </div>
      )}

      {/* MAIN WORKSPACE split view */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* LEFT PANEL: REALTIME FORM EDITOR */}
        <div className="w-full lg:w-[46%] xl:w-[44%] flex flex-col border-b lg:border-b-0 lg:border-r border-zinc-800/80 bg-zinc-950">
          
          {/* TAB NAVIGATION */}
          <div className="flex border-b border-zinc-800/80 bg-zinc-900/60 p-2 overflow-x-auto no-scrollbar gap-1">
            {[
              { id: 'personal', label: 'Contacto', icon: User },
              { id: 'experience', label: 'Experiencia', icon: Briefcase },
              { id: 'education', label: 'Estudios', icon: GraduationCap },
              { id: 'certifications', label: 'Certificados & Adjuntos', icon: Award },
              { id: 'projects', label: 'Proyectos', icon: FolderGit2 },
              { id: 'skills', label: 'Skills & Idiomas', icon: Code },
              { id: 'style', label: 'Estilo & Diseño', icon: Palette }
            ].map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-zinc-500'}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* FORM CONTAINER */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-6 custom-scrollbar">

            {/* 1. PERSONAL & SOCIAL */}
            {activeTab === 'personal' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    <User className="w-4 h-4 text-indigo-400" />
                    Perfil & Datos de Contacto
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Nombre Completo</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.fullName}
                      onChange={(e) => handlePersonalChange('fullName', e.target.value)}
                      placeholder="Ej. María García"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Titular / Cargo</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.title}
                      onChange={(e) => handlePersonalChange('title', e.target.value)}
                      placeholder="Ej. Senior Frontend Architect"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Email</label>
                    <input
                      type="email"
                      value={cvData.personalInfo.email}
                      onChange={(e) => handlePersonalChange('email', e.target.value)}
                      placeholder="correo@ejemplo.com"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Teléfono</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.phone}
                      onChange={(e) => handlePersonalChange('phone', e.target.value)}
                      placeholder="+34 600 000 000"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Ubicación</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.location}
                      onChange={(e) => handlePersonalChange('location', e.target.value)}
                      placeholder="Madrid, España"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Portfolio Web</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.website}
                      onChange={(e) => handlePersonalChange('website', e.target.value)}
                      placeholder="https://mitrabajo.dev"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">LinkedIn</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.linkedin}
                      onChange={(e) => handlePersonalChange('linkedin', e.target.value)}
                      placeholder="linkedin.com/in/usuario"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">GitHub</label>
                    <input
                      type="text"
                      value={cvData.personalInfo.github}
                      onChange={(e) => handlePersonalChange('github', e.target.value)}
                      placeholder="github.com/usuario"
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg px-3 py-2 text-xs text-zinc-100 outline-none transition-all"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-medium text-zinc-400">Resumen Profesional</label>
                      <button
                        onClick={enhanceSummaryWithAI}
                        className="flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        <Wand2 className="w-3 h-3" />
                        <span>Sugerir con IA</span>
                      </button>
                    </div>
                    <textarea
                      rows={4}
                      value={cvData.personalInfo.summary}
                      onChange={(e) => handlePersonalChange('summary', e.target.value)}
                      placeholder="Escribe un extracto profesional sintético e impactante..."
                      className="w-full bg-zinc-900 border border-zinc-800 focus:border-indigo-500 rounded-lg p-3 text-xs text-zinc-100 outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* 2. EXPERIENCE */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                    Experiencia Laboral
                  </h2>
                  <button
                    onClick={() => addItem('experience', { id: `exp-${Date.now()}`, role: "", company: "", period: "", location: "", description: "" })}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>

                {cvData.experience.map((exp) => (
                  <div key={exp.id} className="p-4 bg-zinc-900/90 border border-zinc-800/90 rounded-xl space-y-3 relative">
                    <button
                      onClick={() => removeItem('experience', exp.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Cargo</label>
                        <input
                          type="text"
                          value={exp.role}
                          onChange={(e) => updateItem('experience', exp.id, 'role', e.target.value)}
                          placeholder="Ej. Lead Frontend"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Empresa</label>
                        <input
                          type="text"
                          value={exp.company}
                          onChange={(e) => updateItem('experience', exp.id, 'company', e.target.value)}
                          placeholder="Ej. Acme Corp"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Periodo</label>
                        <input
                          type="text"
                          value={exp.period}
                          onChange={(e) => updateItem('experience', exp.id, 'period', e.target.value)}
                          placeholder="2021 - Presente"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Ubicación</label>
                        <input
                          type="text"
                          value={exp.location}
                          onChange={(e) => updateItem('experience', exp.id, 'location', e.target.value)}
                          placeholder="Madrid, España"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Descripción / Logros</label>
                        <textarea
                          rows={3}
                          value={exp.description}
                          onChange={(e) => updateItem('experience', exp.id, 'description', e.target.value)}
                          placeholder="- Lideré desarrollo...\n- Incrementé rendimiento..."
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-100 outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 3. EDUCATION */}
            {activeTab === 'education' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-indigo-400" />
                    Estudios y Titulaciones
                  </h2>
                  <button
                    onClick={() => addItem('education', { id: `edu-${Date.now()}`, degree: "", institution: "", period: "", location: "" })}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>

                {cvData.education.map((edu) => (
                  <div key={edu.id} className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-3 relative">
                    <button
                      onClick={() => removeItem('education', edu.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Título / Carrera</label>
                        <input
                          type="text"
                          value={edu.degree}
                          onChange={(e) => updateItem('education', edu.id, 'degree', e.target.value)}
                          placeholder="Ej. Grado en Ingeniería Informática"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Institución / Universidad</label>
                        <input
                          type="text"
                          value={edu.institution}
                          onChange={(e) => updateItem('education', edu.id, 'institution', e.target.value)}
                          placeholder="Ej. Universidad Complutense"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Periodo</label>
                        <input
                          type="text"
                          value={edu.period}
                          onChange={(e) => updateItem('education', edu.id, 'period', e.target.value)}
                          placeholder="2016 - 2020"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 4. CERTIFICATIONS & DIPLOMA IMAGES (FEATURED NEW FUNCTIONALITY) */}
            {activeTab === 'certifications' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div>
                    <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Award className="w-4 h-4 text-indigo-400" />
                      Certificados, Diplomas y Adjuntos
                    </h2>
                    <p className="text-[11px] text-zinc-400 mt-0.5">Sube imágenes de tus certificados para incluirlos en el documento</p>
                  </div>
                  <button
                    onClick={() => addItem('certifications', { id: `cert-${Date.now()}`, name: "", issuer: "", year: "", credentialUrl: "", image: "" })}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>

                <div className="flex items-center justify-between bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/80">
                  <span className="text-xs font-medium text-zinc-300">Mostrar miniaturas de certificados en la vista previa del CV</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                      type="checkbox" 
                      checked={showCertImagesInPdf} 
                      onChange={(e) => setShowCertImagesInPdf(e.target.checked)}
                      className="sr-only peer" 
                    />
                    <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-indigo-600"></div>
                  </label>
                </div>

                {cvData.certifications.map((cert) => (
                  <div key={cert.id} className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-3 relative">
                    <button
                      onClick={() => removeItem('certifications', cert.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Nombre de la Certificación / Diploma</label>
                        <input
                          type="text"
                          value={cert.name}
                          onChange={(e) => updateItem('certifications', cert.id, 'name', e.target.value)}
                          placeholder="Ej. AWS Certified Solutions Architect"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Año / Fecha</label>
                        <input
                          type="text"
                          value={cert.year}
                          onChange={(e) => updateItem('certifications', cert.id, 'year', e.target.value)}
                          placeholder="2023"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Emisor / Institución</label>
                        <input
                          type="text"
                          value={cert.issuer}
                          onChange={(e) => updateItem('certifications', cert.id, 'issuer', e.target.value)}
                          placeholder="Ej. Amazon Web Services"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Enlace Credencial (Opcional)</label>
                        <input
                          type="text"
                          value={cert.credentialUrl || ''}
                          onChange={(e) => updateItem('certifications', cert.id, 'credentialUrl', e.target.value)}
                          placeholder="https://credencial.com"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>

                      {/* IMAGE / DIPLOMA ATTACHMENT AREA */}
                      <div className="sm:col-span-3 pt-2 border-t border-zinc-800/80">
                        <label className="block text-[11px] font-medium text-zinc-300 mb-2 flex items-center justify-between">
                          <span className="flex items-center gap-1.5">
                            <ImageIcon className="w-3.5 h-3.5 text-indigo-400" />
                            Imagen del Certificado / Diploma Adjunto
                          </span>
                          {cert.image && (
                            <button
                              onClick={() => updateItem('certifications', cert.id, 'image', '')}
                              className="text-rose-400 hover:text-rose-300 text-[10px]"
                            >
                              Eliminar Imagen
                            </button>
                          )}
                        </label>

                        {cert.image ? (
                          <div className="flex items-center gap-3 bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                            <img 
                              src={cert.image} 
                              alt="Diploma preview" 
                              className="w-20 h-14 object-cover rounded border border-zinc-700 bg-zinc-900 cursor-pointer"
                              onClick={() => setPreviewImageModal(cert.image)}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs font-medium text-emerald-400 flex items-center gap-1">
                                <FileCheck className="w-3.5 h-3.5" /> Diploma adjuntado
                              </p>
                              <p className="text-[10px] text-zinc-500 truncate">Haz clic para previsualizar a tamaño completo</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => setPreviewImageModal(cert.image)}
                              className="p-1.5 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-300"
                              title="Ver en grande"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <label className="flex flex-col items-center justify-center p-3 border-2 border-dashed border-zinc-800 hover:border-indigo-500/50 rounded-lg bg-zinc-950/50 cursor-pointer group transition-all">
                            <Upload className="w-5 h-5 text-zinc-500 group-hover:text-indigo-400 mb-1" />
                            <span className="text-xs text-zinc-400 group-hover:text-zinc-200">
                              Subir foto del certificado (PNG, JPG, SVG)
                            </span>
                            <span className="text-[10px] text-zinc-600">Máximo 5MB</span>
                            <input 
                              type="file" 
                              accept="image/*" 
                              className="hidden" 
                              onChange={(e) => handleImageUpload(cert.id, e)} 
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 5. PROJECTS */}
            {activeTab === 'projects' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-indigo-400" />
                    Proyectos Destacados
                  </h2>
                  <button
                    onClick={() => addItem('projects', { id: `proj-${Date.now()}`, title: "", link: "", description: "" })}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-all"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Añadir</span>
                  </button>
                </div>

                {cvData.projects.map((proj) => (
                  <div key={proj.id} className="p-4 bg-zinc-900/90 border border-zinc-800 rounded-xl space-y-3 relative">
                    <button
                      onClick={() => removeItem('projects', proj.id)}
                      className="absolute top-3 right-3 text-zinc-500 hover:text-rose-400 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Nombre del Proyecto</label>
                        <input
                          type="text"
                          value={proj.title}
                          onChange={(e) => updateItem('projects', proj.id, 'title', e.target.value)}
                          placeholder="Ej. App de Comercio"
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Enlace / URL</label>
                        <input
                          type="text"
                          value={proj.link}
                          onChange={(e) => updateItem('projects', proj.id, 'link', e.target.value)}
                          placeholder="https://..."
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-100 outline-none"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label className="block text-[11px] font-medium text-zinc-400 mb-1">Descripción</label>
                        <textarea
                          rows={2}
                          value={proj.description}
                          onChange={(e) => updateItem('projects', proj.id, 'description', e.target.value)}
                          placeholder="Plataforma desarrollada con React..."
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-100 outline-none resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* 6. SKILLS & LANGUAGES */}
            {activeTab === 'skills' && (
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Code className="w-4 h-4 text-indigo-400" />
                      Habilidades Técnicas
                    </h2>
                    <button
                      onClick={() => setCvData(prev => ({ ...prev, skills: [...prev.skills, { name: "", level: 85 }] }))}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-zinc-800 text-indigo-300 rounded-md"
                    >
                      <Plus className="w-3 h-3" /> Añadir Skill
                    </button>
                  </div>
                  {cvData.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-zinc-900/60 p-2 border border-zinc-800 rounded-lg">
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) => {
                          const updated = [...cvData.skills];
                          updated[idx].name = e.target.value;
                          setCvData({ ...cvData, skills: updated });
                        }}
                        placeholder="Ej. React / TypeScript"
                        className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-100 outline-none"
                      />
                      <input
                        type="range"
                        min="20"
                        max="100"
                        value={skill.level}
                        onChange={(e) => {
                          const updated = [...cvData.skills];
                          updated[idx].level = Number(e.target.value);
                          setCvData({ ...cvData, skills: updated });
                        }}
                        className="w-24 accent-indigo-500 cursor-pointer"
                      />
                      <button
                        onClick={() => setCvData(prev => ({ ...prev, skills: prev.skills.filter((_, i) => i !== idx) }))}
                        className="text-zinc-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                    <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                      <Globe className="w-4 h-4 text-indigo-400" />
                      Idiomas
                    </h2>
                    <button
                      onClick={() => setCvData(prev => ({ ...prev, languages: [...prev.languages, { name: "", level: "Intermedio" }] }))}
                      className="flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-zinc-800 text-indigo-300 rounded-md"
                    >
                      <Plus className="w-3 h-3" /> Añadir Idioma
                    </button>
                  </div>
                  {cvData.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-zinc-900/60 p-2 border border-zinc-800 rounded-lg">
                      <input
                        type="text"
                        value={lang.name}
                        onChange={(e) => {
                          const updated = [...cvData.languages];
                          updated[idx].name = e.target.value;
                          setCvData({ ...cvData, languages: updated });
                        }}
                        placeholder="Ej. Inglés"
                        className="flex-1 bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-100 outline-none"
                      />
                      <input
                        type="text"
                        value={lang.level}
                        onChange={(e) => {
                          const updated = [...cvData.languages];
                          updated[idx].level = e.target.value;
                          setCvData({ ...cvData, languages: updated });
                        }}
                        placeholder="Nivel C1"
                        className="w-32 bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-100 outline-none"
                      />
                      <button
                        onClick={() => setCvData(prev => ({ ...prev, languages: prev.languages.filter((_, i) => i !== idx) }))}
                        className="text-zinc-500 hover:text-rose-400"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 7. STYLE CONTROLS */}
            {activeTab === 'style' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                    <Layout className="w-4 h-4 text-indigo-400" /> Plantilla Visual
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'modern', label: 'Moderna', desc: 'Encabezado con color de acento' },
                      { id: 'executive', label: 'Ejecutiva', desc: 'Estilo clásico centrado' },
                      { id: 'minimal', label: 'Minimalista', desc: 'Sidebar lateral limpio' }
                    ].map(tmpl => (
                      <button
                        key={tmpl.id}
                        onClick={() => setTemplate(tmpl.id)}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          template === tmpl.id
                            ? 'bg-indigo-600/20 border-indigo-500 ring-1 ring-indigo-500'
                            : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="font-semibold text-xs text-zinc-100">{tmpl.label}</div>
                        <div className="text-[10px] text-zinc-400 mt-1">{tmpl.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                    <Type className="w-4 h-4 text-indigo-400" /> Tipografía del Documento
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {FONTS.map(f => (
                      <button
                        key={f.id}
                        onClick={() => setFontFamily(f)}
                        className={`p-2.5 rounded-lg border text-xs font-medium transition-all ${
                          fontFamily.id === f.id
                            ? 'bg-zinc-800 border-indigo-500 text-indigo-300'
                            : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {f.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
                    <Palette className="w-4 h-4 text-indigo-400" /> Paleta de Acento
                  </h2>
                  <div className="grid grid-cols-3 gap-3">
                    {COLOR_THEMES.map(th => (
                      <button
                        key={th.id}
                        onClick={() => setThemeColor(th)}
                        className={`flex items-center gap-2 p-2.5 rounded-lg border transition-all ${
                          themeColor.id === th.id
                            ? 'bg-zinc-800 border-zinc-600 ring-1 ring-zinc-500'
                            : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: th.primary }}></div>
                        <span className="text-xs text-zinc-200">{th.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: LIVE CV PREVIEW CANVAS */}
        <div className="flex-1 bg-zinc-900/60 p-4 md:p-8 overflow-y-auto flex flex-col items-center justify-start custom-scrollbar">
          
          <div className="w-full max-w-[210mm] mb-4 flex items-center justify-between text-xs text-zinc-400 px-2">
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-indigo-400" />
              <span>Vista previa en vivo A4</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="capitalize px-2.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[11px] text-zinc-300 font-mono">
                {template} • {fontFamily.name}
              </span>
            </div>
          </div>

          {/* DOCUMENT CANVAS CONTAINER (A4 standard) */}
          <div 
            ref={cvPreviewRef}
            className={`w-full max-w-[210mm] min-h-[297mm] bg-white text-slate-900 shadow-2xl rounded-sm transition-all overflow-hidden flex flex-col ${fontFamily.value}`}
            style={{ width: '210mm', minHeight: '297mm', margin: '0 auto' }}
          >
            {template === 'modern' && <ModernTemplate data={cvData} theme={themeColor} showCertImages={showCertImagesInPdf} />}
            {template === 'executive' && <ExecutiveTemplate data={cvData} theme={themeColor} showCertImages={showCertImagesInPdf} />}
            {template === 'minimal' && <MinimalTemplate data={cvData} theme={themeColor} showCertImages={showCertImagesInPdf} />}
          </div>
        </div>
      </main>

      {/* FULL IMAGE MODAL PREVIEW */}
      {previewImageModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-2xl w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col items-center">
            <button
              onClick={() => setPreviewImageModal(null)}
              className="absolute top-3 right-3 text-zinc-400 hover:text-white p-1 rounded-lg bg-zinc-800"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-sm font-semibold text-zinc-200 mb-3">Vista Previa del Certificado / Diploma</h3>
            <img src={previewImageModal} alt="Diploma Modal" className="max-h-[70vh] rounded border border-zinc-800 object-contain" />
          </div>
        </div>
      )}
    </div>
  );
}

// MODERN TEMPLATE COMPONENT
function ModernTemplate({ data, theme, showCertImages }) {
  const { personalInfo, experience, education, projects, certifications, skills, languages } = data;

  return (
    <div className="flex-1 flex flex-col text-[11px] leading-relaxed bg-white">
      <header className="px-8 py-8 text-white flex justify-between items-end" style={{ backgroundColor: theme.primary }}>
        <div className="space-y-1 max-w-[70%]">
          <h1 className="text-2xl font-bold tracking-tight uppercase">{personalInfo.fullName || 'Tu Nombre'}</h1>
          <p className="text-xs font-medium opacity-90 tracking-wide">{personalInfo.title || 'Tu Cargo Profesional'}</p>
        </div>
        <div className="text-[10px] space-y-1 text-right opacity-95">
          {personalInfo.email && <div className="flex items-center justify-end gap-1"><Mail className="w-3 h-3" /> {personalInfo.email}</div>}
          {personalInfo.phone && <div className="flex items-center justify-end gap-1"><Phone className="w-3 h-3" /> {personalInfo.phone}</div>}
          {personalInfo.location && <div className="flex items-center justify-end gap-1"><MapPin className="w-3 h-3" /> {personalInfo.location}</div>}
          {personalInfo.github && <div className="flex items-center justify-end gap-1"><Github className="w-3 h-3" /> {personalInfo.github}</div>}
          {personalInfo.linkedin && <div className="flex items-center justify-end gap-1"><Linkedin className="w-3 h-3" /> {personalInfo.linkedin}</div>}
        </div>
      </header>

      <div className="flex-1 p-8 grid grid-cols-12 gap-6 bg-white">
        <div className="col-span-8 space-y-5">
          {personalInfo.summary && (
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Perfil Profesional
              </h2>
              <p className="text-slate-700 leading-relaxed text-justify">{personalInfo.summary}</p>
            </section>
          )}

          {experience.length > 0 && (
            <section className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Experiencia Laboral
              </h2>
              <div className="space-y-3.5">
                {experience.map((exp) => (
                  <div key={exp.id} className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-slate-800">
                      <span>{exp.role}</span>
                      <span className="text-[10px] text-slate-500">{exp.period}</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-600 font-medium">
                      <span>{exp.company}</span>
                      <span>{exp.location}</span>
                    </div>
                    {exp.description && <p className="text-slate-600 whitespace-pre-line text-[10.5px] pt-0.5">{exp.description}</p>}
                  </div>
                ))}
              </div>
            </section>
          )}

          {projects.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Proyectos Destacados
              </h2>
              <div className="space-y-2">
                {projects.map((proj) => (
                  <div key={proj.id} className="space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-800 text-[10.5px]">
                      <span>{proj.title}</span>
                      <span className="text-[9.5px] text-slate-400 font-normal">{proj.link}</span>
                    </div>
                    <p className="text-slate-600 text-[10px]">{proj.description}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="col-span-4 space-y-5 border-l border-slate-100 pl-5">
          {education.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Educación
              </h2>
              <div className="space-y-2">
                {education.map((edu) => (
                  <div key={edu.id} className="space-y-0.5">
                    <div className="font-bold text-slate-800 text-[10.5px]">{edu.degree}</div>
                    <div className="text-[10px] text-slate-600">{edu.institution}</div>
                    <div className="text-[9.5px] text-slate-400">{edu.period}</div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {skills.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Habilidades
              </h2>
              <div className="space-y-2">
                {skills.map((s, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="flex justify-between text-[10px] font-medium text-slate-700">
                      <span>{s.name}</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${s.level}%`, backgroundColor: theme.primary }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {certifications.length > 0 && (
            <section className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Certificaciones
              </h2>
              <div className="space-y-2.5">
                {certifications.map((c) => (
                  <div key={c.id} className="space-y-1">
                    <div className="font-bold text-slate-800 leading-tight">{c.name}</div>
                    <div className="text-slate-500 text-[9.5px]">{c.issuer} {c.year ? `• ${c.year}` : ''}</div>
                    {showCertImages && c.image && (
                      <div className="mt-1">
                        <img 
                          src={c.image} 
                          alt={c.name} 
                          className="w-full h-16 object-cover rounded border border-slate-200 shadow-sm" 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {languages.length > 0 && (
            <section className="space-y-1.5">
              <h2 className="text-xs font-bold uppercase tracking-wider border-b pb-1" style={{ color: theme.primary, borderColor: theme.secondary }}>
                Idiomas
              </h2>
              <div className="space-y-1">
                {languages.map((l, i) => (
                  <div key={i} className="flex justify-between text-[10px]">
                    <span className="font-medium text-slate-700">{l.name}</span>
                    <span className="text-slate-500">{l.level}</span>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

// EXECUTIVE TEMPLATE COMPONENT
function ExecutiveTemplate({ data, theme, showCertImages }) {
  const { personalInfo, experience, education, projects, certifications, skills } = data;
  return (
    <div className="flex-1 p-10 flex flex-col text-[11px] leading-relaxed bg-white">
      <header className="text-center border-b pb-6 space-y-2" style={{ borderColor: theme.primary }}>
        <h1 className="text-2xl font-serif font-bold uppercase text-slate-900">{personalInfo.fullName || 'Tu Nombre'}</h1>
        <p className="text-xs font-medium uppercase tracking-widest text-slate-600" style={{ color: theme.primary }}>{personalInfo.title}</p>
        <div className="flex flex-wrap justify-center gap-3 text-[10px] text-slate-600 pt-1">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>• {personalInfo.phone}</span>}
          {personalInfo.location && <span>• {personalInfo.location}</span>}
        </div>
      </header>
      <div className="mt-6 space-y-4">
        {personalInfo.summary && (
          <section>
            <h2 className="text-xs font-serif font-bold uppercase border-b border-slate-200 pb-0.5 mb-1">Resumen Ejecutivo</h2>
            <p className="text-slate-700 text-justify">{personalInfo.summary}</p>
          </section>
        )}
        {experience.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xs font-serif font-bold uppercase border-b border-slate-200 pb-0.5">Experiencia Profesional</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-0.5">
                <div className="flex justify-between font-bold text-slate-900 text-[11px]">
                  <span>{exp.role} — <span className="font-normal text-slate-700">{exp.company}</span></span>
                  <span className="text-[10px] text-slate-500">{exp.period}</span>
                </div>
                {exp.description && <p className="text-slate-600 text-[10.5px] whitespace-pre-line pl-2 border-l border-slate-200">{exp.description}</p>}
              </div>
            ))}
          </section>
        )}
        {certifications.length > 0 && (
          <section className="space-y-2">
            <h2 className="text-xs font-serif font-bold uppercase border-b border-slate-200 pb-0.5">Certificaciones y Licencias</h2>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((c) => (
                <div key={c.id} className="p-2 border border-slate-100 rounded bg-slate-50">
                  <div className="font-bold text-slate-800">{c.name}</div>
                  <div className="text-slate-500 text-[9.5px]">{c.issuer} ({c.year})</div>
                  {showCertImages && c.image && (
                    <img src={c.image} alt={c.name} className="mt-1 h-14 w-full object-cover rounded border border-slate-200" />
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

// MINIMAL TEMPLATE COMPONENT
function MinimalTemplate({ data, theme, showCertImages }) {
  const { personalInfo, experience, education, certifications, skills } = data;
  return (
    <div className="flex-1 grid grid-cols-12 min-h-[297mm] text-[11px] leading-relaxed bg-white">
      <aside className="col-span-4 p-6 space-y-6 text-white flex flex-col" style={{ backgroundColor: theme.primary }}>
        <div>
          <h1 className="text-xl font-bold leading-tight">{personalInfo.fullName || 'Tu Nombre'}</h1>
          <p className="text-[11px] opacity-80 font-medium mt-1">{personalInfo.title}</p>
        </div>
        <div className="space-y-2 text-[10px] pt-4 border-t border-white/20">
          {personalInfo.email && <div className="break-all">{personalInfo.email}</div>}
          {personalInfo.phone && <div>{personalInfo.phone}</div>}
          {personalInfo.location && <div>{personalInfo.location}</div>}
        </div>
        {certifications.length > 0 && (
          <div className="space-y-2 pt-4 border-t border-white/20">
            <div className="font-bold text-xs uppercase tracking-wider">Certificados</div>
            {certifications.map((c) => (
              <div key={c.id} className="space-y-1">
                <div className="text-[10.5px] font-medium leading-tight">{c.name}</div>
                {showCertImages && c.image && (
                  <img src={c.image} alt={c.name} className="h-12 w-full object-cover rounded border border-white/30" />
                )}
              </div>
            ))}
          </div>
        )}
      </aside>
      <main className="col-span-8 p-8 space-y-6 bg-white">
        {personalInfo.summary && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b pb-1 mb-2">Perfil</h2>
            <p className="text-slate-600 leading-relaxed text-justify">{personalInfo.summary}</p>
          </section>
        )}
        {experience.length > 0 && (
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b pb-1">Experiencia</h2>
            {experience.map((exp) => (
              <div key={exp.id} className="space-y-1 border-l-2 border-slate-200 pl-3">
                <div className="flex justify-between font-bold text-slate-800">
                  <span>{exp.role}</span>
                  <span className="text-[10px] text-slate-400 font-normal">{exp.period}</span>
                </div>
                <div className="text-[10px] text-slate-500">{exp.company}</div>
                {exp.description && <p className="text-slate-600 text-[10.5px] whitespace-pre-line">{exp.description}</p>}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  );
}