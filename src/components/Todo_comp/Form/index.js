import { useState } from 'react'

const initialInputValue = { task: "" }
function Form({ setTask, tasks}) {

    const [form, setForm] = useState(initialInputValue);
    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        if(form.task === "") {
            return false;
        }
        setTask([...tasks, form])
        setForm(initialInputValue)
    }

  return (
    <div>
        <div>
            <input 
            name="task" placeholder='What needs to be done ?' onChange={onChangeInput} value={form.task}
            />
        </div>
        <div id='optional'>
            <span>Total {tasks.length}</span>
            <span><button>All</button></span>
            <span><button>Active</button></span>
            <span><button>Completed</button></span>
            <span><button onClick={onSubmit}>Submit</button></span>
        </div>
    </div>
  )
}

export default Form