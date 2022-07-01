CREATE TABLE "users" 
(
	user_id SERIAL PRIMARY KEY,
    full_name  VARCHAR(40) NOT NULL,
	bth_date   DATE NOT NULL,
	user_password VARCHAR(40) NOT NULL
);

CREATE TABLE "category" 
(
	category_id SERIAL PRIMARY KEY,
    category_name  VARCHAR(40) NOT NULL
);

CREATE TABLE "video" 
(
	video_id SERIAL PRIMARY KEY ,
    video_name  VARCHAR(40) NOT NULL,
	video_category_idFK INTEGER NOT NULL,
	video_user_idFK INTEGER NOT NULL,
	FOREIGN KEY (video_category_idFK) REFERENCES category(category_id),
    FOREIGN KEY (video_user_idFK) REFERENCES users(user_id)
);

CREATE TABLE "likes"
(
	like_video_idFK INTEGER NOT NULL,
	like_user_idFK INTEGER NOT NULL,
	FOREIGN KEY (like_video_idFK) REFERENCES video(video_id),
    FOREIGN KEY (like_user_idFK) REFERENCES users(user_id)
);

CREATE TABLE "comments"
(
	commensts_video_idFK INTEGER NOT NULL,
	comments_user_idFK INTEGER NOT NULL,
    comment_text  VARCHAR(255) not null,
	FOREIGN KEY (commensts_video_idFK) REFERENCES video(video_id),
    FOREIGN KEY (comments_user_idFK) REFERENCES users(user_id)
);