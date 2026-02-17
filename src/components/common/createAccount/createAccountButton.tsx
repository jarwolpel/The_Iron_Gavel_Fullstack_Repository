// DEPRICATED
// REMOVE LATER ONCE REFACTORING IS FINISHED

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./createAccount.css";
// import { useCreateAccount, useUserDatabase }  from "../../../hooks/useUserDatabase";

// export function CreateAccountButton() {
//     const [errorMessage, setErrorMessage] = useState<String>("");
//     const navigator = useNavigate();


//     const {newAccount, addAccount} = useCreateAccount();
//     const {addUser} = useUserDatabase();
//     return (
//         <>
//             <div>
//                 <p>{errorMessage}</p>
//             </div>
//             <button
//             onClick={() => {
//                 if(newAccount.username == "" || newAccount.username == null) {
//                     setErrorMessage("You must enter a Username");

//                 } else if(newAccount.password == "" || newAccount.password == null) {
//                     setErrorMessage("You must enter a password");

//                 } else {
//                     addAccount({...newAccount, id: Date.now()});
//                     addUser(newAccount);
//                     navigator("/accounts/login");
//                 }
//             }}>
//                 Create Account
//             </button>
//         </>
//     );
// }