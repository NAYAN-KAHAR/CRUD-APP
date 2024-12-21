import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  // Fetch blogs on mount
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/blogs`)
      .then((response) => {
        setBlogs(response.data.reverse());
      })
      .catch((err) => console.log(err));
  }, []);

  // Delete a blog
  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/blog/${id}`);
      const filteredBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(filteredBlogs);
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  // Start editing a blog
  const startEdit = (data) => {
    setIsEdit(true);
    setEditId(data._id);
    setTitle(data.title);
    setDescription(data.description);
  };

  // Save the edited blog
  const saveEdit = async () => {
    try {
      const updatedBlog = {
        title,
        description,
      };

      await axios.put(`http://localhost:3000/api/blog/${editId}`, updatedBlog);

      const updatedBlogs = blogs.map((blog) =>
        blog._id === editId ? { ...blog, ...updatedBlog } : blog
      );

      setBlogs(updatedBlogs);
      setIsEdit(false);
      setEditId(null);
      setTitle("");
      setDescription("");
      toast.success("blog edit successfully")
    } catch (err) {
      console.error("Error updating blog:", err);
    }
  };

  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 col-sm-12 col-mb-12 py-5">
          <Toaster />
            {blogs && blogs.map((data) => (
                <div className="show-blog-div mb-3" key={data._id}>
                  <div className="title-div">
                    {isEdit && editId === data._id ? 
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control mb-2"
                      />
                     : (
                      <h5>
                        <b>{data.title}</b>
                      </h5>
                    )}
                  </div>
                  <div className="logo">
                    <img 
                      src="https://static.thenounproject.com/png/681286-200.png"
                      alt=""
                      width={25}
                      onClick={() => startEdit(data)}
                    style={{backgroundColor:isEdit?'red':'white'}}/>
                    <img
                      onClick={() => deleteBlog(data._id)}
                      src="https://www.svgrepo.com/show/21045/delete-button.svg"
                      alt=""
                      width={25}
                    />
                  </div>
                  <div className="description-div mt-2 mx-2">
                    {isEdit && editId === data._id ? 
                      <textarea cols="10" rows="6"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                      />
                     : (
                      <p>{data.description}</p>
                    )}
                  </div>
                  {isEdit && editId === data._id && (
                    <button className="btn btn-warning mt-2"
                      onClick={saveEdit}> Save </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;













// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const HomePage = ()  => {
//  const [ blogs, setBlogs ] = useState();
//  const [ editBlog, setEditBlog ] = useState();
//  const [ isEdit, setIsEdit ] = useState(false);
//  const [ title, setTitle ] = useState();
//  const [ description, setDescription ] = useState();
//  const [ editId, setEditId] = useState(null);


//  useEffect(() => {
//   axios.get(`http://localhost:3000/api/blogs`)
//   .then((response) => {
//     console.log(response.data);
//     setBlogs(response.data.reverse());
//   })
//   .catch(err => console.log(err) );
//  },[]);

//  const deleteBlog = async (id) => {
//   try{
//       await axios.delete(`http://localhost:3000/api/blog/${id}`)
//       const filterBlogs = await blogs.filter(blog => blog._id !== id);
//       setBlogs(filterBlogs);
//   }
//   catch (err) {
//     console.error("Error deleting blog:", err);
//   }
//  }


//  // Render
// return (
//   <>
//     <div className="container py-5">
//       <div className="row justify-content-center">
//         <div className="col-8 py-5">
//           {blogs &&
//             blogs.map((data,index) => (
//               <div className="show-blog-div mb-3" key={data._id}>
//                 <div className="title-div">
//                   <h5 contentEditable={isEdit}>
//                     <b>{data.title}</b>
//                   </h5>
//                 </div>
//                 <div className="logo">
//                   <img
//                         src="https://static.thenounproject.com/png/681286-200.png"
//                         alt=""
//                         width={25}
//                         onClick={() => {
//                           setEditBlog({
//                             title: data.title,
//                             description: data.description,
//                             id: data._id,
//                           });
//                           setEditId(data._id);
//                         }}
//                       />
//                     <img
//                     onClick={() => deleteBlog(data._id)}
//                     src="https://www.svgrepo.com/show/21045/delete-button.svg"
//                     alt=""
//                     width={25}
//                   />
//                 </div>
//                 <div className="description-div mt-2 mx-2">
//                   <p contentEditable={isEdit}>{data.description}</p>
//                 </div>
//                 {isEdit && editId === data._id ? <button className="btn btn-warning">Save</button>:null }
//               </div>
//             ))}


//         </div>
//       </div>
      
//     </div>
//   </>
// );


// }

// export default HomePage;



