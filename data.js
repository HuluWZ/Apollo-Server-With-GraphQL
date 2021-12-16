var data ={
  authors:() => 
  [
    { id: 1, name: 'J. K. Rowling' },
    { id: 2, name: 'J. R. R. Tolkien' },
    { id: 3, name: 'Brent Weeks' },
    { id: 4, name: 'Agatha Christie' },
    { id: 5, name:'William Shakespeare'},
    { id: 6, name: 'Barbara Cartland' },
    { id: 7, name:'Danielle Steel'},
    { id: 8, name:'Sidney Sheldon'}
  ],
  books:() =>
[
	{ id: 1, title: 'Harry Potter and the Chamber of Secrets',authorId: 1 },
	{ id: 2, title: 'Harry Potter and the Prisoner of Azkaban',authorId: 1},
	{ id: 3, title: 'Harry Potter and the Goblet of Fire',authorId: 2},
	{ id: 4, title: 'The Fellowship of the Ring',authorId: 2},
	{ id: 5, title: 'The Two Towers',authorId: 2 },
	{ id: 6, title: 'The Return of the King',authorId: 3},
	{ id: 7, title: 'The Way of Shadows',authorId: 3 },
  { id: 8, title: 'Hamlet', authorId: 5 },
  { id: 9, title: 'Macbeth', authorId: 5 },
  { id: 10, title: 'Romeo and Juliet', authorId: 5 },
  { id: 12, title: 'The Murder of Roger Ackroyd', authorId: 4 },
  { id: 13, title: 'The Wicked marquis', authorId: 6 },
  { id: 14, title: 'The Butler', authorId: 7 },
  { id: 15, title: 'Tell Me Your Dreams', authorId: 8 },
  { id: 16, title: 'If Tomorrow Comes', authorId: 8 },
  { id: 17, title: 'Nothing Lasts Forever', authorId: 8 }  
]
,
students:() =>
  [
    { id: "ETS001/11", name: "Alex Graham", email: "Alex@gmail.com", collegeId: "Col-100" },
    { id: "ETS010/11", name: "Luis Figo", email: "figo@gmail.com", collegeId: "Col-102" },
    { id: "ETS011/11", name: "Mark Lucas", email: "lucasMark@gmail.com", collegeId: "Col-101" },
    { id: "ETS0801/11", name: "Alphonso Davies", email: "davies@gmail.com", collegeId: "Col-100" },
    { id: "ETS101/11", name: "John Doe", email: "johndoe@gmail.com", collegeId: "Col-100" }
  ]
,colleges:() =>
  [
    { id: "Col-100", name: "Software", rating: 5.0, term: 4 },
    { id: "Col-101", name: "Electrical", rating: 4.8, term: 5 },
    { id: "Col-102", name: "Mechanical", rating: 4.9, term: 5 }
  ]
};

module.exports = data;