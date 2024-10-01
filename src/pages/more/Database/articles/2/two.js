import { useEffect } from "react";
import styles from "../../../../../styles/styles.module.css"
import SubHeading from "../../../../../main_components/sub_heading"
export const ShowTwoDatabase = (props) => {
  const title = "LRU and LRUK cache replacement policy";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <h1 className={styles.title}></h1>
      <hr></hr>
      <h2>
        <SubHeading
          text={"LRU"}
          size={""}
          start_color={"#35bd9b"}
          end_color={"#ad1328"}
        />
        <br /> <br />
        LRU (Least Recently Used) is replacement policy which tracks how recently each item has been used in cache , it evicts the most least recently used piece of data when the memory runs out of space for other data and we need to make space.
       <br/> It can be implemented with a simple deque and a map for faster access.
        <br />
        <br />

        <SubHeading
          text={"LRUK"}
          size={""}
          start_color={"#35bd9b"}
          end_color={"#ad1328"}
        /> <br /> <br />
        LRUK (k=2) maintains a record of the last two access histories for each page in the cache. During the eviction process, it selects the page that was accessed the earliest. Pages with insufficient access history (fewer than k records) become prime candidates for eviction. Among those with fewer than k records, the one with the earliest access history is chosen for eviction.
        <br />

        Steps:
        <br />
        <br />

        - Iterate over the list of pages in the cache.  <br /> <br />
        - Calculate the k_distancek\_distancek_distance for each page, which is the difference between the current timestamp and the page's earliest access timestamp. <br /> <br />
        - Track the page with the maximum k_distance and mark it as a candidate for eviction. <br /> <br />
        - If a page has fewer than k access records, add it to a temporary list. <br /> <br />
        - If the temporary list is not empty, find the page in the list with the earliest access timestamp and mark it for eviction instead of the one with the max k_distancek\_distancek_distance. <br /> <br />
        - Evict the marked page from the cache. <br /> <br />
        <br /> <br />
        LRU is LRU with k=1 since we track only first access history.
      </h2>

    </>
  );
}

