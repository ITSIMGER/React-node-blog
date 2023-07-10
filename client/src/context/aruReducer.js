  
// const Reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: {
//           role: null,
//         },
//         isFetching: true,
//         error: false,
//       };
//     case "LOGIN_SUCCESS":
//       // Extract the user and role properties from the action payload
//       const { user, role } = action.payload;

//       // Set the role property to "subscriber" if it is not present in the payload
//       const userRole = role || "subscriber";

//       return {
//         user,
//         role: userRole,
//         isFetching: false,
//         error: false,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: {
//           role: null,
//         },
//         isFetching: false,
//         error: true,
//       };
//       case "UPDATE_START":
//         return {
//           ...state,
//           isFetching:true
//         };
//       case "UPDATE_SUCCESS":
//         return {
//           user: {
//             ...action.payload,
//             role: action.payload.role || "subscriber",
//           },
//           isFetching: false,
//           error: false,
//         };
//       case "UPDATE_FAILURE":
//         return {
//           user: state.user,
//           isFetching: false,
//           error: true,
//         };
//     case "LOGOUT":
//       return {
//         user: {
//           role: null,
//         },
//         isFetching: false,
//         error: false,
//       };
//     default:
//       return state;
//   }
// };

// export default Reducer;


// purano 1st ko 

// const Reducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
//         user: null,
//         isFetching: true,
//         error: false,
//       };
//     case "LOGIN_SUCCESS":
//       return {
//         user: action.payload,
//         isFetching: false,
//         error: false,
//       };
//     case "LOGIN_FAILURE":
//       return {
//         user: null,
//         isFetching: false,
//         error: true,
//       };
//       case "UPDATE_START":
//         return {
//           ...state,
//           isFetching:true
//         };
//       case "UPDATE_SUCCESS":
//         return {
//           user: action.payload,
//           isFetching: false,
//           error: false,
//         };
//       case "UPDATE_FAILURE":
//         return {
//           user: state.user,
//           isFetching: false,
//           error: true,
//         };
//     case "LOGOUT":
//       return {
//         user: null,
//         isFetching: false,
//         error: false,
//       };
//     default:
//       return state;
//   }
// };
// export default Reducer;