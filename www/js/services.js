angular.module('starter.services', [])

.factory('Courses', function() {
    // Way one
    // var course = {};
    // course.getAllCourses = function() {
    //     alert('hello world');
    // }
    //
    // return course;

    var courses = [
        {
            title: 'Python',
            imageUrl: 'http://icons.iconarchive.com/icons/icons8/ios7/512/Programming-Edit-Property-icon.png',
            color: '#f53bfb',
            hasCourse: true
        },
        {
            title: 'Music',
            imageUrl: 'http://www.clker.com/cliparts/m/a/C/f/d/7/white-music-note-md.png',
            color: '#5187b9',
            hasCourse: true
        },
        {
            title: 'History',
            imageUrl: 'http://liz.innovatesf.com/wp-content/uploads/sites/2/2013/08/icon_Black_book.png',
            color: '#cd6743'
        },
    ];

    //Way two
    return {
        getAllCourses() {
            return courses;
        },

        getMyCourses() {
            var returnedCourses = [];
            for(var i = 0; i < courses.length; i++) {
                var myCourse = courses[i];
                if(myCourse.hasCourse) {
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
