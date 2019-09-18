import React from 'react';
import './footer-section.css';

export const FooterSection = (props) => {
  return (
      <footer>
        <div className="container">
          <div className="description">
            Price is VAT exclusive. For customers in the EU, a VAT will be added unless a valid EU VAT code is provided.
            Please consider reading our <a href="/documents/license.pdf" target="_blank">License</a>. We also offer an
            extended license if you need to remove limitations.
          </div>

          <img src="/svg/powered_by_stripe.svg"
               className="powered-by-stripe"/>
        </div>
      </footer>
  );
};
