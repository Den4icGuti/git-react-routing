import {Switch, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Container from "components/Container";
import Head from "./Head";
import Home from "./Pages/PageHome";
import Authors from "./Pages/AutorsPage";
import BooksPage from "./Pages/BooksPage";
import NotFoundPage from "./Pages/NotFoundPage";
import BooksDetailsView from "./BookDetails/BookDetails";

export const App = () => {
  return (
    <Container>
      <Head>
       <Navigation/>
      </Head>
       <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/authors">
          <Authors/>
        </Route>
       
        <Route path="/books" exact>
          <BooksPage/>
        </Route>
         <Route path="/books/:bookId">   
          <BooksDetailsView/>
        </Route>
        <Route>
          <NotFoundPage title='404 Упс....Что-то пошло не так, страница не найдена :('/>
       </Route>
        </Switch>
    </Container>
    );
};
