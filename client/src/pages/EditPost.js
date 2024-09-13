import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';
import 'react-quill/dist/quill.snow.css';
import "./CreatePage.css";


export default function EditPost() {
  const { id } = useParams();
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [files, setFiles] = useState([]);
  const [redirect, setRedirect] = useState(false);


  useEffect(() => {
    fetch(`http://localhost:8080/post/${id}`)
      .then(res => res.json())
      .then(postInfo => {
        setContent(postInfo.content);
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
      });
  }, [id]);

  async function updatePost(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.set('title', title);
    formData.set('summary', summary);
    formData.set('content', content);
    formData.set('id', id);
    if (files.length > 0) {
        formData.set('file', files[0]);
    }

    const res = await fetch('http://localhost:8080/post', {
      method: 'PUT',
      body: formData,
      credentials: 'include',
    });
    if (res.ok) {
      setRedirect(true);
      
    } 
  }

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  

  return (
    <form onSubmit={updatePost} className='edit-page' style={{padding:"30px 60px"}}>
      <h2 style={{textAlign:"center" , color:"#581845"}}>Edit Post</h2>
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
        name="file"
        type="file"
        onChange={e => setFiles(e.target.files)}
      />
      <Editor value={content} onChange={setContent} />
      <button style={{ marginTop: '20px' }}>Update Post</button>
    </form>
  );
}
