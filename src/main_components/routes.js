import { Route,Routes } from "react-router-dom";

import { ShowReact } from '../pages/react/react';
import { ShowOneReact } from "../pages/react/articles/one/one";

import { ShowCpp } from '../pages/cpp/cpp';

import { ShowNodejs } from '../pages/nodejs/nodejs';
import { ShowOneNodejs } from '../pages/nodejs/articles/one/one';
import { ShowTwoNodejs } from "../pages/nodejs/articles/two/two";

import { ShowRust } from '../pages/rust/rust';
import { ShowOneRust } from "../pages/rust/articles/one/one";
import { ShowTwoRust } from "../pages/rust/articles/two/two";
import { ShowThreeRust } from "../pages/rust/articles/three/three";
import { ShowFourRust } from "../pages/rust/articles/four/four";
import { ShowFiveRust } from "../pages/rust/articles/five/five";
import { ShowSixRust } from "../pages/rust/articles/six/five";


import { ShowAlu } from "../pages/more/ALU/alu";
import { ShowRam } from "../pages/more/RAM16K/ram";

import { ShowBooks } from '../pages/books/books'
import { ShowMain } from '../pages/main/ShowMain';
import { NotFound } from "./404";

import { ShowAssembly } from "../pages/more/Assembly/assembly";
import { ShowOneAssembly } from "../pages/more/Assembly/articles/one/one";
import { ShowTwoAssembly } from "../pages/more/Assembly/articles/two/two";

export const DeclareRoutes = () =>{
    return(
<div>
<Routes>
<Route path="*" element={<NotFound />}/>
<Route path='/nodejs/one' element={<ShowOneNodejs />}/>
<Route path='/nodejs/two' element ={<ShowTwoNodejs />}/>
<Route path='/alu' element ={<ShowAlu />}/>
<Route path='/ram16k' element ={<ShowRam />}/>


<Route path='/react/one' element={<ShowOneReact />}/>

<Route path='/rust/one' element ={<ShowOneRust />}/>
<Route path='/rust/two' element ={<ShowTwoRust />}/>
<Route path='/rust/three' element ={<ShowThreeRust />}/>
<Route path='/rust/four' element ={<ShowFourRust />}/>
<Route path='/rust/five' element ={<ShowFiveRust />}/>
<Route path='/rust/six' element ={<ShowSixRust />}/>

<Route path='/assembly/one' element={<ShowOneAssembly/>}/>
<Route path='/assembly/two' element={<ShowTwoAssembly/>}/>


<Route path='/' element ={<ShowMain />}/>
<Route path='/rust' element ={<ShowRust />}/>
<Route path='/react' element ={<ShowReact />}/>
<Route path='/cpp' element ={<ShowCpp />}/>
<Route path='/books' element ={<ShowBooks />}/>
<Route path='/nodejs' element ={<ShowNodejs />}/>
<Route path='/assembly' element={<ShowAssembly/>} />

</Routes>
</div>
    );
}