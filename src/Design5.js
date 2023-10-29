import React, { useState } from 'react';
import './Design5.css';

function Design5() 
{
  const [drag, setDrag] = useState(false);
  const [image, setImage] = useState(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDrag(true);
  };

  const handleDragLeave = () => {
    setDrag(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDrag(false);

    const files = [...e.dataTransfer.files];
    console.log(files);
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCloudIconClick = () => {
    document.getElementById('file-input').click();
  };

  function Submit()
  {
    alert( " Successfully your submission is recorded ")
  }

  return (
    <div className='project5'>
      <center>
        <h1 className='projectname5'>Drag and Drop your image here</h1>
      </center>

      <center>
        <div
          className={`filebox ${drag ? 'drag' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <center>
            {image ? (
              <img src={image} alt="Uploaded" className="uploadedImage" />
            ) : (
              <img
                src="./img/cloud.png"
                alt=""
                srcset=""
                className='cloudIcon'
                onClick={handleCloudIconClick}
              />
            )}

            {!image && (
            <div>
              <center><p className='Discription'> Drag and Drop your image here</p></center>
              <center><p className="Discription"> Or </p></center>
              <center><p className="Discription"> Upload by selecting from device </p></center>
            </div>
          )}
          </center>


          <input
            type="file"
            name='file'
            id='file-input'
            className='file'
            onChange={handleFileInputChange}
            accept='image/*'
            hidden
          />
        </div>
      </center>

      <center><button type="submit" className='submit' onClick={Submit}>Submit</button></center>
    </div>
  );
}

export default Design5;
