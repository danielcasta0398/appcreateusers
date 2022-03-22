import React from 'react';
import Form from './Form';

const ModalUpdate = ( {stateEdit ,listUser, changeStateEdit , getUser, textButton} ) => {
    
    return (
    <>
      { stateEdit &&
      
      <div className='modal'>
         <div className='form-modal'>
            <div className='header-form'>
              <h1>Editar Usuario</h1>
              <button onClick={() => changeStateEdit(!stateEdit)} ><i className="fa-solid fa-rectangle-xmark"></i></button>
            </div>                 
            <Form getUser = {getUser} stateEdit= {stateEdit} changeStateEdit= {changeStateEdit} textButton={textButton} listUser={listUser} />
         </div>
         <div className='modal-background' onClick={() => changeStateEdit(!stateEdit)} ></div>
        </div>
        }
    </>    
    );
     
};

export default ModalUpdate;