import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { addRecipeApi } from "../services/allApi";

function Add({val}) {
  const [show, setShow] = useState(false);
  const [recipe,setRecipe]=useState({
    name:"",ingredients:"",image:""
  })

  const handleSubmit=async()=>{
    const {name,ingredients,image}=recipe
    if(!name || !ingredients || !image){
      alert("Enter Valid Input !!")
    }
    else{
      const result=await addRecipeApi(recipe)
      if(result.status===201){
        alert("Recipe Added !!")
        handleClose()
        setRecipe({name:"",ingredients:"",image:""})
        val(result)
      }
      else{
        alert("Adding Recipe Failed !! Something Went Wrong !!")
      }
    }
  }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button
        className="btn my-4 mx-2 "
        style={{ backgroundColor: "#F98866" }}
        onClick={handleShow}
      >
        <b><i class="fa-solid fa-plus me-2"></i>Add New Recipe</b>
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ backgroundColor: "#F98866" }}>
          <Modal.Title>New Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "#FFF2D7" }}>
          <div>
            <input
              type="text"
              placeholder="Recipe Name"
              onChange={(e)=>{setRecipe({...recipe,name:e.target.value})}}
              className="form-control mb-3"
              style={{ backgroundColor: "#FFF2D7" }}
            />
            <input
              type="text"
              placeholder="Recipe Ingredients"
              onChange={(e)=>{setRecipe({...recipe,ingredients:e.target.value})}}
              className="form-control mb-3"
              style={{ backgroundColor: "#FFF2D7" }}
            />
            <input
              type="text"
              placeholder="Recipe Image URL"
              onChange={(e)=>{setRecipe({...recipe,image:e.target.value})}}
              className="form-control mb-3"
              style={{ backgroundColor: "#FFF2D7" }}
            />
          </div>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#FFF2D7" }}>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;
