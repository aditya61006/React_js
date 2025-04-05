import UserContextProvider from './context/provider'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {

  return (
    <UserContextProvider>
      <h1> hello widh tchaio asf pa</h1>
      <Login /> 
      <Profile/>
    </UserContextProvider>
  )
}

export default App
