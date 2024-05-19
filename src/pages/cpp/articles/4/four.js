import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import { useEffect } from "react";

import img1 from "./img/1.png"
import img2 from "./img/2.png"
import img3 from "./img/3.png"
import img4 from "./img/4.png"
import img5 from "./img/5.png"
import img6 from "./img/6.png"
import img7 from "./img/7.png"

import program from "./img/program.gif"


export const ShowFourCpp = (props) => {
  const title = "Collision Detection and Resolution";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>
      <h2>Detecting Collision in 2D space between two object and resolving the collision.</h2>
      <h2>Detecting collision between two objects involves two basic step:</h2>

      <h2>
        <ol>
          <li>Detect x-axis overlap</li>
          <li>Detect y-axis overlap</li>
        </ol>
        If both of these condition are true, two objects are colliding
      </h2>
      <h2>1. x-axis overlap</h2>
      <h2>When two objects share a potion of their horizontal range it means they have same overlap in their X position</h2>

      <div className={styles.img_container}>
        <img src={img1} />
      </div>


      <h2>if a vertical line is drawn in range of shared horizontal range, it would cross both the shapes <br /><br />

        let x1,y1 be center co-ordinate, w1 be width and h1 be height of object A<br />
        let x2,y2 be center co-ordinate, w2 be width and h2 be height of object B<br />
        <br />
        Formula for x-axis overlap can be deduced from making sure of two conditions:<br /><br />



        <ol>
          <li>x1 - ( w1 / 2 ) &lt; x2 &#43; ( w2 / 2 )   (Object B rightmost x value is always greater than Object A leftmost x)</li>
          <li> x2 - ( w2 / 2 ) &lt; x1 &#43; ( w1 / 2 )    (Object B leftmost x value is always less than Object A rightmost x value)</li>
        </ol>

        <br />
        <br />

        2. y-axis overlap<br /><br />

        When two objects share a potion of their vertical range it means they have same overlap in their Y position
        <br /><br />
        <div className={styles.img_container}>
          <img src={img2} />
        </div>

        <br />

        if a horizontal line is drawn in range of shared vertical range, it would cross both the shapes<br /><br />


        <ol>
          <li> y1 - ( h1 / 2 ) &lt; y2 &#43;  ( h2 / 2 )   (Object B topmost y value is always greater than Object A downmost y) </li>
          <li> y2 - ( h2 / 2 ) &lt; y1 &#43; ( w1 / 2 )   (Object B downmsot y value is always less than Object A topmost y value)</li>
        </ol>

        <br />

        When all the four condition are true we have a collision<br /><br />
        <br />
        <div className={styles.img_container}>
          <img src={img3} />
        </div>

        <br /><br />

        That was easy to calculate, just 4 conditions.<br /><br />
        Now for collision resolution
        In order to resolve the collision we need to know the direction in which the collision came from so we can resolve collision in that direction, if a object comes and hits another object from top we would wanna either push it back in y-axis in opposite direction or stop it.
        <br />
        To detect the direction of collision we need to find the axis of overlap just before collision, that would tell us the direction of collision.

        <br /><br />
        Case 1: horizontal collision:<br />
        <br />
        <div className={styles.img_container}>
          <img src={img4} />
        </div>

        <br />

        In this case there is a y-overlap before collision so we can tell the direction of collision<br />
        <br />
        Case 2: vertical collision
        <div className={styles.img_container}>
          <img src={img5} />
        </div>

        <br />
        in this case there is a x-overlap before collision.
        <hr />
        <br />
        In order to resolve the collision we need to know the area of collision else we have to calculate the position that doesn't collide which is not a really good approach.
        <br />
        Formula for area of collision
        <br />

        <ol><li>1. ox = ( w1 / 2 ) + ( w2 / 2) - dx</li></ol>
        <div className={styles.img_container}>
          <img src={img6} />
        </div>

        <br />
        where dx = abs(x2-x1) <br />


        <ol><li>2. oy = ( h1 / 2 ) + ( h2 / 2 ) - dy</li></ol>
        <div className={styles.img_container}>
          <img src={img7} />
        </div>

        where dy = abx(y2-y1) <br />
        ox would give us overlap in x direction<br />
        oy would give us overlap in y direction<br /><br />

        using this information we can handle collision between two object.
        <br />

        <ol>
          <li>collision detected</li>
          <li> find the direction of collsion using previous overlap value</li>
          <li>resolve the collision, either stop the object from moving or</li>


        </ol>

        <div className={styles.img_container}>
          <img src={program} />
        </div>
        push the object further<br />

        Source code for the above <a href="https://github.com/aakarshan-raj/Collision_detection">program</a>
      </h2>

    </>
  );
}