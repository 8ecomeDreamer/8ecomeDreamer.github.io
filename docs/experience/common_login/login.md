# 通用登录

登录流程

1. 用户浏览网页。
2. 网页前端判断是否存在token，若token不存在发送请求，若token存在可直接访问。
3. 前端发送请求时如果没有当前会话的Session Id，则后端会新分配一个Session，并将与该Session对应的Session Id发送给前端并存到Cookie中。
4. 当（存放着Session Id的）Cookie和Session中两者有任一过期，即宣告会话过期，需要用户重新登录。
