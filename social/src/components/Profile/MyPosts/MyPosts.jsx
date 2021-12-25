import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    let postsData = [
        { id: 1, name: 'Паша', text: 'Привет!', likesCount: 1, src: 'https://sun1-88.userapi.com/s/v1/if1/2QTAAMQjY7MWoJOnqGXNqgp-9pvs9KNijsQHgwk9-9u1zYstFrptjEU7AeVePj1hdLN5MUys.jpg?size=200x0&quality=96&crop=98,0,428,640&ava=1' },
        { id: 2, name: 'Катя', text: 'Как дела?', likesCount: 12, src: 'https://sun1-88.userapi.com/s/v1/ig2/ZfRDWhsQcG7HzJMYAUngaEd5h9qpQlVKzdtwyPyzxspQ1NL6h3v7gS_w1Vu958A3o5trK1FPCRyf1dBHzhKdIRzC.jpg?size=200x0&quality=96&crop=76,61,868,868&ava=1' },
        { id: 3, name: 'Ганана', text: 'Ты ганана!', likesCount: 13, src: 'https://sun9-87.userapi.com/impg/mG_9P50qOxGcRS8kft-1sRYchGNVuDM4zqlOyA/OjSBtI1xzUI.jpg?size=1280x853&quality=96&sign=b4f1e537e6fd7dc4e89b8362eaf586df&type=album' }
    ]

    return (
        <div className={classes['b-profile__post']}>
            <h3>My posts</h3>
            <div className={classes['b-profile__new-post']}>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes['posts']}>
                <Post likesCount={postsData[0].likesCount} name={postsData[0].name} text={postsData[0].text} src={postsData[0].src} />
                <Post likesCount={postsData[1].likesCount} name={postsData[1].name} text={postsData[1].text} src={postsData[1].src} />
                <Post likesCount={postsData[2].likesCount} name={postsData[2].name} text={postsData[2].text} src={postsData[2].src} />
            </div>
        </div>
    )
};

export default MyPosts;