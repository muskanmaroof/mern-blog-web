import "./NewsLetter.css";

export default function  NewsLetter(){
    return(
        <div className="newsletter">
            <h2>Subscribe to my newsletter to stay up do date with the latest news in the makeup natural remedies.</h2>
            <form>
                <input type="text" placeholder="Enter your email address" />
                <button type="submit">SIGN UP</button>
            </form>
        </div>
    )
}