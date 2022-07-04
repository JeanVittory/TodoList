import { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../app/store";
import { taskData } from "../interfaces/task";
import { taskFromUser } from "../interfaces/initialTask";

const TaskForm = () => {
  const [task, setTask] = useState<taskFromUser>({
    title: "",
    description: "",
  });

  const tasks = useSelector((state: RootState) => state.task);

  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (
    e: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (params.id) {
      dispatch(
        editTask({
          ...task,
          id: params.id,
        })
      );
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }
    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      const taskFind = tasks.find((task) => task.id === params.id) as taskData;
      setTask(taskFind);
    }
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 bg-zinc-800 max-w-sm p-4 mb-1"
    >
      <label htmlFor="ttle" className="block text-xs font-bold mb-2">
        Title
      </label>
      <input
        name="title"
        type="text"
        placeholder="title"
        onChange={handleChange}
        value={task.title}
        className="w-full- p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description
      </label>
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        value={task.description}
        className="w-full- p-2 rounded-md bg-zinc-600 mb-2"
      />
      <button
        type="submit"
        className="w-1/2 bg-indigo-600 px-2 py-1 m-auto mt-2"
      >
        Add
      </button>
    </form>
  );
};

export default TaskForm;
