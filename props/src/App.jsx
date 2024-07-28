import Cart from "./Component/Cart";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Cart
        name="Aliyan Sheikh"
        description="Darkness on the Edge of Town is the fourth studio album by the American singer-songwriter Bruce Springsteen (pictured)"
      />
      <Cart
        name="Landslides"
        description="Landslides kill at least 257 people in Geze Gofa, Ethiopia.
"
      />
      <Cart
        name="Tadej Pogačar"
        description="In cycling, Tadej Pogačar (pictured) wins the Tour de France."
      />
      <Cart
        name="Lorrane Oliveira"
        description="that Brazilian Olympic gymnast Lorrane Oliveira (pictured) trained for the circus before starting gymnastics?"
      />
      <Cart
        name="Lilia Cosman"
        description="that at age 15, Lilia Cosman moved from the United States to Romania to compete for Romania's Olympic gymnastics team?"
      />
      <Cart
        name="Buq Buq labor camp"
        description="that after being freed from Buq Buq labor camp in Italian-occupied Egypt, Libyan Jewish prisoners had to walk home across the desert?"
      />
    </div>
  );
}

export default App;
