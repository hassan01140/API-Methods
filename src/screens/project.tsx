import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Typography from '@mui/material/Typography';


export const Project=()=>{
    const [listData, setListData] = useState<any>([]);
    const baseApi = "https://jsonplaceholder.typicode.com/posts";
    const navigate = useNavigate();
    const deletePost = (id: any) => {
        axios
          .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then(() => {
            console.log("Post Deleted Successfully");
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
      let getData = () => {
        axios
          .get("https://jsonplaceholder.typicode.com/posts")
          .then((res) => {
            setListData([...res.data]);
          })
          .catch((err) => {
            console.log(err.message);
          });
      };
    
      useEffect(() => {
        getData();
      }, []);
    

    return(
        <>
        <div>
        <h1 className="text-center" >API Methods</h1>
        <div className=" text-center ">
        <button  className="btn btn-danger text-center "
          onClick={() => {
            navigate("/add");
          }}
        >
          Add
        </button>
        
        </div>
        <div className="row">
        <div className="col-md-12">
        {listData &&
          Array.isArray(listData) &&
          listData.length > 0 &&
          listData.map((x: any, i: any) => (
            <div className="p-2 m-2 border border border-light-subtle rounded" key={i}>
              <Typography variant="h4">{x.title}</Typography>
              <p>{x.body}</p>
              <p>{x.userId}</p>
               <IconButton
                onClick={() => deletePost(x.id)}
                color="error"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                onClick={() => {
                  navigate(`/add/${x.id}`);
                }}
                color="primary"
                aria-label="delete"
              >
                <EditIcon />
              </IconButton>
        </div>
          ))}
          </div>
          </div>
          </div>
 
        </>
    )
}