/**
 * Created by QQQ on 2015/10/8.
 */
function student(name){
    var _this={};
    var num;
    _this.name=name;
    _this.stucourse=new Array();
    _this.enroll=function(course){
         _this.stucourse.push(course.name);//ѧ���α����
        course.student.push( _this.name);//�γ�ѧ����������
     }

    _this.abandon=function(course){
        for(var i=0; i<_this.stucourse.length; i++) {
            if(_this.stucourse[i] == course.name) {
                _this.stucourse.splice(i, 1);//iΪλ�ã�1Ϊɾ��һ��
                break;
            }
        }
        for( i=0; i<course.student.length; i++){
            if(course.student[i]==_this.name) {
                num=i;
            }
            course.student.splice(num, 1);//iΪλ�ã�1Ϊɾ��һ��
        }
    }
    _this.getTeacher=function(course){
        _this.look={coursename:course.name,teachername:course.teacher};
    }
    return _this;
}
function teacher(name){
    var _this={};
    _this.name=name;
    _this.instruct=function(course){
        _this.teacourse=course.name;
        course.teacher=_this.name;
    }
     _this.getStudent=function(course){
         _this.look={coursename:course.name,studentname:course.student};
     }
    return _this;

}
function course(name,student,teacher){
    var _this={};
    _this.name=name;
    _this.student=student;
    _this.teacher=teacher;
    _this.set=function(newteacher){
        _this.teacher=newteacher;
    }
    return _this;
}

var course1=course("Physics",["Jack","Lily"],"Wang");//��ʼ���γ�һ
//document.write("name:"+course1.name+",student:"+course1.student+",teacher:"+course1.teacher);
var course2=course("Art",["HaHa","TuTu","Tom"],"Zhang");//��ʼ���γ̶�
//document.write("name:"+course2.name+",student:"+course2.student+",teacher:"+course2.teacher);

var student1=student("Tom");//����ѧ������Tom
student1.enroll(course1);//����γ�1
//document.write("name:"+student1.name+",course:"+student1.stucourse);//Tom��ѡ�����
//document.write("name:"+course1.name+",student:"+course1.student+",teacher:"+course1.teacher);//�γ�ѡ�����
student1.enroll(course2);//����γ�2
student1.abandon(course2);//ɾ���γ�2
//document.write("name:"+student1.name+",course:"+student1.stucourse);//Tom��ѡ�����
//document.write("name:"+course2.name+",student:"+course2.student+",teacher:"+course2.teacher);//�γ�ѡ�����

var teacher1=teacher("Li");//�½���ʦ����
teacher1.instruct(course1);//������ʦ�γ�
//document.write("name:"+teacher1.name+",course:"+teacher1.teacourse);//Tom��ѡ�����
//document.write("name:"+course1.name+",student:"+course1.student+",teacher:"+course1.teacher);//�γ�ѡ�����

student1.getTeacher(course1);//ѧ���鿴ĳ�ſγ����
document.write(student1.look.teachername);

teacher1.getStudent(course1);//��ʦ�鿴ĳ�ſγ����
document.write(teacher1.look.studentname);


