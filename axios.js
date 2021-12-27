const axios = require('axios');
require('dotenv').config()
const API_KEY = 'AIzaSyA697BpvqjTZ5zpsvyvZXwx5HMeybiGuOM';


// Get Authors
exports.books = async function() {
  try {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=Love&filter=ebooks&printType=books&maxResults=10&key=${API_KEY}`;
  const response = await axios.get(URL);
  const data = response.data.items;
    var bookArray = []
    
    data.map(item => {
      const id = parseInt(Math.random() * 200);
      const title = item.volumeInfo.title;
      const authorId = item.id;
      const books = { id, title, authorId };
      bookArray.push(books);
    });
    
    //console.log(bookArray);
    return bookArray;
    //console.log();
  } catch (error) {
    console.error(error);
  }
}
// Get Authors
exports.authors = async function () {
  try {
  const URL = `https://www.googleapis.com/books/v1/volumes?q=Love&filter=ebooks&printType=books&maxResults=10&key=${API_KEY}`;  
  const response = await axios.get(URL);
  const data = response.data.items;
  var authorArray = []
    
    data.map(item => {
      const id = item.id;
      const name =  item.volumeInfo.authors[0];
      const authors = { id, name};
      authorArray.push(authors);
    });
    //console.log(authorArray);
    return authorArray;
  } catch (error) {
    console.error(error);
  }
}
/*
exports.bookByTitle = async function (parent, args, context, info) {
  try {
      //const title = args.title;
  const title = 'Hamlet';
  const author = 'Shakespeare'
  const URL = `https://www.googleapis.com/books/v1/volumes?q=${title}&printType=books&maxResults=20&key=${API_KEY}`;
  //console.log(URL);
  const response = await axios.get(URL);
  const volInfo = response.data.items.map(item => item.volumeInfo);
  console.log(volInfo);

  } catch (err) {
    console.error(err);
  }
}
exports.bookById = async function (parent, args, context, info) {
  try {
      //const id = args.id;
  const id = 'zyTCAlFPjgYC'
  const URL =`https://www.googleapis.com/books/v1/volumes/${id}?key=${API_KEY}`
  const response = await axios.get(URL);
  //const volInfo = response.data.items.map(item => item.volumeInfo.title);
  console.log(response.data);


  } catch (err) {
    console.error(err);
  }
}
*/

//bookById();
//bookByTitle();
//getUser();
//Author();
//books();