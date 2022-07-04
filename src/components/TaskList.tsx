import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const TaskList = () => {
  const tasksFromRedux = useSelector((state: RootState) => state.task);
  const dispatch = useDispatch();

  const handleDelete = (id: string):void => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <p>Total Task {tasksFromRedux.length}</p>
        <Link
          to="/create"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasksFromRedux.map((task) => {
          return (
            <section key={task.id} className="bg-neutral-800 p-4 rounded-md">
              <header className="flex justify-between">
                <p>{task.title}</p>
                <div className="flex gap-x-4">
                  <Link to={`/edit/${task.id}`} className="bg-zinc-600 px-2 py-1 text-xs rounded-md">Edit</Link>
                  <button onClick={() => handleDelete(task.id)} className="bg-red-500 px-2 py-1 text-xs rounded-md self-center">Delete</button>
                </div>
              </header>
              <p>{task.description}</p>
            </section>
          );
        })}
      </article>
    </div>
  );
};

export default TaskList;
