import { Link } from 'react-router-dom';

export default function NotFoundPage() {
    return (
        <div>
            Ups, something went wrong. Page is not found.
            <Link to='/'>Home</Link>
        </div>
    )
}