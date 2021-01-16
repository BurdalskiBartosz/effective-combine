---
title: Klasy
sidebarDepth: 2
---

#### Diagram klas
@startuml
  class Task {
      id: ID
      project: ID
      userId: Number
      createdAt: Date
      value: String
      data: {}
  }
  class Projekt {
      id: ID
      userId: Number
      tasks: [Task]
      deadline: Date
  }
  class Admin {
    deleteUser ()
    addUser()
    createProject ()
  }
  class User {
      token: Token
      id: ID
      role: String
      name: String
      surname: String
      getToken() : Token
      createTask()
  }

  class Token {
      value: Number
      userId: Number
      dateExpiration: Date
      check()
  }
  Admin --|> User
  User -->"1..*" Token
  User -->"1..*" Projekt

  Task -->"1" User
  Task -->"1" Projekt
@enduml