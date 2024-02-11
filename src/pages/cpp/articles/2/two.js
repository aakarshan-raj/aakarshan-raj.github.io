import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import SubHeading from "../../../../main_components/sub_heading"
import uml from "./imgs/UML.svg"

export const ShowTwoCpp = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>ECS</h1>
          <hr></hr>

          <h2>ECS (Entity-Component-System) is a software design paradigm commonly used in game development.</h2>

          <SubHeading
            text={"Entity"}
            size={""}
            start_color={"#35bd9b"}
            end_color={"#ad1328"}
          />
          <h2>An entity represents a game object. It is essentially an identifier or a container for components. Entities themselves do not contain any data or behavior but serve as a way to group related components together.
          </h2>

          <SubHeading
            text={"Component"}
            size={""}
            start_color={"#35bd9b"}
            end_color={"#ad1328"}
          />
          <h2> Components are the data containers that hold the properties or attributes of entities. Each component typically represents a specific aspect of an entity, such as its position, velocity, appearance, behavior, etc. Entities are composed of one or more components, allowing for flexible and modular design.
          </h2>
          <SubHeading
            text={"System"}
            size={""}
            start_color={"#35bd9b"}
            end_color={"#ad1328"}
          />
          <h2>Systems are responsible for processing entities and their components. They encapsulate the logic or behavior of the game by operating on components attached to entities. Systems typically perform tasks such as updating positions, handling collisions, rendering graphics, etc. Each system focuses on a specific aspect of the game's behavior, allowing for better organization and separation of concerns.</h2>

          <h2>In an ECS implementation using object-oriented paradigm, entities are often represented as objects instantiated from a class, where each entity object contains references to its associated components. Similarly, components are implemented as objects instantiated from component classes, each containing relevant data and functionality.</h2>
          <h2>Systems are typically implemented as separate classes or modules, each containing the logic for a specific aspect of the game. These systems iterate over entities and their components, applying the necessary logic to achieve the desired behavior.</h2>
          <h2>Example:
          </h2>
          <h2>Here is a design of an ECS-oriented game which has one player and multiple enemies. The player can shoot bullets. The player, enemy, and bullet would all be entities. Each entity would have certain components.</h2>
          <div className={styles.img_container}>
            <img src={uml} />
          </div>
          <h2>Details about what the components store</h2>
          <h2>1. cTransform: Stores position and velocity</h2>
          <h2>2. cCollision: Stores radius at which collision should be calculated with</h2>
          <h2>3. cScore: Stores score</h2>
          <h2>4. cInput: Stores 4 bool value for each direction</h2>
          <h2>5. cShape: Stores Shape instance</h2>
          <h2>6. cLifeSpan: Stores for how long a entity should be alive for</h2>

          <h2>Different Entities would have different components</h2>
          <h2>Player would have all the component except cLifeSpan as player wont have a certain lifespan.</h2>
          <h2>Enemy would have not have cInput as we are not going to control the enemy, it would also not have cScore as we are not keeping track of score by enemy, and it also wont have cLifeSpan as it would only be destroyed when the player kill it.
          </h2>
          <h2>Bullet would have not have cScore and cInput same as enemy but it would have cLifeSpan as we want the bullet to be destroyed after some frames after its fired else it would go out of screen and just be in memory.</h2>
          <h2>The distinction between different type of enemies can be made through a tag on each enetity object and by which components it have</h2>
          <h2>Example of entity class:</h2>
          <FormatCode
            code={code_1}
            lang={"c++"}
          />
          <h2>The init function which is called in constructor adds player using spawnPlayer function and spawnEnemy adds first enemy.</h2>
          <h2>After that we call the run function which is a public function that contains the game loop:</h2>
          <FormatCode
            code={code_2}
            lang={"c++"}
          />

          <h2>The game loop logic is such that it calls the lifespan system function, which goes over each entity that has a lifespan component, and if they are over their span, it destroys those entities.</h2>

          <h2>After that, we call the movement system function that updates the position of each entity. The enemies would have bouncing motion, which changes direction if it hits a boundary. The movement system keeps track of that.</h2>

          <h2>The collision system calculates the distance between entities that can collide: player to enemy collision and bullet to enemy collision. If there is any collision, it destroys the entities that are colliding and updates the score.</h2>

          <h2>The UserInput system function listens for any key press and updates the component.</h2>

          <h2>The Render system function draws all the entities.</h2>

          <h2>The enemySpawner spawns new enemies after every 100 frames.</h2>

          <h2>As seen, all the system functions here deal with the logic side. They manipulate components of entities according to the logic of the function.</h2>

          <h2>This game is highly modifiable as we can include new property to any entity by introducing a new component and make changes in system function to do whatever we want.</h2>




        </div>
      </div>
      <IssueBanner />
    </div>
  );
}


const code_1 = `class Entity
{
private:
	size_t			m_id		{ 0 };
	std::string     m_tag 	= "default";
	Entity(size_t id, const std::string& tag);

public:
	std::shared_ptr<CTransform> cTransform;
	std::shared_ptr<CCollision> cCollision;
	std::shared_ptr<CScore>		cScore;
	std::shared_ptr<CInput>		cInput;
	std::shared_ptr<CLifeSpan>	cLifespan;
	std::shared_ptr<CShape>		cShape;
}`;


const code_2 = `void Game::run()
{
	while (m_running)
	{
		if (!m_paused)
		{
			sLifeSpan();
			sMovement();
			sCollision();
		}
		sUserInput();
		sRender();
		++m_currentFrame;
		if (m_currentFrame % 100 == 0)
		{
			sEnemySpawner();
		}
	}
}`;

