import React, { useState, useContext } from "react";
import './Setting.css'; 
import { SidebarContext } from "../../context/SidebarContext";
import { MdOutlineMenu } from "react-icons/md";

const SettingPage = () => {
  const [activeSection, setActiveSection] = useState('profile'); 
  const { openSidebar } = useContext(SidebarContext);
  return (
    <div className="setting-page">
      <div className="content-area">
     <div className="area-top-l">
        <button
          className="sidebar-open-btn"
          type="button"
          onClick={openSidebar}
        >
          <MdOutlineMenu size={24} />
        </button>
        <h2 className="area-top-title">Setting</h2>
      </div>
      </div>

    
      <div className="section-row">
       
        <div>
          <h2 className={`h2-heading ${activeSection === 'profile' ? 'active' : ''}`} onClick={() => setActiveSection('profile')}>
            My Profile
          </h2>
          {activeSection === 'profile' && (
            <div className="profile-section">
              <div className="profile-info">
                <div className="info-header">
                  <h3>Personal Information</h3>
                  <button className="edit-button">Edit</button>
                </div>
                <div className="info-content">
                  <div className="info-row">
                    <div className='info-col'>
                      <div className="info-item">
                         <div className="info-label">First Name</div>
                         <div className="info-value">John</div>
                      </div>
                      <div className="info-item">
                         <div className="info-label">Primary Contact</div>
                         <div className="info-value">123-456-7890</div>
                      </div>
                      <div className="info-item">
                         <div className="info-label">Email</div>
                         <div className="info-value">john@example.com</div>
                      </div>
                    </div>
                    <div className='info-col'>
                      <div className="info-item">
                          <div className="info-label">Last Name</div>
                             <div className="info-value">Doe</div>
                      </div>
                      <div className="info-item">
                          <div className="info-label">Secondary Contact</div>
                          <div className="info-value">987-654-3210</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="profile-address">
                <div className="info-header">
                  <h3>Address</h3>
                 <button className="edit-button" >Edit</button>
                </div>
                
                <div className="info-content">
                  <div className="info-row">
                    <div className='info-col'>

                        <div className="info-item">
                         <div className="info-label">Country</div>
                         <div className="info-value">India</div>
                        </div>
                        <div className="info-item">
                         <div className="info-label">State</div>
                         <div className="info-value">Haryana</div>
                        </div>
                    </div>
                      <div className='info-col'>
                      <div className="info-item">
                         <div className="info-label">City</div>
                         <div className="info-value">Gurugram</div>
                      </div>
                      <div className="info-item">
                         <div className="info-label">PinCode</div>
                         <div className="info-value">12345</div>
                      </div>
                        </div>
                        </div>
                        </div>
                
              </div>
            </div>
          )}
        </div>

        <div>
          <h2 className={`h2-heading ${activeSection === 'notification' ? 'active' : ''}`} onClick={() => setActiveSection('notification')}>
            Notification
          </h2>
          {activeSection === 'notification' && (
            <div className="notification-section">
            <div className="notification-item">
              <div>
                <h3>Notification Settings</h3>
                <p>We may still send you important notifications about your account outside of your notification settings.</p>
              </div>
              
            </div>

            <div className="notification-item">
              <div>
                <h3>Transaction Updates</h3>
                <p>Receive real-time notifications for every transaction processed through our gateway, including successful payments, failed transactions, chargebacks, and refunds.</p>
              </div>
              <button className="toggle-button">Toggle</button>
            </div>

            
            <div className="notification-item">
              <div>
                <h3>Account Alerts</h3>
                <p>Stay informed about changes to your account status, billing information, and subscription plans. Receive alerts for upcoming renewals, payment failures, or account suspensions.</p></div>
              <button className="toggle-button">Toggle</button>
            </div>
            <div className="notification-item">
              <div>
                <h3>Security Notifications</h3>
                <p>Be notified of any suspicious activities or security-related events, such as failed login attempts, unusual account access, or changes to security settings. Your security is our top priority.</p></div>
              <button className="toggle-button">Toggle</button>
            </div>
            <div className="notification-item">
              <div>
                <h3>Policy and Compliance Updates</h3>
                <p>Be notified of any suspicious activities or security-related events, such as failed login attempts, unusual account access, or changes to security settings. Your security is our top priority.</p></div>
              <button className="toggle-button">Toggle</button>
            </div>
            
          </div>
          )}
        </div>

        {/* Payment Section */}
        <div>
          <h2 className={`h2-heading ${activeSection === 'payment' ? 'active' : ''}`} onClick={() => setActiveSection('payment')}>
            Payments
          </h2>
          {activeSection === 'payment' && (
            <div className="payment-section">
            <div className="payment-item">
              <div>
                <h3>Payment Settings</h3>
                <p>We may still send you important notification about your account outside of your notification settings.</p></div>
            </div>

            <div className="payment-item">
              <div>
                <h3>Accepted Payment Methods</h3>
                <p>Tailor your accepted payment methods to suit your customers' preferences and streamline their checkout experience.</p></div>
                <select className="payment-select">
                <option value="enabled">Credit Card</option>
                <option value="disabled">Disabled</option>
                </select>
            </div>
            <div className="payment-item">
              <div>
                <h3>Accepted Currencies</h3>
                <p>Tailor your accepted payment methods to suit your customers' preferences and streamline their checkout experience."</p></div>
                <select className="payment-select">
                <option value="INR">INR</option>
                <option value="USD">USD</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="AED">AED</option>
                </select>
            </div>
            <div className="payment-item">
              <div>
                <h3>Set Transaction Limit</h3>
                <p>Tailor your accepted payment methods to suit your customers' preferences and streamline their checkout experience.</p></div>
                <button className="btn">Min.Limit</button>
                <button className="btn">Max.Limit</button>
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SettingPage;
