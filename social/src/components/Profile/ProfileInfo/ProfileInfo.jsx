import classes from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <main className={classes['b-profile__info']}>
            <img className={classes['b-profile__img-background']} alt="rocs avatar" src="https://migrantvisa.ru/wp-content/uploads/2020/02/wsi-imageoptim-1-Nacionalnyj-lesnoj-park-9-Chzhanczjacze-.jpg"></img>
            <img className={classes['b-profile__avatar']} alt="avatar" src="https://sun9-57.userapi.com/impg/H14oRJYLWz7i0_l1j85OTXpCcGt2n_XCdaa7Mw/46LLi8ZM7iE.jpg?size=768x768&quality=96&sign=952b8760b9588914463a103004e850de&type=album"></img>
            <div className={classes['b-profile__description']}>
                {props.description}
            </div>
        </main>
    )
};

export default ProfileInfo;
