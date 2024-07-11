import React, { useState, useEffect } from 'react';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const CreateCourse: React.FC = () => {
    const { admin } = useAuth(); // Get the logged-in admin information
    const navigate  = useNavigate();
    console.log("admin.userData id:", admin.userData._id);
    const adminId = admin.userData._id;


    const [Admin_id, setAdmin_id] = useState(adminId);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<File | null>(null);
    const [video_url, setVideo_url] = useState('');
    const [price, setPrice] = useState('');


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files && e.target.files[0];
        const { name, value } = e.target;
        if (name == 'Admin_id') {
            setAdmin_id(value);
        } else if (name == 'title') {
            setTitle(value);
        } else if (name == 'description') {
            setDescription(value);
        } else if (name == 'image') {
            setImage(selectedFile);
        } else if (name == 'video_url') {
            setVideo_url(value);
        } else if (name == 'price') {
            setPrice(value);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/instructors/courses', {
                Admin_id,
                title,
                description,
                image,
                video_url,
                price,
            }, {headers: {'Content-Type': 'multipart/form-data',},}
            );
    
            console.log("Response Status:", response.status);
            console.log("Response Data:", response.data);
    
            if (response.status === 201) {
                console.log("Course created successfully");
                console.log(response.data);
                navigate('/dash')
            } else {
                console.error("Received an error response from the server");
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios Error:', error.response);
            } else {
                console.error('Error Failed to create Course', error);
            }
        }
    };
    

    return (
        <div className='container'>
            <div className="row g-4 justify-content-center">
                <div className="col-lg-4 col-md-6">
                    <form onSubmit={handleSubmit}>
                        {/* <div className="mb-3">
                            <label htmlFor="course_admin_id" className="form-label">Admin ID</label> */}
                            <input type="hidden" className="form-control" id="course_admin_id" value={Admin_id}
                                onChange={handleInputChange} name="Admin_id" />
                        {/* </div> */}
                        <div className="mb-3">
                            <label htmlFor="course_title" className="form-label">Course Title</label>
                            <input type="text" className="form-control" id="course_title" value={title}
                                onChange={handleInputChange} name="title" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="c_description" className="form-label">Description</label>
                            <input className="form-control" id="c_description" name="description"
                                // rows={3}
                                value={description}
                                onChange={handleInputChange}></input>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="formFile" className="form-label">Upload an Image</label>
                            <input className="form-control" type="file" id="formFile" name="image"
                                // value={image}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c_video_url" className="form-label">Course video URL</label>
                            <input type="text" className="form-control" id="c_video_url" name="video_url"
                                value={video_url}
                                onChange={handleInputChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="c_price" className="form-label">Price</label>
                            <input type="text" className="form-control" id="c_price" placeholder="price" name="price"
                                value={price}
                                onChange={handleInputChange} />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default CreateCourse;

