function creatTwitter(){
    let btn_tweet = document.getElementById("btn_tweet");
    let input_value = document.getElementById("input_tweet");
          if(input_value.value.length != 0){
            let like = document.createElement("span");
            like.setAttribute("class","material-icons");
            like.innerHTML=" favorite_border ";
            let reTweet = document.createElement("span");
            reTweet.setAttribute("class","material-icons");
            reTweet.textContent=" publish ";
            let comment = document.createElement("span");
            comment.setAttribute("class","material-icons");
            comment.textContent=" repeat ";
            let div_post = document.createElement("div");
        let post__avatar = document.createElement("div");
        let post__body= document.createElement("div");
        let post__headerText= document.createElement("div");
        let post__header = document.createElement("div");
        let post__headerDescription = document.createElement("div");
        let post_footer = document.createElement("div");
        let father = document.getElementById("father");
        // end divs creation 
        let h33  = document.createElement("h3");
        let para = document.createElement("p");
        let ava_img =document.createElement("img");
        ava_img.src="images/avatar.jpg";
        // things inside the main div
      father.prepend(div_post);
      div_post.setAttribute("class","post");
      div_post.appendChild(post__avatar);
      post__avatar.setAttribute("class","post__avatar");
      post__avatar.appendChild(ava_img);
      div_post.appendChild(post__body);
      post__body.setAttribute("class","post__body");
      post__body.appendChild(post__header);
      post__header.setAttribute("class","post__header");
      post__header.appendChild(post__headerText);
      post__headerText.setAttribute("class","post__headerText");
      post__headerText.appendChild(h33).textContent="new_user";
      post__body.appendChild(post__headerDescription);
      post__headerDescription.setAttribute("class","post__headerDescription");
      para.textContent =   input_value.value;
      post__headerDescription.append(para);
      input_value.value = '';
      post__body.appendChild(post_footer);
      post_footer.setAttribute("class","post_footer");
      let styles = {
      "display": "flex",
      "margin" : "10px",
      "justify-content" :"space-between",
  
  
       
    };
    Object.assign(post_footer.style,styles); // code from internet 
    post_footer.appendChild(reTweet).style.marginTop="20px";
    post_footer.appendChild(like).style.marginTop="20px";
    post_footer.appendChild(comment).style.marginTop="20px";
     like.addEventListener("click",()=>{
      like.classList.toggle("me");
       div_post.classList.toggle("bg");
     })
     comment.addEventListener("click",()=>{
      alert("hi")
   })  
  
    }
     
   }
  
        btn_tweet.addEventListener("click",()=>{
        creatTwitter();
     
        })
    
