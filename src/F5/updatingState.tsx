//Example of State Management
// import { useState } from "react";
// import Button from "./F3/component/Button";

// function App() {
//   const [game, setGame] = useState({
//     id: 1,
//     player: {
//       name: "John",
//     },
//   });

//   const onClick = () => {
//     setGame({ ...game, player: { ...game.player, name: "Syakir" } });
//   };

//   return <Button onClick={onClick}></Button>;
// }

// export default App;


//Example 2
// import { useState } from "react";
// import Button from "./F3/component/Button";

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"],
//   });

//   const onClick = () => {
//     setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
//   };

//   return <Button onClick={onClick}></Button>;
// }

// export default App;

//Example 3
// import { useState } from "react";
// import Button from "./F3/component/Button";

// function App() {
//   const [cart, setCart] = useState({
//     discount: 0.1,
//     items: [
//       { id: 1, title: "Product 1", quantity: 1 },
//       { id: 2, title: "Product 2", quantity: 1 },
//     ],
//   });

//   const onClick = () => {
//     setCart({
//       ...cart,
//       items: cart.items.map((item) =>
//         item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
//       ),
//     });
//   };

//   return <Button onClick={onClick}></Button>;
// }

// export default App;


//ExtendableText

// import ExpandableText from "./F3/component/ExpandableText";

// function App() {
//   return (
//     <ExpandableText>
//       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta velit vel
//       magnam corrupti culpa eaque tenetur ipsum consequuntur fugiat quis natus
//       laborum quaerat, cumque odio qui impedit sunt! Delectus doloremque
//       voluptatum praesentium harum ut earum ipsam ipsum saepe officia quos sit
//       recusandae dicta aut, reiciendis ea error cum maxime inventore amet. Optio
//       magnam, laborum fugiat suscipit doloremque debitis voluptatibus, aut alias
//       molestias voluptatum inventore, facilis temporibus quos cupiditate
//       asperiores ad nisi aliquid? Ea velit amet, deleniti magnam soluta
//       obcaecati quod commodi, perferendis necessitatibus laudantium rem. Libero
//       ipsam doloribus repudiandae assumenda enim architecto sequi ipsum,
//       repellendus rem tenetur, ducimus eum accusantium!
//     </ExpandableText>
//   );
// }

// export default App;


