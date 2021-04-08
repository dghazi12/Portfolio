// import emailjs from "emailjs-com";
// import React from "react";
// import Button from "@material-ui/core/Button";

// import "./contact.css";

// const Contact = () => {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_7vz4ech",
//         "template_obs9gzp",
//         e.target,
//         "user_488Hc2VgHuDVwWjuoLGsl"
//       )
//       .then(
//         (result) => {
//           console.log("it worked : ", result.text);
//         },
//         (error) => {
//           console.log("it didn't work .... :", error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <div>
//       <div className="contact-container">
//         <h1>Contact</h1>
//         <form onSubmit={sendEmail}>
//           <div className="row pt-5 mx-auto">
//             <div className="col-8 form-group mx-auto">
//               <input
//                 type="text"
//                 className="form-control name"
//                 cols="30"
//                 placeholder=" Name"
//                 name="name"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="email"
//                 className="form-control name"
//                 cols="30"
//                 placeholder=" Email Address"
//                 name="email"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <input
//                 type="text"
//                 className="form-control name"
//                 cols="30"
//                 placeholder=" Subject"
//                 name="subject"
//               />
//             </div>
//             <div className="col-8 form-group pt-2 mx-auto">
//               <textarea
//                 className="form-control message"
//                 cols="30"
//                 placeholder=" Message"
//                 name="message"
//               ></textarea>
//             </div>
//             <Button variant="outlined" type="submit" value="Send Message">
//               Send Message
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;
