import { useDispatch } from "react-redux";
import { createTodo } from "../redux/TodoSlice";
import { TodoType } from "../types/Types";
import { useState } from "react";

function TodoCreate() {
  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState<string>("");

  const handleCreateTodo = () => {
    if (newTodo.trim().length === 0) {
      return alert("Todo giriniz!");
    }

    const playload: TodoType = {
      id: Math.floor(Math.random() * 999),
      content: newTodo,
    };
    dispatch(createTodo(playload));
    setNewTodo("");
  };

  return (
    <div className="todo-create">
      <input
        placeholder="Todo Giriniz..."
        className="todo-input"
        type="text"
        value={newTodo}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewTodo(e.target.value)
        }
      />
      <button className="todo-create-button " onClick={handleCreateTodo}>
        Oluştur
      </button>
    </div>
  );
}

export default TodoCreate;
