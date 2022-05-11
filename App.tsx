import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Login from './Pages/Login';


export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
     <Login/>
    </TailwindProvider>
  );
}


