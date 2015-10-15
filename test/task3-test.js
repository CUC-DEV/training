'use strict'

var assert = require("assert");
var school = require("../task3-example");
describe('#select course system', function () {
    describe('course', function () {
        it('should return course content', function () {
            assert.equal("Physics", school.course("Physics",["Jack","Lily"],"Wang").name);
			assert.equal("Jack", school.course("Physics",["Jack","Lily"],"Wang").student[0]);
			assert.equal("Lily", school.course("Physics",["Jack","Lily"],"Wang").student[1]);
			assert.equal("Wang", school.course("Physics",["Jack","Lily"],"Wang").teacher);
		});
        it('should return NAN when non-content is passing', function () {
            assert.equal(true, isNaN(school.course()));
        });
        it('should return undefined when passing undefined', function () {
             assert.equal(undefined, school.course(undefined));
        });
    });
	describe('teacher', function () {
		var course1=school.course("Physics",["Jack","Lily"],"Wang");
		it('should return teacher content', function () {
			assert.equal("Li",school.teacher("Li","Art").name);
			assert.equal("Art",school.teacher("Li","Art").teacourse);
		});
		var teacher1=school.teacher("Li","Art");
		teacher1.instruct(course1);
		it('should return teacher edit course ', function () {
			assert.equal("Physics",teacher1.teacourse);
			assert.equal("Li",course1.teacher);
		});
		teacher1.getStudent(course1);
		it('should return teacher get course ', function () {
			assert.equal("Physics",teacher1.look.coursename);
			assert.equal("Jack",teacher1.look.studentname[0]);
		});
		it('should return NAN when non-content is passing', function () {
            assert.equal(true, isNaN(school.teacher()));
        });
		 it('should return undefined when passing undefined', function () {
             assert.equal(undefined, school.teacher(undefined));
        });
	});
	describe('student', function () {
		var course1=school.course("Physics",["Jack","Lily"],"Wang");
		var student1=school.student("Tom","English");
		it('should return student content', function () {
				assert.equal("Tom",school.student("Tom","English").name);
				assert.equal("English",school.student("Tom","English").stucourse);
		});
		
		it('should return student edit(1) course ', function () {
			student1.enroll(course1);
			assert.equal("Physics",student1.stucourse[1]);
			assert.equal("Tom",course1.student[1]);
		});
		student1.abandon(course1);
		it('should return student edit(2) course ', function () {
			student1.abandon(course1);
			assert.equal(true,isNaN(student1.stucourse[1]));
			assert.equal(true,isNaN(course1.student[2]));
		});
		student1.getTeacher(course1);
		it('should return student get course ', function () {
			assert.equal("Physics",student1.look.coursename);
			assert.equal("Wang",student1.look.teachername);
		});
		it('should return NAN when non-content is passing', function () {
            assert.equal(true, isNaN(school.student()));
        });
		it('should return undefined when passing undefined', function () {
             assert.equal(undefined, school.student(undefined));
        });
	
	
	
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});