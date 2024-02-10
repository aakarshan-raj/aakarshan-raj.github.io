import IssueBanner from "../../../../main_components/issue_banner";
import styles from "../../../../styles/styles.module.css"
import FormatCode from "../../../../main_components/code_formatter"
import SubHeading from "../../../../main_components/sub_heading";

export const ShowOneCpp = () => {
  return (
    <div className={styles.book_container}>
      <div className={styles.book}>
        <div className={styles.book_content}>
          <h1 className={styles.title}>Shared Pointers in CPP</h1>
          <hr></hr>
          <h2>Shared pointer were first released in C++11.</h2>
          <h2>It helps in managing memory on heap easier by doing the task of freeing the memory once its no longer in use which previously done by programmer itself.</h2>

          <h3>Example:</h3>

          <FormatCode
            code={code_1}
            lang="c++"
          />
          <h3>Output: 10</h3>

          <h2>Here a shared pointer is created for int.</h2>
          <h2>It holds a pointer to a memory in heap that stores value 10.</h2>
          <h2>This piece of memory is handled by shared pointer, once its out of use its, delete is called on it.</h2>
          <h2>Shared pointers can be passed to functions, assigned to other shared pointers, which may feel that it can arise dangling pointer issue but shared pointer solves it by using reference counting.</h2>
          <h2>Whenever the shared pointer is passed, copied, assigned, Its reference count increases.</h2>
          <h2>When reference counts hits 0 it deallocates the memory it was pointing to.</h2>

          <h3>Example:</h3>
          <FormatCode
            code={code_2}
            lang="c++"
          />

          <h2>At the declaration of shared pointer the RC is 0, after we initialise it it gets to 1, when passed to a function by value its increased to 2.</h2>
          <h2>After the function call the copy goes out of scope decreasing the RC to 1.</h2>

          <h2>After the main function, shared pointer goes out of scope making the RC equal to 0 which deallocates the memory being pointed to.</h2>

          <SubHeading
            text={"Practical Example"}
          />
          <h2>Polymorphism:</h2>
          <h2>

            Polymorphism, a fundamental concept in OOP, empowers us to establish a base class and further derive classes from it. These derived classes inherit from the base class while possessing the ability to implement their own methods for virtual functions within their respective scopes.</h2>
          <h3>Example:</h3>
          <FormatCode
            code={code_3}
            lang="c++"
          />
          <h3>output:</h3>
          <h2>Draw a Circle
            Draw the genric shape</h2>
          <h2>Here using polymorphism we are treating objects of different classes as if they were of the same class, and as they implement same interface which allows us to write generic code that works with both objects.</h2>
          <h2>In the Above example we can use shared pointers:</h2>
          <FormatCode
            code={code_4}
            lang="c++"
          />
          <h2>With shared pointers, you don't have to manually manage memory deallocation like with raw pointers. When the last shared pointer to an object goes out of scope, the object is automatically deleted thanks to reference counting. However, it's important to understand that shared pointers have some overhead due to managing reference counts, so consider their performance implications. While shared pointers offer automatic deletion and shared ownership, keep in mind that proper RAII techniques with raw pointers can also achieve effective memory management..
          </h2>
          <h2>Polymorphism and shared pointers play a key role in the Entity Component System (ECS) architecture. By using inheritance and shared pointers to manage components and entities, you can achieve clean and modular code. In your next article, we'll explore how polymorphism facilitates communication between components and systems, and how shared pointers enable safe and efficient component sharing within the ECS.
          </h2>

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

const code_3 = `#include <iostream>

class Shape
{
public:
    virtual void draw()
    {
        std::cout << "Draw the generic shape" << std::endl;
    }
};

class Circle : public Shape
{
public:
    void draw() override
    {
        std::cout << "Draw a Circle" << std::endl;
    }
};

int main()
{

    Shape *s1 = new Circle;
    Shape *s2 = new Shape;

    s1->draw();
    s2->draw();
    delete s1;
    delete s2;

}`;
const code_4 = `
int main()
{

    std::shared_ptr<Shape> s1 = std::make_shared<Circle>();
    std::shared_ptr<Shape> s2 = std::make_shared<Shape>();

    s1->draw();
    s2->draw();
}`;