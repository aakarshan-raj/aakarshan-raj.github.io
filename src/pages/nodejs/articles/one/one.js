import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import myImage from "./assets/logo.png"


export const ShowOneNodejs = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Setting Up Mongoose in Nodejs</h1>

          <hr></hr>

          <div className={styles.img_container}>
            <img src={myImage} className={styles.logo} />
          </div>

          <div className={styles.content}>
            <h1>Mongoose is an popular ODM for MongoDB in Nodejs</h1>
            <h2>To get started we will need a databse to play with. Either install MongoDB Locally for get a free account on mongoDB atlas. We will follow the second way
              as it</h2>
            <h2> would be more practical. You first need to create a new cluster then create a new Collection. After than get your "connection string" through </h2>
            <h2> Connect_to_your_application -&gt; Drivers. Now we have to set up our Nodejs Project.  </h2>

            <h2>the connection string is to connect to your cluster, it looks like this:</h2>
            <div className={styles.code_background}>`[mongodb+srv://&ls;user&gt;&ls;password&gt;@nodejsproject.y9xb2ep.mongodb.net/DATABASE_NAME?retryWrites=true&w=majority]`</div>
            <h2>the DATABASE_NAME is the name of the database in your cluster that you want to use.</h2>


            <div className={styles.code_background}>
              <pre>$ npm init -y</pre>
              <pre>$ npm install mongoose</pre>
              <pre>$ npm install nodemon</pre>
              <pre>$ npm install express</pre>
              <pre>$ npm install dotenv</pre>
            </div>

            <h2>dotenv is usefuil when we have sensitive information in our project that we don't want to push to github</h2>
            <h2>nodemon is excellent when we work with express as it reruns the program everytime we make changes and save them</h2>
            <h2>make a App.js in current directory</h2>
            <h2>add "start": "nodemon App.js" to scripts in package.json</h2>
            <h2>Now we can start working on App.js</h2>
            <h2>1. import mongoose</h2>
            <div className={styles.code_background}>
              <pre>const mongoose = require("monggose")</pre>
              <pre>const connection_string = ""</pre>
            </div>
            <h2>now we need to call connect() function of mongoose and pass the `connection_string` it will return a promise.</h2>
            <h2>mongoose.connect(connection_string).then().catch()</h2>
            <h2>now we have connection to our cloud database</h2>
            <h2>we can now make queries using mongoose, and create collections(tables) and insert documents (rows)</h2>
          </div>



        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

