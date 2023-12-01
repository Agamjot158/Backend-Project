export async function getAllBlogs(element) {
    const blogSetup = (blog) => `
        <div class="col-md-6 col-lg-3 mt-3">
            <div class="card shadow border-0">
                <img src="https://picsum.photos/200/300" alt="fs" class="img-card">
                <div class="card-body">
                    <h3 class="heading-card">${blog.title}</h3>
                    <p class="p-card">${blog.content}</p>
                </div>
                <a href="" class="a-read">Read Article</a>
            </div>
        </div>`;

    fetch('/api/blogs')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            
            // Accumulate HTML in a string
            let htmlString = '';
            
            data.forEach(blog => {
                console.log(blog);
                htmlString += blogSetup(blog);
            });

            // Set the inner HTML after the loop
            element.innerHTML = htmlString;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
