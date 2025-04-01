import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { updateProfile, deleteUser } from 'firebase/auth';
import styles from '../../styles/auth-styles';

const Profile = () => {
  const { user } = useAuth();
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Handle profile update submission
  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    if (!user) {
      setError('User not found');
      return;
    }
    try {
      await updateProfile(user, {
        displayName: displayName,
      });
      setSuccess('Profile updated successfully');
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      if (!user) {
        setError('User not found');
        return;
      }
      await deleteUser(user);
      setSuccess('Account deleted successfully');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div style={styles.form}>
      <h1>Profile</h1>
      <form onSubmit={handleUpdateProfile}>
        <input
          style={styles.input}
          type='text'
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          placeholder='Name'
        />
        <input
          style={styles.input}
          disabled={true}
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Email'
        />
        <button style={styles.button} type='submit'>
          Update Profile
        </button>
        {success && <p style={styles.success}>{success}</p>}
        {error && <p style={styles.error}>{error}</p>}
        <div>
          <button
            onClick={handleDeleteAccount}
            style={styles.deleteAccountButton}
          >
            Delete Account
          </button>
        </div>
      </form>
    </div>
  );
};
export default Profile;

// import "./Profile.css"
{
  /* <div className='flex-container'>
  <div className='item item-1'>1</div>
  <div className='item item-2'>2</div>
  <div className='item item-3'>3</div>
  <div className='item item-4'>4</div>
  <div className='item item-5'>5</div>
  <div className='item item-6'>6</div>
</div>
<div className='flex-container-row'>
  <div className='item-row item-row-1'>1</div>
  <div className='item-row item-row-2'>2</div>
  <div className='item-row item-row-3'>3</div>
  <div className='item-row item-row-4'>4</div>
  <div className='item-row item-row-5'>5</div>
  <div className='item-row item-row-6'>6</div>
</div> */
}
