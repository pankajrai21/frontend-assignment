import React from 'react'

const Button = ({variant,children,index, setTasks, tasks}: {
    variant: 'small' | 'big';
    children: React.ReactNode;
    index?: number;
    setTasks?: (tasks: {
        task: string;
        done: boolean;
    }[]) => void;
    tasks?: {
        task: string;
        done: boolean;
    }[]
}) => {
  const deleteTask = () => {
    const newTasks = tasks?.filter((_,i) => i!==index)
    if(!newTasks || !setTasks) return;
    setTasks(newTasks)
  }
  return (
    <button onClick={variant==='small' ? deleteTask : undefined} className={variant==='small'?'small':'big'}>{children}</button>
  )
}

export default Button