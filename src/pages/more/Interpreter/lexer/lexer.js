import { useEffect } from 'react';
import FormatCode from '../../../../main_components/code_formatter';

export const ShowLexer = (props) => {
  const title = "Lexer";
  useEffect(() => {
    props.setTitle(title)
  }, []);
  return (
    <>
      <hr></hr>
      <h2>
        Lexer processes source code and emits tokens that are recognised by the language.<br /><br />
        Input: source code as string <br />
        output: Tokens<br />
        Main function:<br />

        next_token()<br /><br />

        Helper functions:<br />
        <ol>
          <li>isLetter</li>
          <li>isDigit</li>
          <li>skipWhiteSpace</li>
          <li>getWord</li>
          <li>getDigit</li>
          <li>peek</li>
          <li>concate_single_token</li>
        </ol>
        <br /><br />

        Token defination:<br /><br />

        <FormatCode
          language={"cpp"}
          code={code}
        />
        <br /><br />
        Main idea<br /><br />
        <ol>
          <li>Core function is next_token which would emit tokens that are currently recognised by our Lexer</li><br />
          <li> For single char tokens such as:  !, +, - etc we match the tokens and create a Token object and return it</li><br />
          <li>For Multi char tokens word tokens such as return, true, let or variable name</li><br />
          <ol>
            <li>detect current char is a letter</li><br />
            <li> read and update current char till we read whole of word</li><br />
            <li>check if its a keyword if yes return the token</li><br />
            <li>else return it as variable name</li><br />
          </ol>
          <li>For digits do the same process as for words</li><br />
          <li>At the end of source code string return EOF , specifying the source code ended</li><br />
        </ol><br />
        <a href="https://github.com/aakarshan-raj/interpreter/blob/main/lexer/lexer.cc">Source code </a>

      </h2>
    </>
  );
}

const code = `struct Token
{
    std::string Type;
    std::string Literal;

    friend std::ostream &operator<<(std::ostream &os, Token &tok);
};`;
