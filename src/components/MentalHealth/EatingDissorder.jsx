import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Swal from 'sweetalert2';
import './EatingDissorder.css';
import {useRef} from 'react';

let editID;
function EatingDissorder(){

 const resources = useSelector((store) => store.resources);
 const dispatch = useDispatch();
 const [itemsToEdit, setItemsToEdit] = useState()
 const ref = useRef(null);
 const [ updatedValues, setUpdatedValues] = useState('')
 
 // on page load run this action call (FETCH_RESOURCES)
 useEffect(() =>{
    dispatch({
        type: 'FETCH_RESOURCES'
    })
  },[])

  // This fucntion will allow the Admin to make an edit to the specific row of resources
  const makeAnEdit = (resource) => {
    
  
    console.log('my data is:', resource);
      
        Swal.fire({
            title: 'Edit this Row',
            html:
            `<input id="swal-input1" class="swal2-input" value='${resource.name}'>` +
            `<input id="swal-input2" class="swal2-input" value='${resource.location}'>` +
            `<input id="swal-input3" class="swal2-input" value='${resource.phone}'>` +
            `<input id="swal-input4" class="swal2-input" value='${resource.link}'>`,
            preConfirm: () =>{
                return {
                    id:resource.id,
                    name: document.getElementById('swal-input1').value,
                    location: document.getElementById('swal-input2').value,
                    phone: document.getElementById('swal-input3').value,
                    link: document.getElementById('swal-input4').value
                 }
            },

            confirmButtonText: 'Save Changes',
            confirmButtonColor:'green',
            showCancelButton: true,
            cancelButtonColor:'red',
            cancelButtonText: 'Cancel edit'
        }).then((result) => {
            if(result.isConfirmed){
              setUpdatedValues(result.value)
              console.log(result.value)
              dispatch({
                  type:'UPDATE_DATA_ROW',
                  payload: result.value
              })
            }
        })
        
  }

  // This is my sweet alerts function that allows an admin to add a new resource item
  const addNewResource = () => {
      
      (async () => {
        const { value: formValues } = await Swal.fire({
          title: 'Add New Resource',
          html: 
                `<input placeholder="Name"         id="swal-input1" class="swal2-input" type='text'>` +
                `<input placeholder="Address"      id="swal-input2" class="swal2-input" type='text'>` +
                `<input placeholder="Phone Number" id="swal-input3" class="swal2-input" type='text'>` +
                `<input placeholder="Website Link" id="swal-input4" class="swal2-input" type='url'>`,
            showCancelButton: true,
            cancelButtonColor: 'red',
            input: 'select',
            inputOptions:{
              'Mental Health ': {
                  1: 'Eating Dissorder',
                  2: 'Addiction',
                  3: 'Suicide &  Depression',
              }
            },
            inputPlaceholder:'Select where to add',
            inputValue: 'id',
            inputValidator: (id) => {
                if(id){
                 editID = id
                 console.log('What is editID', editID)
                }
            },
        preConfirm: () =>{
                    return [
                        document.getElementById('swal-input1').value,
                        document.getElementById('swal-input2').value,
                        document.getElementById('swal-input3').value,
                        document.getElementById('swal-input4').value,
                        
                    ]
                },
            })
        
        if (formValues) {
            console.log('what is formvalues', formValues)

          Swal.fire({
               title: JSON.stringify(formValues),
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Add New Resource'
            }).then((result) => {
                console.log('what is result', result)
                if( result.isConfirmed){
                    Swal.fire(
                        'Success!',
                        'New resources has been succusfullly added',
                        'success'
                    ).then(() => {
                        dispatch({
                            type:'ADD_NEW_RESOURCES',
                            payload:{
                                name: formValues[0],
                                location: formValues[1],
                                phone: formValues[2],
                                link: formValues[3],
                                sub_category_id: editID
                            }
                        })
                    })
                } 
                else if (result.dismiss ===  Swal.DismissReason.cancel){
                    Swal.fire(
                        'Cancelled',
                        'No changes were made',
                        'error'
                    )
                }
            })
       
        }
        
})()
}
// This function will allow Admin to Delete item by id
const  deleteRowById = (event) => {
    console.log('event id is', event.currentTarget);
    // console.log('ref id is',ref.current.id);
    setItemsToEdit(event.currentTarget.id)

    Swal.fire({
        title: 'Are you you want to Delete',
        confirmButtonText: 'Yes, Continue',
        confirmButtonColor:'green',
        showCancelButton: true,
        cancelButtonColor:'red',
        cancelButtonText: 'No, Cancel',
        html: event.currentTarget.id,
    }).then((result) =>{
              if (result.isConfirmed){
                  dispatch({
                      type:'DELETE_ITEM_BY_ID',
                      payload:itemsToEdit
                  })
                  Swal.fire(
                      'Deleted!',
                      'You have sucessfully deleted this row',
                      'success'
                  )  
              } else if (result.dismiss ===  Swal.DismissReason.cancel){
                  Swal.fire(
                      'Cancelled',
                      'No changes were made',
                      'error'
                  )
              }
          })
}
    return(
        <>
         <h1>Eating Dissorder </h1>
            <div>
                <Link to="/EatingDissorder">
                    <button>Eating Dissorder</button>
                </Link>
                <Link to="/Addiction">
                    <button> Addiction</button>
                </Link>
                <Link to="/SuicideAndDepression">
                    <button> Suicide & Depression</button>
                </Link>
            </div>
            <div>
                <button onClick={addNewResource}>Add New Resource </button>
            </div>
            <div>
                <header> Name </header>
              <ul>
                  {resources.map((resource) => {
                      if( resource.sub_category_id === 1){
                        return(
                            <li key={resource.id}>
                                {resource.name}
                            </li>
                        )
                      } 
                   
                  })}
                
              </ul>
            </div>
            <div>
            <header>Additional Resources</header>
              <ul>
                 {resources.map((resource) => {
                     if( resource.sub_category_id === 1){
                        return(
                            <li key={resource.id}>
                               <div>
                                   Address: {resource.location} 
                                   <button id={resource.id}  onClick={() => makeAnEdit(resource)}> Edit </button>
                                   <button id={resource.id} ref={ref} onClick={deleteRowById} > Delete </button>
                               </div>
                               <div>
                                    Phone: {resource.phone}
                               </div>                
                               <div>
                                   link: <a href={resource.link} target="_blank">{resource.link}</a>
                               </div>
                            </li>
                        )

                     }
                 })}
                  
              </ul>
            </div>
            <div>
                <Link to='/MentalHealth'>
                    <button>Go Back</button>
                </Link>
            </div>
        </>
    )
}

export default EatingDissorder;