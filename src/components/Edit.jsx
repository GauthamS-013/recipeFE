import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { updateRecipeApi } from "../services/allApi";

function Edit({recipe,edited}) {

  const [data,setData]=useState({
    name:recipe.name,ingredients:recipe.ingredients,image:recipe.image
  })

  const updateRecipe = async()=>{
    const {name,ingredients,image}=data
    if(!name || !ingredients || !image){
      alert("Enter Valid Inputs !!")
    }
    else{
      const result=await updateRecipeApi(recipe.id,data)
      if(result.status==200){
        alert("Recipe Updated !!")
        handleClose()
        edited(result)
      }
      else{
        alert("Something Went Wrong !!")
      }
    }
  }

    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <>
      <i className="fa-solid fa-pen-to-square btn mb-4 mb-md-0 me-md-3 fa-xl" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#F98866" }}>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FFF2D7" }}>
          <div>
            <input
              type="text"
              placeholder="Recipe Name"
              defaultValue={recipe?.name}
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,name:e.target.value})}}
              style={{ backgroundColor: "#FFF2D7" }}
            />
            <input
              type="text"
              placeholder="Recipe Ingredients"
              defaultValue={recipe?.ingredients}
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,ingredients:e.target.value})}}
              style={{ backgroundColor: "#FFF2D7" }}
            />
            <input
              type="text"
              placeholder="Recipe Image URL"
              defaultValue={recipe?.image}
              className="form-control mb-3"
              onChange={(e)=>{setData({...data,image:e.target.value})}}
              style={{ backgroundColor: "#FFF2D7" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#FFF2D7" }}>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={updateRecipe}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Edit;
