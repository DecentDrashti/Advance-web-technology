import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';

@Controller('student')
export class StudentController {
  private students = [
        { id: 1, name: 'John Doe', age: 20 },
        { id: 2, name: 'Jane Smith', age: 22 },
        { id: 3, name: 'Alice Johnson', age: 19 },
    ];
    //  @Get('hello')
    //     helloWorld() {
    //         return 'hello world';
    //     } for testing purpose only

  @Get()
  findAll() {
    return this.students;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.students.find(student => student.id === parseInt(id));
  }

  @Post()
  insert(@Body() body: any) {
    const newStudent = { id: this.students.length + 1, ...body };
    this.students.push(newStudent);
    return 'Student created successfully';
  }

  @Put(':id')
  update(@Body() body: any, @Param('id') id: string) {
    const studentIndex = this.students.findIndex(student => student.id === parseInt(id));
    if (studentIndex === -1) {
      return `Student with id ${id} not found`;
    }
    this.students[studentIndex] = { ...this.students[studentIndex], ...body, };
    return `Student with id ${id} updated successfully`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    const studentIndex = this.students.findIndex(student => student.id === parseInt(id));
    if (studentIndex === -1) {
      return `Student with id ${id} not found`;
    }
    const student = this.students.splice(studentIndex, 1);
    return `Student with id ${id} name ${student[0].name} with age ${student[0].age} deleted successfully`;
  }
}
