function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

}

let jsonUri = "https://api.npoint.io/5b42eff78c604cdf090c" // if bin is expired please use: res/json/posts.json
window.onload = function () {
  fetch(jsonUri) 
        .then((response) => response.json())
        .then(json => {
            let postlist = document.getElementById("posts")
            for(p of json){
                let post = document.createElement("div")
                post.classList.toggle("post")
                //header
                let postheader = document.createElement("div")
                post.classList.toggle("posthead")
                let headerimage = document.createElement("img")
                headerimage.src="res/images/me.png"
                headerimage.alt="LA"
                let headerdate = document.createElement("p")
                headerdate.innerText=p.date
                postheader.append(headerimage,headerdate)
                //body
                let postbody = document.createElement("div")
                post.classList.toggle("postbody")
                let bodyimage = document.createElement("img")
                bodyimage.src=p.pictureURI
                let bodytext = document.createElement("p")
                bodytext.innerText=p.text
                if(p.pictureURI!==""||p.pictureURI!=""){
                  postbody.appendChild(bodyimage)
                }
                postbody.appendChild(bodytext)
                //footer
                let postfooter = document.createElement("div")
                post.classList.toggle("postfooter")
                let footerimage = document.createElement("img")
                footerimage.src="res/images/likebutton.png"
                postfooter.append(footerimage)

                post.append(postheader,postbody,postfooter)
                postlist.appendChild(post)
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            });
}
