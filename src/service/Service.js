import React, { Component } from 'react';
import './Service.css';
/* 
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); */

class Service extends Component {
  constructor(props) {
    super(props);   
    this.state = {
      list: [
        { name: 'task133 ', _id: "11", desc: "desc of task1", priority: '1' },
        { name: 'task2', _id: "22", desc: "desc of task2", priority: '2' },
        { name: 'task3', _id: "33", desc: "desc of task3", priority: '1' }

      ]
    };
  }

  
  //oninit react
  setList(l1) {
    this.setState = ({
      list: l1,
    });
  }
  getList() {
    if (localStorage.getItem('tasksList') === null) {
      localStorage.setItem('tasksList', JSON.stringify(this.state.list));
    }
    return JSON.parse(localStorage.getItem('tasksList'));
  }
  
  getUserListByGroup() {
    debugger
    if (localStorage.getItem('users') === null) {
      return
    }
    return JSON.parse(localStorage.getItem('users'));
  }
  getUserById(id)
  {
    let users=JSON.parse(localStorage.getItem('users')); 
    for(let i=0;i<users.length;i++)
    {
      if(users[i].id==id)
      {
        return users[i];
      }
    }
   alert("user not found- error");
  }

  signIn(obj)
  {
    if(localStorage.getItem('users')==null)
    {
      alert("any user exist");
      return;
    }  
    let users=JSON.parse(localStorage.getItem('users')); 
   // let user={username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
    for(let i=0;i<users.length;i++)
    {
      if(users[i].password==obj.password)
      {
        if(users[i].username==obj.username||users[i].email==obj.username)
        alert("this is the user!!!");
        return true;
      }
    }
    alert("not exist:(");  
    return false;
  }

  
  createGroup(obj)
  {
    let groups=[];
    if(localStorage.getItem('groups')!=null)
    {
      groups=JSON.parse(localStorage.getItem('groups'));
    }
    let newGroup={objId:obj.password, groupname:obj.groupname, password:obj.password, description:obj.description};
    debugger
    groups.push(newGroup);

    localStorage.setItem('groups', JSON.stringify(groups));
    alert("check details&/n enter to all groups");  
  }

  retrieveTasksGroup(groupId)
  {
    //rerturn all tasks for specific group
    debugger
  }

  isPasswordValid(password)
  {
    if(password.length<5)
    {
      return false;
    }
    return true;

  }
  signUp(obj)
  {
    if(!this.isPasswordValid(obj.password))
    {
      alert("invalid password");
      return false;
    }
    let users=[];
    if(localStorage.getItem('users')!=null)
    {
      users=JSON.parse(localStorage.getItem('users'));
    }   
    let newUser={username:obj.username, email:obj.email, password:obj.password,id:obj.password};
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
    alert("check details&/n enter to all groups");  
    return true;
  }

  returnGroups()
  {
    
    if(localStorage.getItem('groups')==null)
    {
      alert("any group exist");
      return;
    }  
    let groups=JSON.parse(localStorage.getItem('groups')); 
   // let user=this.getUserById(1);//{username:localStorage.getItem('username'), pass:localStorage.getItem('password')};
  //  let myGroup=[];
  //  for(let i=0;i<groups.length;i++)
   // {
   //   if (groups[i].pass==user.pass&&groups[i].username==user.username) {
   //       myGroup.push(groups[i]);
   //    }
   // }
  //  return myGroup;
  return groups;
  }
  insertItem(obj) {
    this.setState({
      list: this.state.list.push(obj),
    });
    localStorage.setItem('tasksList', JSON.stringify(this.state.list));
    return this.state.list;
  }

  markTaskAsDone(id) {
    let arr;
    arr = this.getList().filter(function (obj, i) {
      if (obj._id !== id) {
        return obj;
      }
    });
    this.setList(arr);
    return (arr);
  }

  getIdFromLocalStorage(id) {
    this.state.list.map(item => {
      if (item._id === id) {
        localStorage.setItem('objFromLocalStorage', JSON.stringify(item));
      }
    })
  }

  update(obj) {
    let v1 = {};
    v1 = this.markTaskAsDone(obj._id);
    this.setList(v1);
    v1.push(obj);
    localStorage.setItem('tasksList', JSON.stringify(v1));
  }

  render() {
    return this.props.children;
  }

}
export default Service;
