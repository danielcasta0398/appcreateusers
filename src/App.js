import './App.css';
import HeadTop from './Components/HeadTop';
import Modal from './Components/Modal';
import { useState, useEffect } from 'react';
import UsersList from './Components/UsersList';
import axios from 'axios';
import Delete from './Components/Delete';
import ModalUpdate from './Components/ModalUpdate';


function App() {
   
  const [ userList, setUserList ] = useState([])   

   useEffect( () => {

       axios.get('https://users-crud1.herokuapp.com/users/')
       .then( e => setUserList(e.data) )
   },[] )
   
   const getUser = () =>{
    axios('https://users-crud1.herokuapp.com/users/')
       .then( e => setUserList(e.data) )
   }

   
  const [ stateModal, setEstateModal ] = useState(false)
  const [ stateDelete, setStateDelete ] = useState(false)
  const [ stateEdit, setStateEdit ] = useState(false)
  const [ idUser, setIdUser ] = useState(0)
  const [ textButton, setTextButton ] = useState("Crear Usuario")
  const [ listUser, setListuser ] = useState(null)

  

  const remove = () => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${idUser}`)    
    .then( () => getUser() )
}


  

  return (
    <div >
        <HeadTop estado={stateModal} cambiarestado={ setEstateModal } setTextButton = {setTextButton} /> 
        <Delete estadoDelete={stateDelete} cambiarEstadoDelete= {setStateDelete} remove= {remove} /> 
        <ModalUpdate 
          stateEdit={stateEdit}
          changeStateEdit = {setStateEdit}
          textButton = {textButton}
          listUser = {listUser}
          getUser = {getUser}
        />       
        <Modal 
            estado={stateModal}
            cambiarestado={ setEstateModal } 
            getuser={getUser}             
            textButton = {textButton}
        />           
        <UsersList 
          userlist = {userList} 
          estadoDelete={stateDelete} 
          cambiarEstadoDelete={ setStateDelete }
          stateEdit={stateEdit}
          setTextButton = {setTextButton}
          changeStateEdit = {setStateEdit}
          iduser={setIdUser} 
          listUser = {setListuser}
        />
         
    </div>
  );
}

export default App;
