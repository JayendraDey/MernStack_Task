import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [form, setForm] = useState({ category: '', value: '' });
  const [aggregatedData, setAggregatedData] = useState([]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:8080/data', {
      category: form.category,
      value: Number(form.value),
    });
    setForm({ category: '', value: '' });
    fetchAggregatedData();
  };

  const fetchAggregatedData = async () => {
    const res = await axios.get('http://localhost:8080/aggregate');
    setAggregatedData(res.data);
  };

  useEffect(() => {
    fetchAggregatedData();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Data Entry</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          
        />
        <input
          name="value"
          type="number"
          value={form.value}
          onChange={handleChange}
          placeholder="Value"
          required
        />
        <button type="submit">Add</button>
      </form>

      <h2>Aggregated Data</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Category</th>
            <th>Count</th>
            <th>Average Value</th>
          </tr>
        </thead>
        <tbody>
          {aggregatedData.map((item) => (
            <tr key={item._id}>
              <td>{item._id}</td>
              <td>{item.count}</td>
              <td>{item.averageValue.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
