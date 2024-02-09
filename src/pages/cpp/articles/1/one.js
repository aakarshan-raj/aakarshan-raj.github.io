import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"

export const ShowOneCpp = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Shared Pointers in CPP</h1>
          <hr></hr>
          <h2>Shared pointer were first released in C++11.</h2>
          <h2>It helps in managing memory on heap easier by doing the task of freeing the memory once its no longer in use which previously done by programmer itself.</h2>

          <h2>Example:</h2>

          <FormatCode
            code={code_1}
            lang="c++"
          />
          <h2>Output: 10</h2>

          <h2>Here a shared pointer is created for int.</h2>
          <h2>It holds a pointer to a memory in heap that stores value 10.</h2>
          <h2>This piece of memory is handled by shared pointer, once its out of use its, delete is called on it.</h2>
          <h2>Shared pointers can be passed to functions, assigned to other shared pointers, which may feel that it can arise dangling pointer issue but shared pointer solves it by using reference counting.</h2>
          <h2>Whenever the shared pointer is passed, copied, assigned, Its reference count increases.</h2>
          <h2>When reference counts hits 0 it deallocates the memory it was pointing to.</h2>

          <h2>Example:</h2>
          <FormatCode
            code={code_2}
            lang="c++"
          />

          <h2>At the declaration of shared pointer the RC is 0, after we initialise it it gets to 1, when passed to a function by value its increased to 2.</h2>
          <h2>After the function call the copy goes out of scope decreasing the RC to 1.</h2>

          <h2>After the main function, shared pointer goes out of scope making the RC equal to 0 which deallocates the memory being pointed to.</h2>

        </div>
      </div>
      <IssueBanner />
    </div>
  );
}

const code_1 = `#include <iostream>
#include <memory>

int main(){

  std::shared_ptr<int> ptr(new int(10));
  std::cout<<*ptr<<std::endl;

}`;

const code_2 = `#include <iostream>
#include <memory>

void print(std::shared_ptr<int> x)
{
    std::cout << "RC in function:" << x.use_count() << std::endl;
}

int main()
{

    std::shared_ptr<int> ptr;

    std::cout <<"RC at creation:"<< ptr.use_count() << std::endl;
    
    ptr = std::make_shared<int>(10);
    
    std::cout <<"RC after initialisation:"<< ptr.use_count() << std::endl;
    print(ptr);
    std::cout <<"RC after function call:"<< ptr.use_count() << std::endl;

}`;