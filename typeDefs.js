const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`

type Book{
    id: Int! 
    title: String
    authorId: Int
    author: Author
}
type Author{
    id: Int! 
    name: String
    books: [Book] 
}
type Student{
    id: String!
    name: String
    email: String
    collegeId: String
    college: College
}

type College{
    id: String!
    name: String
    rating: Float
    term: Int
    students: [Student]
}

#Query - Get the Available Data 
type Query{

authors:[Author!]!   # Get All Authors
author(id:Int!):Author  # Get Author By Id

books:[Book!]!    # Get All Books
book(id: Int!):Book # Get Book By Id

students:[Student!]!  # Get All Students
student(id:String!):Student # Get Student By Id

colleges:[College!]!    # Get All Colleges
college(id:String!):College  # Get College By Id
}
# Mutation - Modify The Data and Return the value 
type Mutation{
# Add Student
addStudent(name: String,email: String,collegeId: String):Student
# Add College
addCollege(id:String,name: String,rating:Float,term:Int):College
# Add Book
addBook(name:String!,authorId:Int!):Book
# Add Author
addAuthor(name:String):Author

}

`;

module.exports = typeDefs;
