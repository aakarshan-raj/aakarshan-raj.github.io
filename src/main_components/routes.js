import { Route, Routes } from "react-router-dom";

import { ShowReact } from '../pages/react/react';
import { ShowOneReact } from "../pages/react/articles/1/one";
import { ShowTwoReact } from "../pages/react/articles/2/two";

import { ShowCpp } from '../pages/cpp/cpp';
import { ShowOneCpp } from "../pages/cpp/articles/1/one";
import { ShowTwoCpp } from "../pages/cpp/articles/2/two"
import { ShowThreeCpp } from "../pages/cpp/articles/3/three";

import { ShowNodejs } from '../pages/nodejs/nodejs';
import { ShowOneNodejs } from '../pages/nodejs/articles/1/one';
import { ShowTwoNodejs } from "../pages/nodejs/articles/2/two";

import { ShowRust } from '../pages/rust/rust';
import { ShowOneRust } from "../pages/rust/articles/1/one";
import { ShowTwoRust } from "../pages/rust/articles/2/two";
import { ShowThreeRust } from "../pages/rust/articles/3/three";
import { ShowFourRust } from "../pages/rust/articles/4/four";
import { ShowFiveRust } from "../pages/rust/articles/5/five";
import { ShowSixRust } from "../pages/rust/articles/6/six";
import { ShowSevenRust } from "../pages/rust/articles/7/seven";
import { ShowEightRust } from "../pages/rust/articles/8/eight";
import { ShowNineRust } from "../pages/rust/articles/9/nine";
import { ShowTenRust } from "../pages/rust/articles/10/ten";

import { Clippy } from "../pages/rust/articles/10/exercises/clippy/clippy";
import { Conversations } from "../pages/rust/articles/10/exercises/conversions/conversations";
import { Enums } from "../pages/rust/articles/10/exercises/enums/enum";
import { ErrorHandling } from "../pages/rust/articles/10/exercises/error_handling/error_handling";
import { Functions } from "../pages/rust/articles/10/exercises/functions/funtions";
import { Generics } from "../pages/rust/articles/10/exercises/generics/generics";
import { Hashmaps } from "../pages/rust/articles/10/exercises/hashmaps/hashmap";
import { If } from "../pages/rust/articles/10/exercises/if/if";
import { Intro } from "../pages/rust/articles/10/exercises/intro/intro";
import { Iterators } from "../pages/rust/articles/10/exercises/iterators/iterators";
import { Lifetimes } from "../pages/rust/articles/10/exercises/lifetimes/lifetimes";
import { Macros } from "../pages/rust/articles/10/exercises/macros/macros";
import { Modules } from "../pages/rust/articles/10/exercises/modules/modules";
import { MoveSemantics } from "../pages/rust/articles/10/exercises/move_semantics/move_semantics";
import { Options } from "../pages/rust/articles/10/exercises/options/options";
import { PrimitiveTypes } from "../pages/rust/articles/10/exercises/primitive_types/primitive_types";
import { Quiz } from "../pages/rust/articles/10/exercises/quiz/quiz";
import { SmartPointers } from "../pages/rust/articles/10/exercises/smart_pointers/smart_pointers";
import { Strings } from "../pages/rust/articles/10/exercises/strings/strings";
import { Structs } from "../pages/rust/articles/10/exercises/structs/structs";
import { Tests } from "../pages/rust/articles/10/exercises/tests/tests";
import { Threads } from "../pages/rust/articles/10/exercises/threads/threads";
import { Traits } from "../pages/rust/articles/10/exercises/traits/traits";
import { Variables } from "../pages/rust/articles/10/exercises/variables/variables";
import { Vecs } from "../pages/rust/articles/10/exercises/vecs/vecs";

import { ShowAlu } from "../pages/more/ALU/alu";
import { ShowRam } from "../pages/more/RAM16K/ram";

import { ShowBooks } from '../pages/books/books'
import { ShowMain } from '../pages/main/ShowMain';
import { NotFound } from "./404";

import { ShowAssembly } from "../pages/more/Assembly/assembly";
import { ShowOneAssembly } from "../pages/more/Assembly/articles/1/one";
import { ShowTwoAssembly } from "../pages/more/Assembly/articles/2/two";
import { ShowThreeAssembly } from "../pages/more/Assembly/articles/3/three";
import { ShowFourAssembly } from "../pages/more/Assembly/articles/4/four";

import { LabOne } from "../pages/more/Assembly/articles/4/lab_1/Lab";
import { LabTwo } from "../pages/more/Assembly/articles/4/lab_2/Lab";
import { LabThree } from "../pages/more/Assembly/articles/4/lab_3/Lab";
import { LabFour } from "../pages/more/Assembly/articles/4/lab_4/Lab";
import { LabFive } from "../pages/more/Assembly/articles/4/lab_5/Lab";
import { LabSix } from "../pages/more/Assembly/articles/4/lab_6/Lab";
import { ShowCPU } from "../pages/more/CPU/cpu";
import { ShowComputer } from "../pages/more/Computer/computer";

import { ShowGraph } from "../pages/more/Graphs/graphs";
import { ShowOneGraph } from "../pages/more/Graphs/articles/1/one";
import { ShowTwoGraph } from "../pages/more/Graphs/articles/2/two";
import { ShowThreeGraph } from "../pages/more/Graphs/articles/3/three";


export const DeclareRoutes = (props) => {
    return (
        <div>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path='/nodejs/one' element={<ShowOneNodejs />} />
                <Route path='/nodejs/two' element={<ShowTwoNodejs />} />
                <Route path='/alu' element={<ShowAlu />} />
                <Route path='/ram16k' element={<ShowRam />} />
                <Route path='/cpu' element={<ShowCPU />} />
                <Route path='/computer' element={<ShowComputer />} />

                <Route path='/cpp/one' element={<ShowOneCpp />} />
                <Route path='/cpp/two' element={<ShowTwoCpp />} />
                <Route path='/cpp/three' element={<ShowThreeCpp />} />

                <Route path='/react/one' element={<ShowOneReact />} />
                <Route path='/react/two' element={<ShowTwoReact />} />

                <Route path='/rust/one' element={<ShowOneRust />} />
                <Route path='/rust/two' element={<ShowTwoRust setTitle={props.setTitle} />} />
                <Route path='/rust/three' element={<ShowThreeRust />} />
                <Route path='/rust/four' element={<ShowFourRust />} />
                <Route path='/rust/five' element={<ShowFiveRust />} />
                <Route path='/rust/six' element={<ShowSixRust />} />
                <Route path='/rust/seven' element={<ShowSevenRust />} />
                <Route path='/rust/eight' element={<ShowEightRust />} />
                <Route path='/rust/nine' element={<ShowNineRust />} />
                <Route path='/rust/ten' element={<ShowTenRust />} />

                <Route path='/rust/ten/clippy' element={<Clippy />} />
                <Route path='/rust/ten/conversations' element={<Conversations />} />
                <Route path='/rust/ten/enums' element={<Enums />} />
                <Route path='/rust/ten/errorhandling' element={<ErrorHandling />} />
                <Route path='/rust/ten/functions' element={<Functions />} />
                <Route path='/rust/ten/generics' element={<Generics />} />
                <Route path='/rust/ten/hashmap' element={<Hashmaps />} />
                <Route path='/rust/ten/if' element={<If />} />
                <Route path='/rust/ten/intro' element={<Intro />} />
                <Route path='/rust/ten/iterators' element={<Iterators />} />
                <Route path='/rust/ten/lifetimes' element={<Lifetimes />} />
                <Route path='/rust/ten/macros' element={<Macros />} />
                <Route path='/rust/ten/modules' element={<Modules />} />
                <Route path='/rust/ten/moveSemantics' element={<MoveSemantics />} />
                <Route path='/rust/ten/options' element={<Options />} />
                <Route path='/rust/ten/primitiveTypes' element={<PrimitiveTypes />} />
                <Route path='/rust/ten/quiz' element={<Quiz />} />
                <Route path='/rust/ten/smartPointers' element={<SmartPointers />} />
                <Route path='/rust/ten/strings' element={<Strings />} />
                <Route path='/rust/ten/structs' element={<Structs />} />
                <Route path='/rust/ten/tests' element={<Tests />} />
                <Route path='/rust/ten/traits' element={<Traits />} />
                <Route path='/rust/ten/variables' element={<Variables />} />
                <Route path='/rust/ten/vecs' element={<Vecs />} />


                <Route path='/assembly/one' element={<ShowOneAssembly />} />
                <Route path='/assembly/two' element={<ShowTwoAssembly />} />
                <Route path='/assembly/three' element={<ShowThreeAssembly />} />
                <Route path='/assembly/four' element={<ShowFourAssembly />} />
                <Route path='/assembly/four/phase_1' element={<LabOne />} />
                <Route path='/assembly/four/phase_2' element={<LabTwo />} />
                <Route path='/assembly/four/phase_3' element={<LabThree />} />
                <Route path='/assembly/four/phase_4' element={<LabFour />} />
                <Route path='/assembly/four/phase_5' element={<LabFive />} />
                <Route path='/assembly/four/phase_6' element={<LabSix />} />


                <Route path='/' element={<ShowMain />} />
                <Route path='/rust' element={<ShowRust />} />
                <Route path='/react' element={<ShowReact />} />
                <Route path='/cpp' element={<ShowCpp />} />
                <Route path='/books' element={<ShowBooks />} />
                <Route path='/nodejs' element={<ShowNodejs />} />
                <Route path='/assembly' element={<ShowAssembly />} />

                <Route path='/graphs' element={<ShowGraph />} />
                <Route path='/graph/one' element={<ShowOneGraph />} />
                <Route path='/graph/two' element={<ShowTwoGraph />} />
                <Route path='/graph/three' element={<ShowThreeGraph />} />

            </Routes>
        </div>
    );
}