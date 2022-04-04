const BASE_URL = ' http://localhost:4040';

//===Обработка ошибок запроса с сервера===//

async function fetchWithErrorHandling(url = '', config = {}) { 
  const response = await fetch(url, config);

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

//===Получаем книги с сервера===//
export const fetchBooks = () => { 
  return fetchWithErrorHandling(`${BASE_URL}/books`)
}

//===Получаем автора книги===//
export const fetchAuthors = () => { 
  return fetchWithErrorHandling(`${BASE_URL}/authors?_embed=books`)
}

export const fetchBookId = (bookId) => { 
  return fetchWithErrorHandling(`${BASE_URL}/books/${bookId}?_expand=author`)
}



