import './App.css';
import Profile from './components/Profile';
import Avatar from './components/Avatar';

function AppProfile(props) {
  return(
  <>
    <Avatar image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ecK-2CLpgcrNLdtBd8aJd-2jFGpPPv7FS_w5iEilJiUwMf5EN4nCJW-FxQzvZheZ2BVTXJ2oYjpD3RJMoTN6GuoSzayxRu91McLsBdQY' 
     isNew={true}/>

    <Profile image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ecK-2CLpgcrNLdtBd8aJd-2jFGpPPv7FS_w5iEilJiUwMf5EN4nCJW-FxQzvZheZ2BVTXJ2oYjpD3RJMoTN6GuoSzayxRu91McLsBdQY'
    name='James Kim' 
    title='프론트엔드 개발자'
    isNew={true}
    />
    <Profile image='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80'
    name='Anna Young' 
    title='백엔드 개발자'
    isNew={true}
    />
    <Profile image='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80'
    name='Bob Yu' 
    title='프론트엔드 개발자'
    isNew={false}
    />
  </>
  )
}

export default AppProfile;
