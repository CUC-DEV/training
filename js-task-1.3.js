var Student={
	name:"null",
	course:Course,
	j:0,
	enroll: function(course)
	{
		this.course=course;
		course.student[course.i]=this;
		this.j=course.i;
		course.i++;
	},
	
	abandon: function(course)
	{
		this.course=Course;
		for(var k=j;k<i-1;k++)
		{
			course.student[k]=course.student[k+1];
		}
		course.i--;
		j=0;
	},
	
	getTeachers: function()
	{
		var obj={
			course:this.course,
			teacher:[this.course.teacher1.name,this.course.teacher2.name,this.course.teacher3.name]
		}
	}
}

var Teacher={
	name:"null",
	course:Course,
	instruct: function(course)
	{
		course.set(this);
	},
	
	getStudents: function()
	{
		var obj={
			course:this.course,
			sutdent:[this.course.student[0].name,this.course.student[1].name,this.course.student[2].name]
		}
		
	}
}


var Course={
	name:"null",
	teacher:[Teacher,Teacher,Teacher],
	student:[Student,Student,Student],
	i:0,
	set: function(teacher)
	{
		teacher.course=this;
		if(this.teacher[0]==Teacher)
		{
			this.teacher[0]=teacher;
		}
		else if(this.teacher[1]==Teacher)
		{
			this.teacher[1]=teacher
		}
		else if(this.teacher[2]==Teacher)
		{
			this.teacher[2]=teacher
		}
	}
}

var student1={
	name:"student1"
}
var student2={
	name:"student2"
}
var student3={
	name:"student3"
}
student1.__proto__=Student;
student2.__proto__=Student;
student3.__proto__=Student;

var teacher1={
	name:"teacher1"
}
var teacher2={
	name:"teacher2"
}
var teacher3={
	name:"teacher3"
}
teacher1.__proto__=Teacher;
teacher2.__proto__=Teacher;
teacher3.__proto__=Teacher;

var course1={
	name:"course1"
}
var course2={
	name:"course2"
}
var course3={
	name:"course3"
}
course1.__proto__=Course;
course2.__proto__=Course;
course3.__proto__=Course;

