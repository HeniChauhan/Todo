import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import  './Blog.css';

const SingleBlog = () => {
    const [post, setPost] = useState("");
    const { id } = useParams();
    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const posts1 = await response.json();
        setPost(posts1);
        console.log(post);
    }

    useEffect(() => {
        getPost();
    }, []);
    return (
        <>
            <Card className="singleBlog">
                <Card.Body>
                    <h2 className="mt-3 mb-4">
                        {post.title}
                    </h2>
                    <p className="lead mb-4">
                        {post.body}
                    </p>
                </Card.Body>
            </Card>
        </>
    )
}
export default SingleBlog;