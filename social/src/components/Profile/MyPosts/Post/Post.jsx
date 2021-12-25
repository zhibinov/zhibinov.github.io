import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div className={classes['item']}>
            <img alt='avatar' src={props.src} />
            <div>{props.name}:</div>
            <div>{props.text}</div>
            <div>
                <span>{props.likesCount} like</span>
            </div>
        </div>
    )
};

export default Post;