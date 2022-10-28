// import { Link } from "react-router-dom";
import avatarshare from "../icons/_Avatar share button.png"
import profilepic from "../icons/profile__img.png"


function Index() {
    return <div className="back">
        <div className="first-page">

            <div className="share-avatar">
                <img className="avatar" src={avatarshare} alt="" />
            </div>

            <div className="picxusername">
                <img id="profile__img" className="image" src={profilepic} alt="" />
            </div>

            <p id="twitter" className="twitterusername">Toju_toby</p>
            <p id="slack" className="twitterusername" style={{ display: "none" }}>Toju_tobiliscious</p>

            <div className="link">
                <div className="linktree">

                    <a id="btn__zuri" className="links" href="https://training.zuri.team/">Twitter Link</a>

                    <a id="btn__zuri" className="links" href="https://training.zuri.team/">Zuri Team</a>

                    <a id="books" className="links" href="http://books.zuri.team"
                        title="This is where you find books about design and coding">Zuri Books</a>

                    <a id="book__python" ref_id="Toju_tobiliscious" className="links" href="https://books.zuri.team/"
                        title="A Deatailed book about Python. Click get the perfect guide for your Python journey">Python Books</a>

                    <a id="pitch" className="links" href="https://background.zuri.team"
                        title="This is where you find books about design and coding">Background Check for Coders</a>


                    <a id="book__design" className="links" href="https://books.zuri.team/design-rules"
                        title="Free design book offered by Zuri. Very informative and detailed book that guides your steps in designing">Design Books</a>

                    <a id="book__design" className="links" href="https://books.zuri.team/design-rules"
                        title="Free design book offered by Zuri. Very informative and detailed book that guides your steps in designing">Design Books</a>
                </div>
            </div>

        </div>
    </div>
}

export default Index;



/* <div>
/* <h1>My React App</h1>
        <h1>My React App</h1>
        
       <a href="https://github.com/toju-toby22/HNG-internship-Stage-1"><button>Button</button></a>

       <h1>Example</h1>
       <div title = "Specifies a space-separated list of URLs to which, when the link is followed, post requests with the body ping will be sent by the browser (in the background). Typically used for tracking.">Hover this Text to see result</div>
    </div> */ 