1)	Mention the working of Internet Website in Terms of Front-end & Back-end Divisions

A website consist of two components mainly which are frontend and backend. Frontend is a interface for the user between user and system where user can interact and see the content.
Frontend has design and content which is useful for the users.a frontend can be accessed on browser where browser renders the website to serve to the users.

Backend of website consist of functional and computational part of the website where it consist of various apis and databases. Backend provides functionality which cannot be achieved throught frontend only like database and storage of files.

Internet website can be only static if we do not use backend systems so by making use of backend servers and databases we can make our website very interactive and dynamic where user can do more tasks and functions.

2)	What are tags in HTML? Explain the each category of tag with an Example.
<html lang=”es”><html/>  - this is the main tag of html file where we put all the html code
<head><head/> - this tag used to keep all the extra related information about html document other than content

<body><body/> - we put our actual content in this tag actually

<br>  - this is break tag used to give newline

<div>: The <div> element is a container that allows you to group and organize other HTML elements. 

<input>: The <input> element is used to create various types of input fields where users can enter data. 

<button>: The <button> element represents a clickable button on a webpage. 
<h1>, <h2>, <p>: These are headings and paragraphs. <h1> is the highest level heading, followed by <h2>, and so on. Headings are used to structure and provide hierarchy to the content on a webpage. <p> represents a paragraph of text.

<form>: The <form> element is used to create a container for input fields, buttons, and other elements related to form submission


3)	Explain the working Procedure of Virtual DOM.
Virtual DOM is an copy of real document object model (DOM) which is a representation of html document internally in browser using data structures and maintains relationships among them.

So virtual dom is not actual dom in memory but its just lightweight copy of it maintained  by reactjs and it is just javascript object.

So whenever we do any changes to the document then it is done on virtual dom and it creates new virtual dom  on every changes so reactjs compares current virtual dom with previous one and checks where the changes has been made so that it can be done on real dom on that partular component only.

4)	Mention some Differences between MySQL and No SQL
MySQL is relational database based on  row columns tables and where as No SQL is non relational database where data is stored in the form of object in BSON type and uses different techniques internally.

MySQL is not scalable horizontally as it has fixed schemas and constraints of datatype whereas NoSQL has flexible schemas and datatypes and is scalable in anyway.

Mysql can not be used for hierarchical databse but no sql can be.

Mysql can be used for complex queries like where joins are needed but in nosql we cannot do that.

5)	Explain any one DBMS Technology in your own words
MongoDB is a flexible and scalable NoSQL database. It stores data in JSON-like documents, allowing for flexible schemas. It supports horizontal scaling and high availability through sharding and replication. 
MongoDB offers a powerful query language and indexing capabilities for efficient data retrieval. It provides various consistency models and an aggregation framework for advanced data processing. With its features, MongoDB is suitable for diverse applications, providing developers with a modern and adaptable approach to data management.