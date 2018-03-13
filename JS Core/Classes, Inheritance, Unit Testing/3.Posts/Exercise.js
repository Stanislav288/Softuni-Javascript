function exercise(){
    class Post{
        constructor(title,content){
            this.title=title;
            this.content=content;
        }

        toString(){
            return (`Post: ${this.title}
Content: ${this.content}\n`);
        }
    }

    class SocialMediaPost extends Post{
        constructor(title,content,likes,dislikes){
            super(title,content);
            this.likes=likes;
            this.dislikes=dislikes;
            this.comments=[];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let basicInfo=super.toString();
            let extraInfo=
                `Rating: ${this.likes-this.dislikes}`;
            if(this.comments.length!=0){
                extraInfo+='\nComments:\n'
                for(let comment of this.comments){
                    extraInfo+=` * ${comment}\n`;
                }
                extraInfo= extraInfo.slice(0,extraInfo.length-1);
            }

            return basicInfo+extraInfo;
        }
    }

    class BlogPost extends Post{
        constructor(title,content,views){
            super(title,content);
            this.views=views;
        }

        view(){
            this.views++;
            return this;
        }

        toString(){
            let basicInfo=super.toString();
            return basicInfo+`Views: ${this.views}`
        }
    }

    return {Post,SocialMediaPost,BlogPost}
}

exercise();