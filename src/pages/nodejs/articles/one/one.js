import styles from "./styles.module.css"
import myImage from "./assets/logo.png"


export const ShowOneNodejs = ()=>{
    return (
      <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
        <h1 className={styles.title}>Setting Up Mongoose in Nodejs</h1>
          
            <hr></hr>

            <div className={styles.img_container}>
             <img src={myImage} className={styles.logo}/>
            </div>
            
            <div className={styles.content}>
                 <h1>Mongoose is an popular ODM for MongoDB in Nodejs</h1>
                 <h2>To get started we will need a databse to play with. Either install MongoDB Locally for get a free account on mongoDB atlas. We will follow the second way
                  as it</h2>
            <h2> would be more practical. You first need to create a new cluster then create a new Collection. After than get your "connection string" through </h2>
            <h2> Connect_to_your_application -&gt; Drivers. Now we have to set up our Nodejs Project.  </h2>
            

            <div className={styles.code_background}>$ npm install mongoose</div>


            </div>

             

            
            </div>
          </div>
        </div>
      );
}

