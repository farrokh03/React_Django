import React, { useState } from 'react';
import axios from 'axios';
import './Profile.css'; // Make sure to create appropriate CSS

const Profile = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('profileImage', selectedFile);

        try {
            const response = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setProfileImage(response.data.imagePath);
        } catch (error) {
            console.error('Error uploading image:', error);
        }
    };

    return (
        <div className="profile">
            <h1>Upload Profile Photo</h1>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {profileImage && (
                <div>
                    <h2>Uploaded Image:</h2>
                    <img src={profileImage} alt="Profile" />
                </div>
            )}
        </div>
    );
};

export default Profile;
