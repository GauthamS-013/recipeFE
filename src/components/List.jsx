import React, { useEffect, useState } from "react";
import Edit from "./Edit";
import { getRecipeApi, deleteRecipeApi } from "../services/allApi";

function List({ success }) {
  const [updated,setUpdated] = useState("")
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    getData();
  }, [success,updated]);

  const getData = async () => {
    const result = await getRecipeApi();
    if (result.status === 200) {
      setRecipeList(result.data);
    }
  };

  const deleteRecipe = async (id) => {
    const result = await deleteRecipeApi(id);
    if (result.status == 200) {
      getData();
    } else {
      alert("Something Went Wrong !!");
    }
  };

  return (
    <>
      {recipeList.length > 0 ? (
        <table className="table table-bordered border-5 shadow text-dark mx-2 border-dark">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Ingredients</th>
              <th>Image</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {recipeList.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.ingredients}</td>
                <td>
                  <img src={item.image} height="200px" alt="Recipe Image" />
                </td>
                <td>
                  <div>
                    <Edit recipe={item} edited={setUpdated}/>
                    <i
                      className="fa-solid fa-trash btn text-danger fa-xl"
                      onClick={() => {
                        deleteRecipe(item.id);
                      }}
                    ></i>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="text-center text-danger my-5">No Recipes Added !!</h3>
      )}
    </>
  );
}

export default List;
