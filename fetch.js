// var postAPI = 'https://jsonplaceholder.typicode.com/posts'

// fetch(postAPI)
//     .then(function(respone){
//         return respone.json()
//     })
//     .then(function(posts){
//         var htmls = posts.map(function(post){
//             return `<li><h1>${post.title}</h1>
//                     <p>${post.body}</p></li>`
//         })
//         var html = htmls.join('')
//         document.getElementById('post-block').innerHTML = html
//     })

var courseAPI = "http://localhost:3000/courses";

function start() {
  getCourses(renderCourses);
  handleCreateCourse();
}

start();

function getCourses(callback) {
  fetch(courseAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function createCourse(data) {
  fetch(courseAPI, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(function (response) {
      return response.json();
    })
 
}

function handleDeleteCourse(id) {
  fetch(courseAPI + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: id,
    }),
  })
// .then(function (response) {
//     return response.json();
//   });
}

function renderCourses(courses) {
  var courseBlock = document.getElementById("course-block");
console.log('rerender')
  var htmls = courses.map(function (course) {
    return `<li class="item-${course.id}">
                    <h2>${course.name}</h2>
                    <p>${course.description}</p>
                    <button onclick="handleDeleteCourse(${course.id})">Delete</button>
                </li>`;
  });

  courseBlock.innerHTML = htmls.join("");
}

function handleCreateCourse() {
  var createBtn = document.getElementById("create");
  createBtn.onclick = function () {
    var courseName = document.querySelector("input[name=name]").value;
    var courseDescription = document.querySelector("input[name=desc]").value;

    var data = {
      name: courseName,
      description: courseDescription,
    };

    createCourse(data);
  };
}
