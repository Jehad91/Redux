import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../Features/color';

const ChangeColor = () => {
  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input type="color" onChange={(event) => setColor(event.target.value)} />
      <button onClick={() => {
        dispatch(setTheme(color))
      }}>Change Color</button>
    </div>
  )
}

export default ChangeColor;
