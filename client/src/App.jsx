import { useState } from "react";
import { AchievementGrid } from "./components/AchievementGrid";
import { AuthScreen } from "./components/AuthScreen";
import { DailyChallenges } from "./components/DailyChallenges";
import { DashboardHero } from "./components/DashboardHero";
import { LandingPage } from "./components/LandingPage";
import { LearningMap } from "./components/LearningMap";
import { LessonPanel } from "./components/LessonPanel";
import { MascotJourney } from "./components/MascotJourney";
import { AnimatedSky } from "./components/AnimatedSky";
import { ProfileCard } from "./components/ProfileCard";
import { SpaceNavbar } from "./components/SpaceNavbar";
import {
  featuredLesson,
  generatePlanets,
  getRecommendedLessonId,
  getMissionTrack,
  initialUser,
  lessonCatalog,
  mascotStages
} from "./data/mockData";

function resolveApiUrl() {
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (typeof window !== "undefined" && window.location.hostname === "biology-space-web.onrender.com") {
    return "https://biology-space-api.onrender.com/api";
  }

  return "http://localhost:5000/api";
}

const apiUrl = resolveApiUrl();

export default function App() {
  const [user, setUser] = useState(initialUser);
  const [authMode, setAuthMode] = useState("login");
  const [entryView, setEntryView] = useState("landing");
  const [authForm, setAuthForm] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeView, setActiveView] = useState("dashboard");
  const [selectedLessonId, setSelectedLessonId] = useState(getRecommendedLessonId(initialUser.completedLessons));

  const resolveFallbackName = () => {
    if (authForm.name.trim()) {
      return authForm.name.trim();
    }

    if (authForm.email.trim()) {
      return authForm.email.trim().split("@")[0];
    }

    return "Ученик";
  };

  const handleAuth = async (event) => {
    event.preventDefault();
    const endpoint = authMode === "login" ? "auth/login" : "auth/register";

    try {
      const response = await fetch(`${apiUrl}/${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(authForm)
      });

      if (!response.ok) {
        throw new Error("API unavailable");
      }

      const data = await response.json();
      setUser(data.user);
    } catch {
      setUser((current) => ({
        ...current,
        name: resolveFallbackName(),
        email: authForm.email
      }));
    }

    setIsAuthenticated(true);
  };

  const handleLessonComplete = (xpEarned) => {
    setUser((current) => {
      const nextXp = current.xp + xpEarned;
      const leveledUp = nextXp >= current.xpToNext;
      const completedLessons = current.completedLessons.includes(selectedLessonId)
        ? current.completedLessons
        : [...current.completedLessons, selectedLessonId];

      const nextLessonId = getRecommendedLessonId(completedLessons);
      setSelectedLessonId(nextLessonId);
      setActiveView("lesson");

      return {
        ...current,
        xp: leveledUp ? nextXp - current.xpToNext : nextXp,
        level: leveledUp ? current.level + 1 : current.level,
        xpToNext: leveledUp ? current.xpToNext + 260 : current.xpToNext,
        currentMission: "Открыть следующий урок и постепенно добраться до новой планеты",
        completedLessons
      };
    });
  };

  const planets = generatePlanets(user.completedLessons);
  const selectedLesson = lessonCatalog[selectedLessonId] || featuredLesson;
  const currentStage = planets.find((planet) => planet.levels.some((level) => level.id === selectedLessonId));
  const missionTrack = getMissionTrack(user);

  if (!isAuthenticated) {
    if (entryView === "landing") {
      return <LandingPage onStartDemo={() => setEntryView("auth")} />;
    }

    return (
      <AuthScreen
        mode={authMode}
        setMode={setAuthMode}
        form={authForm}
        setForm={setAuthForm}
        onSubmit={handleAuth}
        onBack={() => setEntryView("landing")}
      />
    );
  }

  return (
    <div className="star-field min-h-screen bg-grid">
      <AnimatedSky />
      <SpaceNavbar activeView={activeView} setActiveView={setActiveView} user={user} />
      <main className="relative z-10 mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6">
        {(activeView === "dashboard" || activeView === "profile") && (
          <DashboardHero user={user} missionTrack={missionTrack} />
        )}
        {(activeView === "dashboard" || activeView === "map") && (
          <MascotJourney stages={mascotStages} currentStageId={currentStage?.id || "cell"} />
        )}
        {(activeView === "dashboard" || activeView === "map") && (
          <LearningMap
            planets={planets}
            onSelectLesson={(lessonId) => {
              setSelectedLessonId(lessonId);
              setActiveView("lesson");
            }}
          />
        )}
        {(activeView === "dashboard" || activeView === "lesson") && (
          <LessonPanel
            lesson={selectedLesson}
            onComplete={handleLessonComplete}
            planets={planets}
            onSelectLesson={(lessonId) => {
              setSelectedLessonId(lessonId);
              setActiveView("lesson");
            }}
          />
        )}
        {(activeView === "dashboard" || activeView === "profile") && (
          <ProfileCard user={user} missionTrack={missionTrack} />
        )}
        {(activeView === "dashboard" || activeView === "profile") && (
          <AchievementGrid achievements={user.achievements} />
        )}
        {(activeView === "dashboard" || activeView === "profile") && (
          <DailyChallenges items={user.dailyChallenges} />
        )}
      </main>
    </div>
  );
}
