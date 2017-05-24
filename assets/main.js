$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/MikeLD.json',
    dataType: 'jsonp',
    success: function(response) {
      generateTempalate(response.courses.completed);
      console.log(response.courses.completed);
    }
  });

  function generateTempalate(courses) {
    courses.forEach(function(course) {

      const courseContainer = `<div class="course"></div>`;
      const title = `<h3>${course.title}</h3>`;
      const badge = `<img src="${course.badge}" />`;
      const button = `<a href="${course.url}" class="btn btn-primary" target="_blank">See Course</a>`;

      $('#badges').append(courseContainer);
      $('.course:last-child').append(title).append(badge).append(button);

    });

  }
});
