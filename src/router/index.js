import { createBrowserRouter } from 'react-router-dom';
import Videos from '../pages/Videos';
import VideoDetail from '../pages/VideoDetail';
import NotFound from '../pages/NotFound';
import App from '../App';
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Videos /> },
            { path: '/videos', element: <Videos /> },
            { path: '/videos/:keyword', element: <Videos /> }, // 검색
            { path: '/videos/watch/:id', element: <VideoDetail /> }, // 특정 비디오
        ],
    },
]);

export default router;
