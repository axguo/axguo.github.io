document.querySelectorAll('.tag').forEach(function (tag) {
    tag.addEventListener('click', function (e) {
        e.preventDefault();
        var selectedTag = this.getAttribute('data-tag');
        console.log("Selected tag:", selectedTag);  // Debugging line
        document.querySelectorAll('.group').forEach(function (post) {
            var postTags = post.getAttribute('data-tags');
            if (postTags) {
                postTags = postTags.split(' ');
                console.log("Post tags:", postTags);  // Debugging line
                if (postTags.includes(selectedTag)) {
                    post.style.display = 'block';
                    
                    console.log("Post is visible");  // Debugging line
                    console.log(post)
                } else {
                    post.style.display = 'none';
                    console.log("Post is hidden");  // Debugging line
                }
            } else {
                console.log("No tags for this post");  // Debugging line
            }
        });
    });
});


// { { $customTags:= slice "tag1" "tag2" "tag3" } } 
//     <div id="tag-list">
//     {{ range $customTags }}
//     <a href="#" class="tag" data-tag="{{ . }}">{{ . }}</a>
//     {{ end }}
//     </div> 
//     <div class="group" data-tags="{{ delimit .Params.tags " " }}" ></div >

