import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import Swal from 'sweetalert2';
import './EatingDissorder.css';

let editID;
function EatingDissorder(){

 const resources = useSelector((store) => store.resources);
 const dispatch = useDispatch();
 const [itemsToEdit, setItemsToEdit] = useState()
 
 // on page load run this action call (FETCH_RESOURCES)
 useEffect(() =>{
    dispatch({
        type: "FETCH_RESOURCES"
    })
  },[])

  const makeAnEdit = () => {
      console.log('resource id is:', resources[0].id, '1')
    // if( resources ){
    //    for(let i=0; i<resources.length; i++){
    //        if(resources[i].location === '2265 Como Ave, St Paul, MN 55108'){
    //         //    console.log('did we get here?')
    //            setItemsToEdit(resources[0].location)
    //            console.log('did it set the right value:', itemsToEdit)
    //        }
    //        else if(resources[i].location === '310 Clifton Ave, Minneapolis, MN 55403'){
    //            setItemsToEdit(resources[1].location)
    //            console.log('did it work?', itemsToEdit)
    //        }
    //        return;
    //    }
    // }
// console.log('hi')

   
//     if(resources[3].id === 4 ){
//         setItemsToEdit(resources[3].location)
//         console.log('what is item', itemsToEdit)
//     }
//     else if(resources[2].id === 3){
//         setItemsToEdit(resources[2].location)
//         console.log('What is item', itemsToEdit)
//     }
//     else if(resources[1].id === 2){
//         setItemsToEdit(resources[1].location)
//         console.log('What is item', itemsToEdit)
//     } 
//     else if(resources[0].id === 1){
//         setItemsToEdit(resources[0].location)
//         console.log('What is item', itemsToEdit)
//     }
    



      
    //  Swal.getInput({
    //      name: resources[0].name,
    //      location: resources[0].location,
         
    //  })

    //   Swal.fire({
    //     title: 'Edit this Row',
    //     html:
    //     `<input id="swal-input1" class="swal2-input" value='${resources[0].name}'>` +
    //     `<input id="swal-input1" class="swal2-input" value='${resources[0].location}'>` +
    //     `<input id="swal-input1" class="swal2-input" value='${resources[0].phone}'>` +
    //     `<input id="swal-input1" class="swal2-input" value='${resources[0].link}'>`,
    //     preConfirm: () =>{
    //         return [
    //             document.getElementById('swal-input1').value,
    //             document.getElementById('swal-input2').value
    //           ]
    //     },
      
    //     confirmButtonText: 'Save Changes',
    //     confirmButtonColor:'green',
    //     showCancelButton: true,
    //     cancelButtonColor:'red',
    //     cancelButtonText: 'Cancel edit'
    //   }).then
    //     .addInput({
    //       name:'Name',
    //       type:'select',
    //       placeholder:'Select a name',
    //       options:{
    //           1: resources[0].name,
    //           2: resources[1].name,
    //           3: resources[2].name,
    //           4: resources[3].name
    //       },
    //   })
  }

  const addNewResource = () => {
      
      (async () => {
        const { value: formValues, id: select } = await Swal.fire({
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
              'Eating Dissorder': {
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
                console.log('you chose', id)
                }
                console.log('state is:', itemsToEdit)
                
            },
            //figure out later after you get post to work. if cant figure ut out get it removed not that serious
            // .then((result) => {
            //     if (result.dismiss ===  Swal.DismissReason.cancel){
            //         Swal.fire(
            //             'Cancelled',
            //             'No changes were made',
            //             'error'
            //         )
            //     }  
            // }),

            
    
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
                    //   console.log('what is resoucid', resource.id, resource.name)
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
                                   <button onClick={makeAnEdit}> Edit </button>
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