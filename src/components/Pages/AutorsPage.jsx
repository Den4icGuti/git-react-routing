import { useState, useEffect } from "react";
import { NavLink,useRouteMatch,Route} from "react-router-dom";
import AuthorsTitle from "components/PageHeading/AutorsTitle";
import AuthorSubInfo from "components/AuthorSubInfo";
import { fetchAuthors } from 'services/bookshelf-api';


const Authors = () => { 
  const [authors, setAuthors] = useState(null)
  const { url } = useRouteMatch();

  useEffect(() => { 
    fetchAuthors().then(setAuthors);
  },[])

  return (

    <>
      <AuthorsTitle title='Авторы' />

      <ul>
        {authors && authors.map(author => <li key={author.id}>
          <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
        </li>
        )}
      </ul>
      <hr />
      <Route path="/authors/:authorId">
       {authors && <AuthorSubInfo authors={authors}/>} 
      </Route>
    </>
  );
}
export default Authors;