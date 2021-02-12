import Container from './layout/Container';
import Navbar from './components/Navbar'
import Header from './layout/Header'

const App = () => {
  return (
    <div>
      <Container>
        <Navbar />
        <Header />
      </Container>
    </div>
  )
}

export default App;
