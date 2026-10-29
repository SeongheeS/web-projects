import "./App.css";

const profile = {
  name: "게으른 완벽주의자",
  description: "일정을 관리하는 앱입니다",
};

export default function App() {
  return (
    <main className="page">
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
    </main>
  );
}