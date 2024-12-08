//Wrong Code

// function Form() {
//     const ref = null;
//     const handleSubmit = () => console.log(ref.current.value);

//     return (
//         <>
//             <input ref={ref} />
//             <button onClick={handleSubmit}>Submit</button>
//         </>
//     );

//   }

//Now It's correct but now we can't run the code. If we want to run this code than I have to step React Environment. Here I just showcasing how can we fix.

import { useRef } from "react";

function Form() {
    const ref = useRef(null);
    const handleSubmit = () => console.log(ref.current.value);

    return (
        <>
            <input ref={ref} />
            <button onClick={handleSubmit}>Submit</button>
        </>
    );

  }

  export default Form;
