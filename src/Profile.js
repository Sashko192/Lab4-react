import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-content">
        <h2>Сторінка Профілю</h2>
        <p>Це захищена сторінка профілю, доступна лише після автентифікації.</p>
      </div>
    </div>
  );
};

export default Profile;
