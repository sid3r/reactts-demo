import React from "react";
import Counter from "./components/Counter";
import FormComponent from "./components/Form";
import PrimaryButton from "./components/PrimaryButton";
import UserComponent from "./components/User";

function App() {
  // capture btn click
  function btnClickHandler(): void {
    alert("click event from child component");
  }
  // main render method
  return (
    // strict mode: display some best practices suggestions/errors
    <React.StrictMode>
      <div className="min-h-screen">
        <div className="bg-indigo-800 mb-6">
          <div className="flex items-center max-w-5xl h-14 px-6 mx-auto">
            <h1 className="text-xl text-white">React + Typescript</h1>
          </div>
        </div>
        <div className="flex flex-col space-y-12 px-6 max-w-5xl mx-auto mb-24">
          {/* props */}
          <div>
            <h2 className="text-neutral-500 text-xl my-4">
              props typing: Counter.tsx
            </h2>
            <Counter start={0} />
          </div>
          {/* useState */}
          <div>
            <h2 className="text-neutral-500 text-xl my-4">
              state typing: User.tsx
            </h2>
            <UserComponent />
          </div>
          {/* button events */}
          <div>
            <h2 className="text-neutral-500 text-xl my-4">
              callback as prop: PrimaryButton.tsx
            </h2>
            <PrimaryButton text="Click me" onClick={btnClickHandler} />
          </div>
          {/* form events */}
          <div>
            <h2 className="text-neutral-500 text-xl my-4">
              form events typing: Form.tsx
            </h2>
            <FormComponent />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
