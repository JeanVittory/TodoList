import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="bg-zinc-900 h-screen text-white">
      <section className="flex items-center justify-center h-full">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
