import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <main className={classes['b-profile']}>
            <ProfileInfo description="Жибинов Алексей Павлович мужчина 06.03.2019" />
            <MyPosts />
        </main>
    )
};

export default Profile;