import Form from './components/Form/Form';
import ServiceList from './components/ServiceList/ServiceList';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App container">
      <Form />
      <Filter />
      <ServiceList />
    </div>
  )
}

export default App
