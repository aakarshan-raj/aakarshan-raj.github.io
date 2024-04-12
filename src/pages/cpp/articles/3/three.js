import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { useEffect } from "react";
import SubHeading from "../../../../main_components/sub_heading";

export const ShowThreeCpp = (props) => {
  const title = "Multi-Level Games with ECS";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>
      <h2>This Blog is part of game design course that i am taking and it will only focus on making the game multi-level so we will ignore everything else like EntityManger, AssetManager, Animation.Components since these are to handle the actual game.
      </h2>

      <SubHeading
        text={"Parts:"}
        size={""}
        start_color={"#35bd9b"}
        end_color={"#ad1328"}
      />
      <h2> <ol>
        <li>GameEngine</li>
        <li>GameScene</li>
        <li>GameScene_Menu</li>
      </ol></h2>

      <SubHeading
        text={"Part I: GameEngine "}
        size={""}
        start_color={"#35bd9b"}
        end_color={"#ad1328"}
      />
      <br />
      <h2>GameEngine is the core class in this, it will handle all the scenes in the game, for that it will store:</h2>
      <h2>
        <ol>
          <li>sf::RenderWindow</li>
          <li>List (vector) of states</li>
          <li>List(vector) of State to add to Main list of states</li>
          <li>popState: any state that needs to be closed</li>
          <li>running: bool that stores if the program is running        </li>
        </ol>
      </h2>

      <h2>Methods:</h2>

      <h2>
        <ol>
          <li>Init: initialise RenderWIndow and push the GameState_Menu object using pushState,</li>
          <li>quit: closes the window</li>
          <li>pushState: pushes new State in List of states to be added.</li>
          <li>update:Pop any states if popState is non-zero, pushes new States from list of states to be added into main state vector and calls update* on last object in State vector</li>
          <li>NOTE: GameEngine wont do any rendering or user input handling </li>
        </ol>
      </h2>
      <br />
      <SubHeading
        text={"Part II: GameState "}
        size={""}
        start_color={"#35bd9b"}
        end_color={"#ad1328"}
      />
      <h2>GameState is the Base class from which our scenes will inherit, main use of GameState is to standarise the derived classes to have a update method
        and give access to GameEngine object, it stores:</h2>
      <h2><ol>

        <li>Reference to GameEngine object</li>
        <li>A bool paused, set to false</li>
      </ol></h2>
      <h2>  Methods:</h2>
      <h2><ol><li>
        <li>The constrctor sets the GameEngine object</li>
        <li>Pure virtual function update()*</li>
        <li>virtual function setPaused</li>
      </li></ol></h2>

      <br />
      <SubHeading
        text={"Part  III: GameState_Menu"}
        size={""}
        start_color={"#35bd9b"}
        end_color={"#ad1328"}
      />

      <h2>This is the menu from which we can load different levels, This class will inherit from GameState class, It will contain:</h2>

      <h2><ol><li>Any strings that we wanna show   </li>
        <li>A vector for level names   </li>
        <li>A vector for files that contain level configuration if the level is constructed by files(which in this case is true)   </li>
        <li>sf::Text : to show text   </li>
        <li>sf::Font: to render font since Texts are not rendered without font( when we have a asset class we would just access font from GameEngine object as GameState_Menu inherits from GameState which has reference to GameEngine)   </li>
        <li>m_selectedLevel: selected level
        </li></ol></h2>
      <h2>Methods</h2>
      <h2><ol><li>
        Constructor: initialise the GameEngine object using inherited GameState constructor</li>
        <li>init: initialise anything for to be shown in memory, in our case the vectors</li>
        <li>Userinput: handle the user input, change levels select if pressed W or S, if Pressed D we will create a object of the actual Game class and push it to states using GameEngine object, will deal with this later.</li>
        <li>Render: render all the menu text
        </li></ol></h2>


      <h2 style={{ textAlign: "center" }}> <a href="`https://github.com/aakarshan-raj/game-programming-sfml/tree/main/Multi-level`"> Source Code</a>
      </h2>


    </>
  );
}