import Header from '../components/Header'
import Card from '../components/Card'
import data from '../data'
import './App.css'

function App() {
 
  const cards = data.map( card => <Card key={card.id} item={card} />)

  return (
    <div className="container">
      <Header />
      <div id="card-container">
        {cards}
      </div>
    </div>
   
  )
}

export default App