import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaRegEdit, FaCheck } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodo } from "../redux/TodoSlice";
import { useState } from "react";

interface todoProps {
  todoProps: TodoType;
}

function Todo({ todoProps }: todoProps) {
  const { id, content } = todoProps;

  const dispatch = useDispatch();

  const [newTodo, setNewTodo] = useState(content);

  const [editable, setEditable] = useState(false);

  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };

  const handleUpdateTodo = () => {
    const payload: TodoType = {
      id: id,
      content: newTodo,
    };

    dispatch(updateTodo(payload));
    setEditable(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "25px",
        borderBottom: "1px solid black",
        padding: "12px",
      }}
    >
      {editable ? (
        <input
          type="text"
          style={{ outline: "none", border: "none" }}
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
        />
      ) : (
        <div>{content}</div>
      )}

      <div>
        <IoIosRemoveCircleOutline
          className="icons"
          style={{ marginRight: "10px" }}
          onClick={handleRemoveTodo}
        />

        {editable ? (
          <FaCheck className="icons" onClick={handleUpdateTodo} />
        ) : (
          <FaRegEdit className="icons" onClick={() => setEditable(!editable)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
