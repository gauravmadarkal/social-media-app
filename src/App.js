import Navbar from './components/layout/Navbar';
import GlobalContextProvider from './context/GlobalContext/provider/GlobalContextProvider';
import Home from './pages/home';

function App() {
  return (
	<GlobalContextProvider>
		<Navbar />
		<Home />
	</GlobalContextProvider>
  );
}

export default App;
