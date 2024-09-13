import {formatISO9075} from 'date-fns';
import {Link} from 'react-router-dom';

export default function Post({_id , title , summary , cover ,  createdAt, author}){
 // const username = author.username;  // getting the username from the author object
  const value = { author };
  const username = value.author?.username;  // using destructuring to get the username from the author object
  

    return(
        <div className="post" >
          <div className="image">
            <Link to={`/post/${_id}`}>
             <img src={"http://localhost:8080/"+cover} alt="post"></img>
            </Link>
          </div>
          <div className="texts">
            <Link to={`/post/${_id}`}>
             <h2>{title}</h2>
            </Link>
            <div className="info">
              <p  className="author">{username} &nbsp; &nbsp; 
              <time className='time'>{formatISO9075(new Date(createdAt))}</time>
              </p>
              
            </div>
            <p className="summary">{summary}
            </p>
          </div>
        </div>
    );
}