function Student(stuname,coursename)
{
	this.stuname=stuname;
	this.coursename=new Array();
	this.course=null;
	this.enroll=function(course)
	{
		this.coursename[this.coursename.length]=course.coursename;
		this.course=course.coursename;
		course.add(this);
		this.course=course;
	}
	this.abandon=function(course)
	{
		var i=0;
		for(cou in this.coursename)
		{
			if(cou==course.coursename)
			{
				course.del(this);
				for(;i<this.coursename.length-2;i++)
				{
					this.coursename[i]=this.coursename[i+1];
				}
				break;
			}
			i++;
		}
	}
	this.getTeachers=function()
	{
		var obj={};
		for(cou in this.coursename)
		{
			obj[cou]=this.course.teaname;
		}
		return obj;
	}
	return this;
}

function Teacher(teaname,coursename)
{
	this.teaname=teaname;
	this.coursename=coursename;
	this.course=null;
	this.instruct=function(course)
	{
		this.course=course;
		this.coursename=course.coursename;
		course.teaname=this.teaname;		
	}
	this.getstudents=function()
	{
		var obj={}
		obj[this.coursename]=this.course.student;
	}
}

function Course(coursename,stuname,teaname)
{
	this.coursename=coursename;
	this.student=new Array();
	this.teaname=teaname;
	this.add=function(student)
	{
		this.student[this.student.length;]=student.stuname;
	}
	this.del=function(student)
	{
		var i=0;
		for(stu in this.student)
		{
			if(stu==stu.stuname)
			{
				for(;i<this.coursename.length-2;i++)
				{
					this.coursename[i]=this.coursename[i+1];
				}
				break;
			}
			i++;
		}
	}
	this.set=function(teacher)
	{
		teacher.instruct(this);
	}
}
	
