function student(name,coursename){
    var _this=undefined;
    if(name!=null||coursename!=null){
    var _this={};
    var num;
    _this.name=name;
    _this.stucourse=new Array();
    _this.stucourse=[coursename];
    _this.enroll=function(course){
         _this.stucourse.push(course.name);//学生课表更改
        course.student.push( _this.name);//课程学生名单更改
     }

    _this.abandon=function(course){
        for(var i=0; i<_this.stucourse.length; i++) {
            if(_this.stucourse[i] == course.name) {
                _this.stucourse.splice(i, 1);//i为位置，1为删除一项
                break;
            }
        }
        for( i=0; i<course.student.length; i++){
            if(course.student[i]==_this.name) {
                num=i;
            }
            course.student.splice(num, 1);//i为位置，1为删除一项
        }
    }
    _this.getTeacher=function(course){
        _this.look={coursename:course.name,teachername:course.teacher};
    }}
    return _this;
}
function teacher(name,coursename){
    var _this=undefined;
    if(name!=null||coursename!=null){
    var _this={};
    _this.name=name;
    _this.teacourse=coursename;
    _this.instruct=function(course){
        _this.teacourse=course.name;
        course.teacher=_this.name;
    }
     _this.getStudent=function(course){
         _this.look={coursename:course.name,studentname:course.student};
     }
    }
    return _this;

}
function course(name,student,teacher){
    var _this=undefined;
    if(name!=null||student!=null||teacher!=null){
        var _this={};
        _this.name=name;
        _this.student=student;
        _this.teacher=teacher;
        _this.set=function(newteacher){
            _this.teacher=newteacher;
        }
    }
    return _this;
}

// var course1=course("Physics",["Jack","Lily"],"Wang");//初始化课程一
// var course2=course("Art",["HaHa","TuTu","Tom"],"Zhang");//初始化课程二
// 
// var student1=student("Tom");//建立学生对象Tom
// student1.enroll(course1);//加入课程1
// student1.enroll(course2);//加入课程2
// student1.abandon(course2);//删除课程2
// 
// var teacher1=teacher("Li");//新建老师对象
// teacher1.instruct(course1);//设置老师课程
// 
// student1.getTeacher(course1);//学生查看某门课程情况
// 
// teacher1.getStudent(course1);//老师查看某门课程情况

exports.student=student;
exports.teacher=teacher;
exports.course=course;