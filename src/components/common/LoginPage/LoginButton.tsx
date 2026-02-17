// DEPRECATED MERGED INTO LOGINFORM.TSX



//import "./Form.css";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUserDatabase } from "../../../hooks/useUserDatabase";
// import { useSessionUser } from "../../../hooks/useSessionUser";


// export function LoginButton() {
//     const [infoText, setInfoText] = useState<String>("");
//     const navigator = useNavigate();

//     const { users } = useUserDatabase([]);
//     const { setSessionUser } = useSessionUser();
//     return (
//         <>
//             <div className="login-buttons">
//                 <div>
//                     <button
//                     onClick={() => {
//                         if(getLoginAttempt()[0] == "" || getLoginAttempt()[1] == "") {
//                             setInfoText("Please enter some credentials");
//                         } else {
//                             users.forEach(e => {
//                                 if(e.username == getLoginAttempt()[0] && e.password == getLoginAttempt()[1]) {
//                                     setSessionUser(getLoginAttempt()[0]);
//                                     navigator("/");
//                                 } else {
//                                     navigator("/");
//                                 }
//                             });
//                         }
//                     }}>Log In</button>
//                 </div>
//                 <div>
//                     <p>{infoText}</p>
//                 </div>
//                 <button className="create-account-button"
//                 onClick={() => {
//                     navigator("/accounts/createAccount");
//                 }}>
//                     Create Account
//                 </button>
//             </div>
//         </>
//     );
// }