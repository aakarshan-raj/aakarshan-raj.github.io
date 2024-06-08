import { useEffect } from "react";


export const ShowOneDatabase = (props) => {
  const title = "Trie";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr />
    </>
  );
}
