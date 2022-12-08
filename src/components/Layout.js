import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
// import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 16px' }}>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};


// export const Layout = () => {
//   return (
//     <div>
//       <header>
//         <nav>
//           <Link to="/" end></Link>
//           <Link to="/contacts">Contacts</Link>
//           <Link to="/register">Register</Link>
//           <Link to="/login">Login</Link>
//         </nav>
//       </header>
//       <Suspense fallback={null}>
//         <Outlet />
//       </Suspense>
//        <Toaster position="top-right" reverseOrder={false} />
//     </div>
//   );
// };