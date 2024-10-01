import './App.css'
import NavBar from './components/NavBar'
import CartWidget from './components/CartWidget'
import ItemListContainer from './components/ItemListContainer'

function App (){
return (
    <>
      <div>
        <NavBar>
          <CartWidget />
        </NavBar>
      </div>
      <ItemListContainer title='Aquí verás nuestros productos...'/>
    </>
  )
}

export default App