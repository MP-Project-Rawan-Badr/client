## project name: Wmeedh

#### Description
```
On our platform, you can find service providers, and you can put your question 
or inquiry and you will find an answer to it. You can put your evaluation on
the services that you have tried and liked, and also make an appointment with
the service provider, 
and also enter into a chat with him and discuss what you want and agree with him. 
You can also pay through a wallet inside the site or use a visa or credit card.
```


## User Story

- Register: Anyone can signUp in the platform and choose if wants to be a service provider or user.
- Login: After choosing , is moving to the login page to enter the platform with his own service.
- Logout: As user, I can logout from the platform.
- Add inquiry or quesion: Both a service provider and user can add .
- Rating: Can user rate the service provider has dealt with.
- Appointment: Can user make a daily , weakly or monthly appointment with the service provider.
- Pay: Can user pay to the service provider through the wallet inside the platform.
- Add post: Can service provider add post that includes picture, name, region, and description of his work.
- Reminder: Gets reminder of his appointments
- Status:  service provider has a status to let other users know if it is busy or available.
- Search: Both a service provider and user are able to search the platform.
- Chat: Both a service provider and user are can communicate between them.


## Admin Story
- Delete users:  He can spam any user if the rating is low with convincing reason.
- Delete posts:  He can delete the posts if they are inappropriate


## React Router Routes (React App)

| Path             | Component            | Permissions                | Behavior                                                     |
| ---------------- | -------------------- | -------------------------- | ------------------------------------------------------------ |
| `/`              | StartPage            | public                              | start page                                          |
| `/signup`        | RegisterPage         | anon only                           | Signup form, link to login, navigate to homepage after signup|
| `/login`         | LoginPage            | anon only                           | Login form, link to signup, navigate to homepage after login |
| `/home`          | HomePage             | user and admin and service provider | Shows all pages                                     |
| `/posts`         | PostsPage            | user and admin and service provider | Shows all posts and add post                        |
| `/post/:id`      | PostPage             | user and admin and service provider | update and delete post                              |
| `/Profile`       | ProfilePage          | user and admin and service provider | edit profile                                        |
| `/Inquiries`     | InquiriesPage        | user and admin and service provider | add and show inquiries                              |
| `/Inquiry`       | InquiryPage          |  user and admin and service provider| edit and delete inquiry                             |


## Components:
- Register
- Login
- Home
- Posts
- Post
- Profile
- Inquiries
- Inquiry


## Links:
https://trello.com/b/p0lIavji/mprawanbadr

Slides
The url to your presentation slides

Slides Link

Wireframe
