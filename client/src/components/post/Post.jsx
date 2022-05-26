import "./Post.css";
import { MoreVert } from "@material-ui/icons";

function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/1.jpeg"
              alt="friendsProfilePic"
            />
            <div className="postUserInfo">
              <span className="postUsername">ZNing Low</span>
              <span className="postDate">5 mins ago</span>
            </div>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Testing the first post!</span>
          <img className="postImg" src="/assets/post/1.jpeg" alt="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="/assets/like.png" alt="likeEmoji" />
            <img className="likeIcon" src="/assets/heart.png" alt="loveEmoji" />
            <span className="postLikeCounter">32 people liked</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">9 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
