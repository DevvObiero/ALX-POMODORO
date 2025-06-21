import React, { useContext, useState } from 'react';
import Button from './Button';
import { SettingsContext } from '../context/SettingsContext';

const SettingsPage = () => {
const {UpdateExecute} = useContext(SettingsContext)


  const [newTimer, setNewTimer] = useState({
    work: 0.3,
    short: 0.2,
    long: 1,
    active: 'work',
  });

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case 'work':
        setNewTimer({
          ...newTimer,
          work: parseFloat(value) || 0, // Use parseFloat for decimals
        });
        break;
      case 'short':
        setNewTimer({
          ...newTimer,
          short: parseFloat(value) || 0,
        });
        break;
      case 'long':
        setNewTimer({
          ...newTimer,
          long: parseFloat(value) || 0,
        });
        break;
      default:
        break;
    }
    console.log(newTimer);
  };

    const handleSubmit = (e) => {
        e.preventDefault()
        UpdateExecute(newTimer)
    }
  return (
    <div className="form-container">
      <form noValidate>
        <div className="input-wrapper">
          <input
            className="input"
            name="work"
            type="number" // Ensure number input
            step="0.1" // Allow decimals
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            className="input"
            name="short"
            type="number"
            step="0.1"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            className="input"
            name="long"
            type="number"
            step="0.1"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
        <Button title="Set Timer" _callback={handleSubmit} />
      </form>
    </div>
  );
};

export default SettingsPage;