import { useState } from 'react';
import './Body.css';
import InputCard from './InputCard';
import {AiFillSave} from 'react-icons/ai'

export const Body = () => {
  const [input, setInput] = useState('');
  const [msg, setMsg] = useState([]);

  const onSave = (e) => {
    e.preventDefault();
    const newTask={ id: new Date().toString(), text: input };
    setMsg([...msg, newTask]);
    setInput('');
  };
console.log(msg)
  return (
    <div className="Body">
      <div className="Title">To-Do List</div>
      <form className="Form" onSubmit={onSave}>
        <input
          type="text"
          placeholder="Enter task"
          className="InputBar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className="SaveButton"><AiFillSave size={20}/></button>
      </form>
      <div className="subha">
        {
            msg.length>0 &&msg?.map((item, index) => (
                <InputCard key={item.id} item={item} index={index} msg={msg} setMsg={setMsg} />
              ))
        }
        
      </div>
      
      
    </div>
  );
};