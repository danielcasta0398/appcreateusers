import React from 'react';
import Form from './Form';

const UsersList = ( {userlist, listUser, estadoDelete, cambiarEstadoDelete, iduser , setTextButton, stateEdit, changeStateEdit} ) => {

    
    
    return (
        
        <div className='containt-user-list' >
           
           <div className='content-card-user'>
           {
                userlist.map( users => (
                                       

                  <div  key={users.id}>                      
                      <h3> {users.first_name} {users.last_name}</h3>
                      <p className='title-email'>CORREO</p>
                      <p className='info-email'> {users.email} </p> 
                      <p className='title-email'>CUMPLEAÑOS</p>
                      <p className='gift'><i className="fa-solid fa-gift"></i> {users.birthday} </p>
                      <div className='button-users-list'>
                          <button className='button-24' onClick={ () => {
                              cambiarEstadoDelete(!estadoDelete)
                              iduser(users.id)
                          } }><i className="fa-solid fa-trash-can"></i>
                          </button>
                          <button className='button-25' onClick={() =>{
                              listUser(users)
                              changeStateEdit(!stateEdit)
                              setTextButton('Actualizar')  
                          }                                                        
                             } ><i className="fa-solid fa-pen-to-square"></i></button>
                      </div>
                      <div className='form-none'>
                         <Form  />
                      </div>
                      
                  </div>
                                  
                   
                ) )
            }

           </div>
           

           
        </div>
    );
};

export default UsersList;