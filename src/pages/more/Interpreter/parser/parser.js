import { useEffect } from 'react';
import FormatCode from '../../../../main_components/code_formatter';

export const ShowParser = (props) => {
  const title = "Parser";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h2>
       
      </h2>
    </>
  );
}

