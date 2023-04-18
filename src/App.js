import video from './logo.svg';
import { Button, Form, Modal } from 'react-bootstrap';
import './App.css';
import { useEffect, useState } from 'react';
import { agregarReservacion } from './utils/dynamodb';

function App() {

  const [show, setShow] = useState(true);
  const [form, setForm] = useState({
    name: '',
    email: ''
  })

  // un segundo = 1000ms
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1000 * 29)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Form>
          <Form.Control
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder='nombre'
          />
          <Form.Control
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder='email'
          />
          <Button onClick={() => {
            agregarReservacion({
              id_reservaciones: 2,
              nombre: form.name,
              email: form.email
            })
            setForm({
              name: '',
              email: ''
            })
          }}>Crear reservacion</Button>
        </Form>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Modal
        show={show}
      >
        Hola mundo!!
      </Modal>
    </div>
  );
}

export default App;
