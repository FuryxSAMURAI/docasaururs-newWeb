import React, { useState } from 'react';
import styles from './fetch.css';

function FetchData() {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  return (
    <div>
      <button className='btn' onClick={fetchData}>Загрузить данные</button>
      {data && (
        <div className='gotData'>
          <h4>Полученные данные:</h4>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default FetchData;