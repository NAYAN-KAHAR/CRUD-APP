import { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handlePostData = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/blog', {
        title,
        description,
      });
      toast.success('Blog Created Successfully.');
      setTitle('');
      setDescription('');
      setTimeout(() => navigate('/'),2000);
      

    } catch (error) {
      console.error('Error creating blog:', error);
    }
  };

  return (
    <>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-sm-12 py-5">
   <Toaster />
            <div className="card mt-4">
              <h5 className="card-title text-center mt-3">
                <b>Create Blog Here</b>
              </h5>
              <div className="card-body">
                <input
                  type="text"
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control mb-3 mt-2"
                  placeholder="Title"
                />
                <textarea
                  cols="40"
                  rows="8"
                  onChange={(e) => setDescription(e.target.value)}
                  className="form-control mb-3"
                  placeholder="Enter Something..."
                ></textarea>
                <button onClick={handlePostData} className="btn btn-dark text-white mb-3">
                  Create Blog
                </button>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePage;
