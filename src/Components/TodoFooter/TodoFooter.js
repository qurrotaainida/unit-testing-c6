// halaman text awesome 

import React from 'react'

import style from './TodoFooter.module.css'

const TodoFooter = props => {
  return (
    // spesifik nyari id (untuk menampilkan di __testnya__)
    <div className={style.todoFooter} data-testid="todo-footer-element">
      {/* kondisi ketika lenght nya null keluarnya paragraf ini */}
        { !props.todoLength &&
            <p>Awesome!! You have free time!!</p>
        }
        {/* kondisi ketika length nya atas null ini nya list ini */}
        {props.todoLength > 0 &&
            <p>You have {props.todoLength} {props.todoLength > 1 ? 'tasks' : 'task' }</p>
        }
    </div>
  )
}

export default TodoFooter