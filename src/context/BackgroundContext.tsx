import React, { createContext, useContext, useEffect, useState } from 'react';

interface BackgroundContextType {
  desktopBg: string | null;
  mobileBg: string | null;
  overlayOpacity: number;
  blurIntensity: number;
  uiOpacity: number;
  uiBlurIntensity: number;
  uiBorderOpacity: number;
  uiShadowIntensity: number;
  sidebarOpacity: number;
  sidebarBlurIntensity: number;
  mobileMenuOverlayOpacity: number;
  setDesktopBg: (bg: string | null) => void;
  setMobileBg: (bg: string | null) => void;
  setOverlayOpacity: (opacity: number) => void;
  setBlurIntensity: (blur: number) => void;
  setUiOpacity: (opacity: number) => void;
  setUiBlurIntensity: (blur: number) => void;
  setUiBorderOpacity: (opacity: number) => void;
  setUiShadowIntensity: (intensity: number) => void;
  setSidebarOpacity: (opacity: number) => void;
  setSidebarBlurIntensity: (blur: number) => void;
  setMobileMenuOverlayOpacity: (opacity: number) => void;
  resetBackgrounds: () => void;
  resetAdjustments: () => void;
  resetUiAdjustments: () => void;
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

export function BackgroundProvider({ children }: { children: React.ReactNode }) {
  const [desktopBg, setDesktopBgState] = useState<string | null>(
    localStorage.getItem('dearS_bg_desktop')
  );
  const [mobileBg, setMobileBgState] = useState<string | null>(
    localStorage.getItem('dearS_bg_mobile')
  );

  const [overlayOpacity, setOverlayOpacityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_backgroundOverlayOpacity');
    return saved !== null ? parseInt(saved, 10) : 50;
  });

  const [blurIntensity, setBlurIntensityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_backgroundBlurIntensity');
    return saved !== null ? parseInt(saved, 10) : 0;
  });

  const [uiOpacity, setUiOpacityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_uiOpacity');
    return saved !== null ? parseInt(saved, 10) : 8;
  });

  const [uiBlurIntensity, setUiBlurIntensityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_uiBlurIntensity');
    return saved !== null ? parseInt(saved, 10) : 8;
  });

  const [uiBorderOpacity, setUiBorderOpacityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_uiBorderOpacity');
    return saved !== null ? parseInt(saved, 10) : 12;
  });

  const [uiShadowIntensity, setUiShadowIntensityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_uiShadowIntensity');
    return saved !== null ? parseInt(saved, 10) : 35;
  });

  const [sidebarOpacity, setSidebarOpacityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_sidebarOpacity');
    return saved !== null ? parseInt(saved, 10) : 12;
  });

  const [sidebarBlurIntensity, setSidebarBlurIntensityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_sidebarBlurIntensity');
    return saved !== null ? parseInt(saved, 10) : 10;
  });

  const [mobileMenuOverlayOpacity, setMobileMenuOverlayOpacityState] = useState<number>(() => {
    const saved = localStorage.getItem('dearS_mobileMenuOverlayOpacity');
    return saved !== null ? parseInt(saved, 10) : 55;
  });

  const setDesktopBg = (bg: string | null) => {
    if (bg) {
      localStorage.setItem('dearS_bg_desktop', bg);
    } else {
      localStorage.removeItem('dearS_bg_desktop');
    }
    setDesktopBgState(bg);
  };

  const setMobileBg = (bg: string | null) => {
    if (bg) {
      localStorage.setItem('dearS_bg_mobile', bg);
    } else {
      localStorage.removeItem('dearS_bg_mobile');
    }
    setMobileBgState(bg);
  };

  const setOverlayOpacity = (opacity: number) => {
    localStorage.setItem('dearS_backgroundOverlayOpacity', opacity.toString());
    setOverlayOpacityState(opacity);
  };

  const setBlurIntensity = (blur: number) => {
    localStorage.setItem('dearS_backgroundBlurIntensity', blur.toString());
    setBlurIntensityState(blur);
  };

  const setUiOpacity = (val: number) => {
    localStorage.setItem('dearS_uiOpacity', val.toString());
    setUiOpacityState(val);
  };

  const setUiBlurIntensity = (val: number) => {
    localStorage.setItem('dearS_uiBlurIntensity', val.toString());
    setUiBlurIntensityState(val);
  };

  const setUiBorderOpacity = (val: number) => {
    localStorage.setItem('dearS_uiBorderOpacity', val.toString());
    setUiBorderOpacityState(val);
  };

  const setUiShadowIntensity = (val: number) => {
    localStorage.setItem('dearS_uiShadowIntensity', val.toString());
    setUiShadowIntensityState(val);
  };

  const setSidebarOpacity = (val: number) => {
    localStorage.setItem('dearS_sidebarOpacity', val.toString());
    setSidebarOpacityState(val);
  };

  const setSidebarBlurIntensity = (val: number) => {
    localStorage.setItem('dearS_sidebarBlurIntensity', val.toString());
    setSidebarBlurIntensityState(val);
  };

  const setMobileMenuOverlayOpacity = (val: number) => {
    localStorage.setItem('dearS_mobileMenuOverlayOpacity', val.toString());
    setMobileMenuOverlayOpacityState(val);
  };

  const resetBackgrounds = () => {
    setDesktopBg(null);
    setMobileBg(null);
  };

  const resetAdjustments = () => {
    setOverlayOpacity(50);
    setBlurIntensity(0);
  };

  const resetUiAdjustments = () => {
    setUiOpacity(8);
    setUiBlurIntensity(8);
    setUiBorderOpacity(12);
    setUiShadowIntensity(35);
    setSidebarOpacity(12);
    setSidebarBlurIntensity(10);
    setMobileMenuOverlayOpacity(55);
  };

  useEffect(() => {
    const handleResize = () => {
      // Just a trigger for any components relying on window size if necessary.
      // We will handle CSS via a global style injection directly in this provider.
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <BackgroundContext.Provider value={{ 
        desktopBg, mobileBg, overlayOpacity, blurIntensity, 
        uiOpacity, uiBlurIntensity, uiBorderOpacity, uiShadowIntensity,
        sidebarOpacity, sidebarBlurIntensity, mobileMenuOverlayOpacity,
        setDesktopBg, setMobileBg, setOverlayOpacity, setBlurIntensity, 
        setUiOpacity, setUiBlurIntensity, setUiBorderOpacity, setUiShadowIntensity,
        setSidebarOpacity, setSidebarBlurIntensity, setMobileMenuOverlayOpacity,
        resetBackgrounds, resetAdjustments, resetUiAdjustments
    }}>
      {children}
      <style>
        {`
          :root {
            --dear-ui-opacity: ${uiOpacity / 100};
            --dear-ui-blur: ${uiBlurIntensity}px;
            --dear-ui-border-opacity: ${uiBorderOpacity / 100};
            --dear-ui-shadow-opacity: ${uiShadowIntensity / 100};
            --dear-ui-blur-mobile: ${Math.min(uiBlurIntensity, 8)}px;
            --dear-sidebar-opacity: ${sidebarOpacity / 100};
            --dear-sidebar-blur: ${sidebarBlurIntensity}px;
            --dear-mobile-menu-overlay-opacity: ${mobileMenuOverlayOpacity / 100};
          }
          body {
            background-image: none !important;
            background-color: transparent !important;
          }
          body::before {
            display: none !important;
          }
          .d-bg-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -2;
            background-color: #0A0A0A;
            background-image: url('${desktopBg || 'https://drive.google.com/uc?export=view&id=1ny7MRzc5ul8YGmnGW_FwJwLwM01nfS1g'}');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            filter: blur(${blurIntensity}px);
            transform: ${blurIntensity > 0 ? 'scale(1.05)' : 'scale(1)'};
            transition: filter 0.2s ease, transform 0.2s ease;
            pointer-events: none;
          }
          @media (max-width: 768px) {
            .d-bg-layer {
              background-image: url('${mobileBg || desktopBg || 'https://drive.google.com/uc?export=view&id=1tvd251pJ9j_KG6T3FXz6ctIhuLbICPoN'}');
            }
          }
          .d-overlay-layer {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background-color: rgba(0, 0, 0, ${overlayOpacity / 100});
            pointer-events: none;
            transition: background-color 0.2s ease;
          }
        `}
      </style>
      <div className="d-bg-layer" />
      <div className="d-overlay-layer" />
    </BackgroundContext.Provider>
  );
}

export function useBackground() {
  const context = useContext(BackgroundContext);
  if (!context) throw new Error('useBackground must be used within BackgroundProvider');
  return context;
}
