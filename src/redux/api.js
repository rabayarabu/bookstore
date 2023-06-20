const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';
const key = 'PgGKlkSQ3BovTGvH2CAc';
const GET_BOOKS = `${baseUrl}/apps/${key}/books`;
const POST_BOOK = `${baseUrl}/apps/${key}/books`;
const DEL_BOOK = `${baseUrl}/apps/${key}/books`;

export { GET_BOOKS, POST_BOOK, DEL_BOOK };
export default baseUrl;
