import { useState,useEffect  } from "react";
import PageBooksTitle from "components/PageHeading/PageBooksTitle";
import { fetchBooks } from "services/bookshelf-api";
import { Link,useRouteMatch } from "react-router-dom";

const BooksPage = () => { 
  const [books, setBooks] = useState([]);
  const {url} = useRouteMatch()
  const match = useRouteMatch();
  console.log(match);

  useEffect(() => { 
  fetchBooks().then(setBooks)
  },[])

    //===Рендерим список книг===//
  return (
   <section >
      <PageBooksTitle title='Книги' />
    
      {books && books.map(book => 
        <li key={book.id}>
          <Link to={`${url}/${book.id}`}>{book.title}</Link>
        </li>
      )}
   </section>
  )
}
export default BooksPage;