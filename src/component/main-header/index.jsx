import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from 'component/header';
import HeaderRoutes from 'routes/headerRoutes';
import Footer from 'component/footer/index';

const MainHeader = () => {
  const location = useLocation();
  const hideHeaderFooterPaths = ['/login', '/payment', '/language-main', '/select-language','/quiz', '/verify-email', '/forget-password', '/change-password', '/verify-password-otp','/manage-profile','/verify-number-otp','/new-password'];
  const isHidden = hideHeaderFooterPaths.includes(location.pathname);

  return (
    <>
      {/* Page-wrapper-Start  */}
      <div className="page_wrapper">
        {!isHidden && (
          <div>
            <Header />
          </div>
        )}
        <div>
          <HeaderRoutes />
        </div>
        {!isHidden && (
          <div>
            <Footer />
          </div>
        )}
      </div>
    </>
  );
};

export default MainHeader;
