import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import Task1 from "./components/day2/task1.jsx";
import Task2 from "./components/day2/task2.jsx";
import Task3 from "./components/day2/task3.jsx";
import Task4 from "./components/day2/task4.jsx";
import Task5 from "./components/day2/task5.jsx";
import Task6 from "./components/day2/task6/header.jsx";
import Task7 from "./components/day2/task7.jsx";
import Task8 from "./components/day2/task8.jsx";
import Task9 from "./components/day2/task9.jsx";
import Task10 from "./components/day2/task10.jsx";
import Task11 from "./components/day2/task11.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <hr />
    <Task1 greetingName="mohammad" />
    <hr />
    <Task2 dynamicButtonLabel="click me" />
    <hr />
    <Task3
      name="LapTop"
      price="999$"
      description="A powerful laptop for work and playing"
    />{" "}
    <hr />
    <Task4 userName="mohammad" email="mohammad@gmail.com" age="18" /> <hr />
    <Task5
      pic="/src/imgs/blank-profile-picture-973460_640.webp"
      name="mohammad"
      email="mohammad@gmail.com"
    />{" "}
    <hr />
    <Task6
      title="My Website"
      home="/src/components/day2/task6/home.jsx"
      about="/src/components/day2/task6/About.jsx"
      contact="/src/components/day2/task6/Contact.jsx"
    />{" "}
    <hr />
    <Task7 label="click me" handleClick={() => alert("Button clicked")} />
    <hr />
    <Task8 />
    <hr />
    <Task9 />
    <hr />
    <Task10 />
    <hr />
    <Task11 />

  </StrictMode>
);
