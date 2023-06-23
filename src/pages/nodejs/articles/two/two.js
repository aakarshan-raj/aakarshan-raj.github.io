import styles from "./styles.module.css"


export const ShowTwoNodejs = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Using Mongoose in NodeJs.</h1>
          
            <hr></hr>

          
            <div className={styles.content}>
                 <h1>This tutorial assumes you already have all the dependencies and a connection to your mongoDB database.</h1>
                <h2>BEST PRACTICE: wrap the connection code in a function and import it in 
App.js then use await to first make a connection to DB first,then start your server.</h2>
<h2>make a separate .env file and store the connection string there.
to Access it in App.js you need to import dotenv first
`require("dotenv").config()`
to access the variable use `process.env.VARIABLE_NAME`</h2>
            <h2>Now let's get started.
for queries create a new file `models.js`</h2>
<h2>we need to create a schema for the document that we are going to insert</h2>
            <div className={styles.code_background}>
            const schema = mongoose.Schema(&#123;key1:type_of_key, key2:type_of_key,...&#125;)
                </div>
            <h2>Now we will setup the model.</h2>
          <h2>what is a model? </h2>
          <h2>what are the difference between model and schema?
we can think of schema as a blueprint of how the tables will look like and model acts a interface that lets us work with the tables
Model is an wrapper for schema
to make model:</h2>

            <div className={styles.code_background}>
              <pre>`const our_model =  mongoose.Model("Name_of_collection",schema_name)`</pre>
            </div>
            <h2>
            the first argument is the name of the collection we are going to use and 2nd argument isthe schema for which it will work as a wrapper
            </h2>
           <h2>Now using this model we can do CRUD.</h2>
           <h2>import the model in App.js and use .create() method on it to insert a document</h2>
<div className={styles.code_background}>
  <pre>our_model.create(&#123;name:"someone",work:"something"&#125;)</pre>
</div>
<h2>this returns a promise
use of await is recommened.
</h2>
     <h2>

right now we are manually sending the data, we can set a POST endpoint and then use express.json() middleware to receive the data. for development process use postman.
     </h2>

            </div>
             

            
            </div>
          </div>
        </div>
      );
}

