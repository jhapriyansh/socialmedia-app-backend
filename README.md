# SocialMedia-App Backend 📱

This is the backend for a social media application, built with Node.js, Express, MongoDB, and Socket.IO. It provides RESTful APIs for authentication, user management, posts, comments, notifications, chats, and real-time messaging.

## Features ✨

- User registration and authentication (JWT) 🔑
- Profile management (with profile and cover picture uploads via Cloudinary) 🖼️
- Follow/unfollow, follow requests, and block/unblock users 👀
- Post creation, deletion, like, save, and timeline fetching ✍️
- Commenting on posts 💬
- Real-time chat and notifications using Socket.IO ⚡
- Notification system for likes, comments, follows, etc. 🔔
- Secure API endpoints with JWT authentication middleware 🛡️

## Tech Stack 💻

- Node.js
- Express.js
- MongoDB (Mongoose)
- Socket.IO
- Cloudinary (media storage) ☁️
- Multer (file uploads) 📁
- JWT (authentication) 🔐
- Helmet, CORS, Morgan (security and logging) 🔒

## Getting Started 🚀

### Prerequisites

- Node.js (v16+)
- MongoDB instance (local or cloud) 💾
- Cloudinary account

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/jhapriyansh/socialmedia-app-backend
    cd socialmedia-app-backend
    ```

2.  **Install dependencies:**

    ```sh
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory with the following content:

    ```
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    ```

4.  **Start the server:**

    ```sh
    npm run server
    ```

    The server will run on `http://localhost:8000` by default. ✅

## API Endpoints 🗺️

- `POST   /api/auth/register` - Register a new user 📝
- `POST   /api/auth/login` - Login and get JWT token ➡️
- `GET    /api/users/search` - Search users 🔍
- `GET    /api/users/:id` - Get user profile 👤
- `PUT    /api/users/:id` - Update user profile 🔄
- `PUT    /api/users/:id/follow` - Follow a user 👋
- `PUT    /api/users/:id/unfollow` - Unfollow a user 🚶
- `PUT    /api/users/:requesterId/acceptRequest` - Accept follow request 👍
- `PUT    /api/users/:requesterId/rejectRequest` - Reject follow request 👎
- `PUT    /api/users/:id/block` - Block/unblock a user 🚫
- `GET    /api/users/suggestions/:userId` - Get user suggestions 💡
- `POST   /api/posts/` - Create a post ➕
- `DELETE /api/posts/:id` - Delete a post 🗑️
- `PUT    /api/posts/:id/like` - Like/unlike a post ❤️
- `PUT    /api/posts/:id/save` - Save/unsave a post 🔖
- `GET    /api/posts/timeline/:userId` - Get timeline posts ⏳
- `GET    /api/posts/userPosts/:userId` - Get user's posts 📝
- `GET    /api/comments/:postId` - Get comments for a post 💬
- `PUT    /api/comments/` - Add a comment ➡️
- `DELETE /api/comments/:id` - Delete a comment ❌
- `POST   /api/chats/` - Create a chat ✉️
- `GET    /api/chats/:userId` - Get user's chats 📥
- `GET    /api/chats/:userId/has-unread` - Check for unread chats 🆕
- `GET    /api/messages/:chatId` - Get messages in a chat 📨
- `POST   /api/messages/` - Send a message ➡️
- `POST   /api/messages/mark-as-read` - Mark messages as read ✅
- `POST   /api/notifications/` - Create a notification 🔔
- `GET    /api/notifications/:userId` - Get user notifications 🔔
- `PUT    /api/notifications/mark-as-read` - Mark notifications as read ✅
- `GET    /api/notifications/:userId/has-unread` - Check for unread notifications 🔔

## Real-Time Events (Socket.IO) ⚡

- `addUser`, `removeUser`
- `sendMessage`, `getMessage`
- `sendNotification`, `getNotification`
- `follow`, `unfollow`, `sendRequest`, `acceptRequest`, `rejectRequest`
- `joinChatPage`, `leaveChatPage`
- `refetchUnreadChats`, `refetchUnreadNotifications`

**Note:** This backend is intended to be used with a compatible frontend client, which can be found here: https://github.com/jhapriyansh/socialmedia-app 🤝
