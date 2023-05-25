import { useDispatch } from 'react-redux';
import { IBlogPostProp } from './IBlogPost';
import { useNavigate } from 'react-router-dom';

export const BlogPost = ({ post }: IBlogPostProp) => {
    const { title, description, date, id } = post
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const postDetailHandler = (id?: string) => {
        // navigate(`posts/${id}`)
        navigate(`/post`)
    }

    return (
        <div onClick={() => postDetailHandler(id)}>
            <div>
                <span className="inline-flex items-center justify-center bg-transparent">
                    <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" />
                </span>
            </div>
            <h3 className="text-slate-900  text-base font-semibold tracking-tight mt-4">{title}</h3>
            <p className="text-slate-500  mt-2 text-sm">{`${description.substring(0, 90)}...`}</p>
            <p className="text-slate-500  mt-2 text-sm">{date}</p>
        </div>
    )
}