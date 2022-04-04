import { useParams,Link,useRouteMatch } from "react-router-dom";
import { useState, useEffect } from "react";
import PageHeading from "components/PageHeading/AutorsTitle";
import * as bookShelAPI from 'services/bookshelf-api';


const BooksDetailsView = () => { 
  const [books, setBook] = useState(null);
  
  const { url } = useRouteMatch();
  //===Получаем денмические параметры через хук useParams===//
  const {bookId} = useParams();
  
  useEffect(() => { 
   bookShelAPI.fetchBookId(bookId).then(setBook);
  }, [bookId])
  
  return (
    <section>
      <PageHeading title={`Kнига ${bookId}`} />
      {books && (<>
        <img src={books.imgUrl} alt='' />
        <h2>{books.title}</h2>
        <p>{books.descr}</p>
        <p>{books.genre}</p>
        <p>Автор: {books.author.name}</p>

      </>)}

      <button type="button">Назад
        <Link to={`${url}/${books}`}></Link>
      </button>
    </section>
  );
}

export default BooksDetailsView;