"use client";
import Button from "@/components/Button";
import TodoRow from "@/components/TodoRow";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState<{
    task: string;
    done: boolean;
  }[]>([])
  const task = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    localStorage["tasks"] && JSON.parse(localStorage["tasks"]).length && setTasks(JSON.parse(localStorage["tasks"]))
  },[])

  useEffect(() => {
    localStorage["tasks"] = JSON.stringify(tasks)
    task.current?.focus()
  },[tasks])

  const addTask = (e: any) => {
    e.preventDefault()
    if(!task.current || !task.current.value) return;
    setTasks([...tasks, {task:task.current?.value, done:false}])
    task.current.value = ''
  }
  return (
    <div className="container">
      <h1>Todo</h1>
      <div className="task-wrapper">
        {tasks.map((task,i) => <TodoRow key={i} index={i} task={task} tasks={tasks} setTasks={setTasks}/>)}
      </div>
      <form className="add-task-wrapper" onSubmit={addTask}>
        <input ref={task} type="text" placeholder="Add task here..."/>
        <Button variant='big'>Add</Button>
      </form>
    </div>
  )
}
