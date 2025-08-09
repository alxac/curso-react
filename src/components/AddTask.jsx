import { useState } from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { useTranslation } from 'react-i18next';

function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { t } = useTranslation();

  return (
    <div className="add">
      <Input
        type="text"
        placeholder={t('addTask.titlePlaceholder')}
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <Input
        type="text"
        placeholder={t('addTask.descriptionPlaceholder')}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert(t('alert.fillFields'));
          }
          onAddTaskSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="btn"
      >
        {t('addTask.addButton')}
      </button>
    </div>
  );
}

AddTask.propTypes = {
  onAddTaskSubmit: PropTypes.func.isRequired,
};

export default AddTask;
