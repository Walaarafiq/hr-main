import React from 'react'
import ProfileHeader from '../components/ProfileHeader'
import EmpGateSideBar from '../components/EmpGateSideBar';
import Profile from '../components/Profile';

function ProfilePage() {
  return (
    <div>
        <EmpGateSideBar>
            <ProfileHeader/>
            <Profile/>
        </EmpGateSideBar>
    </div>
  )
}

export default ProfilePage;