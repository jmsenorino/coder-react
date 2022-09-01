import ItemListContainer from './containers/ItemListContainer';
import Navigationbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navigationbar />
      <ItemListContainer greeting='Hola Mundo!'/>
    </div>
  );
}

export default App;
