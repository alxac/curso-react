import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="add">
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          // verificar se o título e a descrição estão preenchidos
          if (!title.trim() || !description.trim()) {
            return alert("Preencha o título e a descrição da tarefa.");
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="btn"
      >
        Adicionar
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;
