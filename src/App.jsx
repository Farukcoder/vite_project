import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { use, useEffect, useState } from 'react';
import { useRef } from 'react';
// import "./assets/css/index.css"; 

// Basic JSX rendering, jsut showing various features, js, events, styling

// const App = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <h1>Hello</h1>
//       <h1>{2+2}</h1>
//       <h1>{new Date().toLocaleDateString()}</h1>
//       <button onClick={()=>alert('hello')} style={{color:'red', padding:'10px'}}>Click me</button>
//     </div>
//   );
// };

// if conditional rendering

// const App = () => {

//   let marks=80;

//   return (
//     <div>
//       {
//       marks>=80?
//       <h1>Brilliant Student</h1>
//       :
//       <h1>Average Student</h1>
//       }
//     </div>
//   );
// };

// immediately invoked-> nijeke nije call kore function for conditional rendering

// const App = () => {

//   let marks=80;

//   return (
//     <div>
//       {(
//         () => {
//           if(marks>=80){
//             return <h1>Brilliant Student</h1>;
//           } else {
//             return <h1>Average Student</h1>;
//           }
//         }
//       )()}
//     </div>
//   );
// };

// list rendering using map
// const App = () => {

//   const city = ['Dhaka', 'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata'];

//   return (
//     <div>
//       <ol>
//         {
//           city.map((item, i)=>{
//               return <li key={i.toString()}>{item}</li>
//           })
//         }
//       </ol>
//     </div>
//   );
// };



// conditional if else rendering of components

// const LoginStatusBtn = (status) => {
//   if(status){
//     return <button>Logout</button>;
//   } else {
//     return <button>Login</button>;
//   }
// }

// const App = () => {
  
//   const isLoggedIn = true;
  
//   if(isLoggedIn){
//     return (
//       <div>
//         <h1>Login Status : You are logged in!
//         </h1>
//         <button>Logout</button>
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <h1>Login Status : Please log in to access the application.</h1>
//         <button>Login</button>
//       </div>
//     );
//   }

//     return (
//       <div>
//         <h1>Login Status
//         </h1>
//         {LoginStatusBtn(false)}
//       </div>
//     );
// };

// conditional switch case rendering of components

// const App = () => {
//   const status = true;
//   switch(status){
//     case true:
//       return (
//         <div>
//           <button>Logout</button>
//         </div>
//       );
//     case false:
//       return (
//         <div>
//           <button>Login</button>
//         </div>
//       );
//     default:
//       return (
//         <div>
//           <h1>Unknown status</h1>
//         </div>
//       );
//   }
// }

// conditional ternary rendering of components

// const App = () => {
//   const isLoggedIn = true;
  
//   return (
//     <div>
//       {
//         isLoggedIn ?
//         <button>Logout</button>
//         :
//         <button>Login</button>
//       }
//     </div>
//   );
// }

// Logical AND (&&) operator for conditional rendering

// const App = () => {
//   const isLoggedIn = false;
//   return (
//     <div>
//       <h1>Login status</h1>
//       {isLoggedIn && <button>Logout</button>}
//     </div>
//   );
// }

// immediately invoked function for conditional rendering
// const App = () => {
//   const isLoggedIn = true;
//   return (
//     <div>
//       <h1>Login status</h1>
//       {(() => {

//           if(isLoggedIn){
//             return <button>Logout</button>;
//           } else {
//             return <button>Login</button>;
//           }

//         })()}
//     </div>
//   );
// }

// props drilling example
// const App = () => {

  // const Item = {
  //   name: 'Laptop',
  //   price: 50000,
  //   description: 'A high performance laptop',
  // }

  // const buttonClick = () => {
  //   alert('Button clicked!');
  // }

  // return (
  //   <div>
  //     <Header />
  //     <Hero title="learn React" />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Header />
  //     {/* <button onClick={alert("hello!")}>click me</button> that is instant execute */}

  //     {/* <button onClick={() => alert("hello!")}>click me</button> */}
  //     <button onClick={buttonClick}>click</button>
  //     <Hero title="Learn React with Props Drilling" />
  //     <ContactForm item={Item} />
  //     <Footer childButton={buttonClick} />
  //   </div>
  // );
// }

// const App = () => {

//   const postFormData = (e) => {
//     e.preventDefault();
//     alert('Form submitted!');
//   }

//   return (
//     <div>
//       <form onSubmit={postFormData}>
//         <input type="text" name="" id="" placeholder='Name'/>
//         <input type="email" name="" id="" placeholder='Email'/>
//         <input type="password" name="" id="" placeholder='Password'/>
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// React Hook basic example

// userRef example
// const App = () => {

//   let myHeadLine = useRef();

//   const changeHeadLine = () => {
//       myHeadLine.style.color = "red";
//       myHeadLine.innerHTML = "<ul><li>one</li><li>two</li><li>three</li></ul>"
//   }

//   let FirstName, LastName = useRef();

//   const change = () => {
//     const Fn = FirstName.value;
//     const Ln = LastName.value;
//     alert(`First Name: ${Fn} \n Last Name: ${Ln}`);
//   }

//   return (
//     <div>
//       {/* <h1 ref={(h1) => myHeadLine = h1}>React Hook</h1>
//       <button onClick={changeHeadLine}>click</button> */}

//       <input ref={(a)=>FirstName=a} type="text" placeholder='FName' />
//       <input ref={(a)=>LastName=a} type="text" placeholder='LName'/>
//       <button onClick={change}>Submit</button>
//     </div>
//   );
// }

// css styling change in react component
// const App = () => {

//   let headingStyle = useRef();

//   const change = () => {
//     headingStyle.classList.remove('font-extrabold', 'font-mono', 'text-red-500');
//     headingStyle.classList.add('font-bold', 'italic', 'text-green-500');
//   }

//   return (
//     <div>
//       <h1 ref = {(el) => headingStyle = el} className='font-extrabold font-mono text-red-500'>Final App Component</h1>
//       <button onClick={change} className='bg-brand box-border border'>Click Me</button>
//     </div>
//   );
// }

// const App = () => {

//   const number = useRef(0);

//   const change = () => {
//     number.current++;
//     console.log(number.current);
//   }

//   return (
//     <div>
//       <button onClick={change} className='btn-success bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>click</button>
//     </div>
//   );
// }

// const App = () => {

//   const allData = useRef(null);


//   const fetchData = async () => {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts')
//     allData.current = await response.json();
//   }

//   const myPTag = useRef();

//   const viewData = () => {
//     myPTag.current.innerText = JSON.stringify(allData.current, null, 2);
//   }

//   return (
//     <div>
//      <p ref={myPTag}></p>
//      <button onClick={fetchData} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Call API</button>
//      <button onClick={viewData} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded' >View Data</button>
//     </div>
//   );
// }

// const App = () => {

//   let [number, setNumber] = useState(0);

//   return (
//     <div>
//       <p>Number: {number} </p>
//       <button onClick={ () => setNumber(number+1) }>Click</button>
//     </div>
//   );
// }

// const App = () => {

//   let [myObj, setMyobj] = useState({
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   });

//   // const updateObj = () => {
//   //   setMyobj({
//   //     ...myObj,
//   //     age: myObj.age + 1
//   //   });
//   // }

//   const updateObj = () => {
//     setMyobj(
//       previous => ({
//         ...previous,
//         age: previous.age + 1
//       })
//     )
//   }

//   return (
//     <div>
//       <p>Name: {myObj.name}</p>
//       <p>Age: {myObj.age}</p>
//       <p>City: {myObj.city}</p>
//       <button onClick={updateObj}>Update Age</button>
//     </div>
//   );
// }

// const App = () => {

//   const [list, setList] = useState([]);

//   const [items, setItems] = useState("");

//   const adToList = () => {
//     list.push(items);
//     setList([...list])
//   }

//   const removeItem = (index) => {
//     list.splice(index, 1);
//     setList([...list]);
//   }

//   return (
//     <div>
      
//       <table>
//         <tbody>
//           {
//             list.length !== 0 ?
//             list.map((item, i) => {
//               return ( 
//                 <tr>
//                   <td>{i+1}</td>
//                   <td>{item}</td>
//                   <td><button onClick={() => removeItem(i)}>remove</button></td>
//                 </tr>
//               )
//             })
//             :
//             <tr>
//               <td colSpan="2">No items in the list</td>
//             </tr>
//           }
//         </tbody>
//       </table>



//       <p>{items}</p>
//       <input onChange={(e) => setItems(e.target.value)} type="text" placeholder="Item"/>
//       <button onClick={adToList}>add</button>
//     </div>
//   )
// }

// form submit using useState

// const App = () => {

//   let [FormObj, SetFormObj]  = useState({ fName : "", lName : "", city  : "", gender: "" });
  
//   const inputOnChange = (property, value) => {
//     SetFormObj(prevObj => ({
//       ...prevObj,
//       [property] : value
//     }))
//   }

//   const FormSubmit = (e) => {
//     e.preventDefault();
//     console.log(FormObj);
//   }
//   return (  
//     <div className="container">

//       <form onSubmit={FormSubmit}>
//         <input onChange={(e) => inputOnChange("fName", e.target.value)} value={FormObj.fName} type="text" placeholder='First Name'/> <br />
//         <input onChange={(e) => inputOnChange("lName", e.target.value)} value={FormObj.lName} type="text" placeholder='Last Name'/> <br />
//         <select onChange={(e) => inputOnChange("city", e.target.value)} value={FormObj.city}>
//           <option value="">Choose City</option>
//           <option value="dhaka">Dhaka</option>
//           <option value="rangpur">Rangpur</option>
//         </select>
//         <br />
//         <input onChange={() => inputOnChange("gender", "male")} checked={FormObj.gender === "male"} type="radio" name="gender" /> Male
//         <input onChange={() => inputOnChange("gender", "female")} checked={FormObj.gender === "female"} type="radio" name="gender" /> Female
//         <br />
//         <button type="submit">Submit</button>
//       </form>

//     </div>
//   );
// }

// useEffect use
const App = () => {

  useEffect(()=>{})

  return (
    <div>

    </div>
  )
}

export default App;