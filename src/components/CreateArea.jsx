import React ,{useState}from 'react'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded,setIsExpanded] = useState(false);
    const [note,setNote] = useState({
        title : "",
        content: ""
    })
    const submitNote = (event) => {
        event.preventDefault();
        props.onAdd(note)
        setNote({
            title : "",
            content: ""
        })
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

            setNote((prevValue)=> {
                return{
                    ...prevValue,
                    [name] : value
                }
            })
        };
    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/>}
                <textarea name="content" onClick={()=>{setIsExpanded(true)}}onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}><AddIcon/></Fab>
                </Zoom>
            </form>
        </div>
    )
}

export default CreateArea
