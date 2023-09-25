import React, { useState } from 'react';

const InputCard = ({ item, index, msg, setMsg }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(item);
  const [onComplete, setOnComplete] = useState(false);

  const handleSubmit = () => {
    setIsEdit(false);
    setMsg((prevMsg) =>
      prevMsg.map((todo, id) =>
        id === index ? { ...todo, text: value } : todo
      )
    );
  };

  const onEdit = () => {
    setIsEdit(true);
    setValue(item.text);
  };

  const onDelete = () => {
    const updatedTodos = msg.filter((TODO,id) => id !== index);
    setMsg(updatedTodos)
    console.log("Hi BUI")
  }
  return (
    <div>
      <div className={`${onComplete ? 'Complete p' : 'Default p'}`}>
        {isEdit ? (
          <input
            placeholder='input'
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className='EditInput'
          />
        ) : (
          <div className="text">
        <p className="tarun">{item.text}</p>
      </div>
        )}
      </div>

      <div className='Buttons'>
        {isEdit ? (
          <button className='LiButton' onClick={handleSubmit}>
            ✓
          </button>
        ) : (
          <button className='LiButton' onClick={onEdit}>
            ✎
          </button>
        )}

        <button className='LiButton' onClick={onDelete}>▥</button>
        <button
          className='LiButton'
          onClick={() => setOnComplete(!onComplete)}
        >
          ✓
        </button>
      </div>
    </div>
  );
};

export default InputCard;