angular.module('starter.services', [])

.factory('Courses', function() {
  var courses = [];
  var hasLoaded = false;

  // Way one
  // var course = {};
  // course.getAllCourses = function() {
  //     alert('hello world');
  // }
  //
  // return course;

  // var courses = [
  //     {
  //         title: 'Python',
  //         imageUrl: 'http://icons.iconarchive.com/icons/icons8/ios7/512/Programming-Edit-Property-icon.png',
  //         color: '#f53bfb',
  //         hasCourse: true
  //     },
  //     {
  //         title: 'Music',
  //         imageUrl: 'http://www.clker.com/cliparts/m/a/C/f/d/7/white-music-note-md.png',
  //         color: '#5187b9',
  //         hasCourse: true
  //     },
  //     {
  //         title: 'History',
  //         imageUrl: 'http://liz.innovatesf.com/wp-content/uploads/sites/2/2013/08/icon_Black_book.png',
  //         color: '#cd6743'
  //     },
  //     {
  //         title: 'Econ',
  //         imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Numismatics_and_Notaphily_icon.png',
  //         color: '#B8510D'
  //     },
  // ];

  //Way two
  return {
    reloadCoursesFromParse() {
        if(hasLoaded) return;
        console.log("Just reloaded");

        var Course = Parse.Object.extend("Courses");
        var query = new Parse.Query(Course);

        query.find({
          success: function(results) {
              for(var i = 0; i < results.length; i++) {
                  var object = results[i];
                  console.log(object.get('name'));
                  courses.push({
                      title: object.get('name'),
                      imageUrl: object.get('imageUrl'),
                      color: object.get('color')
                  });
              }
              hasLoaded = true;
          },
          error: function(error) {
            alert("Error when getting objects!");
          }
        });

        //   query.get("xWMyZ4YEGZ", {
        //     success: function(couse) {
        //       // The object was retrieved successfully.
        //     },
        //     error: function(object, error) {
        //       // The object was not retrieved successfully.
        //       // error is a Parse.Error with an error code and message.
        //     }
        //   });
      },

      //List of every course on the app
      getAllCourses() {
        return courses;
      },

      getMyCourses() {
        var returnedCourses = [];
        for (var i = 0; i < courses.length; i++) {
          var myCourse = courses[i];
          if (myCourse.hasCourse) {
            returnedCourses.push(myCourse);
          }
        }
        return returnedCourses;
      },

      toggleCourse(index) {
        courses[index].hasCourse = !courses[index].hasCourse;
      }
  }
});
