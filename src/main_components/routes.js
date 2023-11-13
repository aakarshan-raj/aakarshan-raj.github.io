import { Route,Routes } from "react-router-dom";

import { ShowReact } from '../pages/react/react';
import { ShowOneReact } from "../pages/react/articles/1/one";

import { ShowCpp } from '../pages/cpp/cpp';

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
import { ShowNineRust } from "../pages/rust/articles/9/nine";


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
<Route path='/rust/seven' element ={<ShowSevenRust />}/>
<Route path='/rust/eight' element ={<ShowEightRust />}/>
<Route path='/rust/nine' element ={<ShowNineRust />}/>

<Route path='/assembly/one' element={<ShowOneAssembly/>}/>
<Route path='/assembly/two' element={<ShowTwoAssembly/>}/>
<Route path='/assembly/three' element={<ShowThreeAssembly/>}/>
<Route path='/assembly/four' element={<ShowFourAssembly/>}/>
<Route path='/assembly/four/phase_1' element={<LabOne/>}/>
<Route path='/assembly/four/phase_2' element={<LabTwo/>}/>
<Route path='/assembly/four/phase_3' element={<LabThree/>}/>
<Route path='/assembly/four/phase_4' element={<LabFour/>}/>
<Route path='/assembly/four/phase_5' element={<LabFive/>}/>
<Route path='/assembly/four/phase_6' element={<LabSix/>}/>


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