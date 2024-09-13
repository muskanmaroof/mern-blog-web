
import { useState } from 'react';
import {Navigate} from 'react-router-dom';
import Editor from '../Editor';
import "./CreatePage.css";

export default function CreatePost() {
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [files, setFiles] = useState([]);
    const [redirect , setRedirect] = useState(false);
    const [error, setError] = useState('');
  



    async function createNewPost(e) {
        e.preventDefault();

          // Client-side validation for file upload
          if (files.length === 0) {
            setError('Please select an image file.');
            return;
        }

        const formData = new FormData();
        formData.set('title', title);
        formData.set('summary', summary);
        formData.set('content', content);
        if (files.length > 0) {
            formData.set('file', files[0]);
        }

        const response = await fetch('http://localhost:8080/post', {
            method: 'POST',
            body: formData,
            credentials: "include",
        });
        
      

        if (response.ok) {
            setRedirect(true);   
        } else {
            const result = await response.json();
            setError(result.message || 'Failed to create post.');
        }
    }

    if (redirect) {
        return <Navigate to="/" />;
    }

    return (

        <form onSubmit={createNewPost} className='create-form'>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
               
                
            />
            <input
                type="text"
                placeholder="Summary"
                value={summary}
                onChange={e => setSummary(e.target.value)}
                
              
            />
            <input
                name='file'
                type="file"
                onChange={e => setFiles(e.target.files)}
                
                
            />
            <Editor value={content} onChange={setContent} className="react-quill"/>

            <button style={{ marginTop: '5px' }}>Create Post</button>
            {error && <div className="error">{error}</div>}
          
        </form>
    );
}
