import './App.css'
import UserList from './components/UserList/UserList'
import useAllUsers from './hooks/useUserList'


function App() {

  const { allUsers } = useAllUsers()
  return (
    <>
      <UserList
        users={allUsers}
      />
    </>
  )
}

export default App
