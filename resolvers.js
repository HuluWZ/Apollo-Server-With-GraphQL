const { ApolloServer, gql } = require('apollo-server');

//var data = require('./data')
const axios = require('./axios');

const data = async (req, res) => {
      var books = await axios.books();
      var authors = await axios.authors();
      return {books,authors}
}

const authors = axios.authors();
const books = axios.books();
console.log(authors, books);

/*
const students = data.students();
const colleges = data.colleges();
*/
const resolvers = {
  Query: {   
 book(parent, args, context, info)  { return books.find(book => book.id === args.id)},
 books(){return books},
       
 author(parent, args, context, info) {return  authors.find(author => author.id === args.id)},
 authors() { return authors},

 student(parent, args, context, info) {return students.find(student => student.id === args.id)},
 students() {return students},

 college(parent, args, context, info){return colleges.find(College => College.id === args.id)},
 colleges() { return colleges },
      },
Author: {
      book:  async (author) => {
            const books = await axios.books();
            console.log(books);
      return books.find((book) => book.authorId == author.id)
      } 
},
Book: {
      author:  async (book) => {
            const authors = await axios.authors();
      return authors.find((author) => author.id === book.authorId)
      } 
},
Student: {
    college: (student) => {
        return colleges.find(college => college.id === student.collegeId)
  }
},
College: {
  students: (college) => {
        return students.filter(student => student.collegeId === college.id)
      }
},
// Mutation
Mutation:{
  addBook(parent, args, context, info) {
        const book = { id: books.length + 1, title: args.title}
        books.push(book)
        return book
  },
  addAuthor(parent, args, context, info)  {
      const author = { id: authors.length + 1, name: args.name }
      authors.push(author)
      return author
  },
  addStudent(parent, args, context, info)  {
        let id = students[students.length - 1].id; //"ETS101/11" 
        let idString = id.split("ETS")[1];
        let ids = idString.split("/")[0];
        let lastId = parseInt(ids) + 1;
        const ID = `ETS${lastId}/11`;
        const student = { id: ID, name: args.name, email: args.email, collegeId: args.collegeId };
        students.push(student);
        return student;
  },
  addCollege(parent, args, context, info)  {
        const college = { id: args.id, name: args.name, rating: args.rating, term: args.term };
        colleges.push(college);
        return college;
  }

  }

};

module.exports = resolvers
