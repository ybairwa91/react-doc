/* eslint-disable react/no-unescaped-entities */
import { Fragment } from "react";
/*
1. Return a single root element 
  use <Fragment> (<>...</>)
  Fragments are useful because grouping elements with a Fragment has no effect on layout or styles,
  unlike if you wrapped the elements in another container like a DOM element.

  JSX looks like HTML, but under the hood it is transformed into plain JavaScript objects. 
  You can’t return two objects from a function without wrapping them into an array.
  This explains why you also can’t return two JSX tags without wrapping them into another tag or a Fragment.

  bhai ye return me jsx ek object me create hota hai and then return by function and this object is converted into html and render
  by web browser

2. Close all the tags 
  JSX requires tags to be explicitly closed:
  self-closing tags like <img> must become <img />, 
  and wrapping tags like <li>oranges must be written as <li>oranges</li>.

3. camelCase all most of the things! 
    JSX turns into JavaScript and attributes written in JSX become keys of JavaScript objects.
    In your own components, you will often want to read those attributes into variables. 
    But JavaScript has limitations on variable names. For example, their names can’t contain dashes or be reserved words
     like class.
    This is why, in React, many HTML and SVG attributes are written in camelCase.
     For example, instead of stroke-width you use strokeWidth. Since class is a reserved word,
      in React you write className instead, named after the corresponding DOM property:  

  ye jo jsx hai na ye ek object banate hai or jo attributes hai unse key:value pair bante hai
  ab js me key ka naam

*/

//this is html
/*
<h1>Hedy Lamarr's Todos</h1>
<img
  src="https://i.imgur.com/yXOvdOSs.jpg"
  alt="Hedy Lamarr"
  class="photo"
>
<ul>
    <li>Invent new traffic lights
    <li>Rehearse a movie scene
    <li>Improve the spectrum technology
</ul>
*/

export default function TodoList() {
  return (
    <Fragment>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </Fragment>
  );
}
