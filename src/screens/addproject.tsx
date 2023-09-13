import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

export const AddProject=()=>{
    const [model, setModel] = useState<any>({});
    const baseApi = "https://jsonplaceholder.typicode.com/posts";
    const params = useParams();

  const getPostById = () => {
    axios
      .get(`${baseApi}/${params.id}`)
      .then((res) => {
        console.log(res);
        setModel({ ...res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePost = () => {
    axios
      .put(`${baseApi}/${params.id}`, model)
      .then((res) => {
        console.log("Post Updated", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

    const submitPost = () => {
        model.userId = 11;
        axios
          .post(baseApi, model)
          .then((res) => {
            console.log("Post Added", res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
 
      useEffect(() => {
        if (params.id) {
          getPostById();
        }
      }, []);
    return(
        <>
 <div>
<Typography variant="h4"> Add Project</Typography>
        <div className="p-2">
          <div>
            <input
              value={model.title}
              onChange={(e) => setModel({ ...model, title: e.target.value })}
              type="text"
              placeholder="Title"
              name=""
              id=""
            />
          </div>
          <div className="mt-3 ">
            <textarea
              value={model.body}
              onChange={(e) => setModel({ ...model, body: e.target.value })}
              placeholder="body"
            ></textarea>
          </div>
          <div>
            {params.id ? (
              <button className="btn btn-primary" onClick={updatePost}>Update</button>
            ) : (
          <button className="btn btn-primary " onClick={submitPost}>Submit</button>
            )}
          </div>
        </div>
      </div>
        </>
    )
}