import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import Hello from './Components/MyComponent';


export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
     <Hello/>
    </TailwindProvider>
  );
}


