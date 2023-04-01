import {useState} from 'react'
import Card from './shared/Card'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'

function FeedbackForm({handleAdd}) {
    const[text, setText] = useState("")
    const[btnDisabled, setBtnDisabled]= useState(true)
    const[message, setMessage] = useState("")
    const[rating, setRating] = useState(10)

    const handleTextChange = (e) => {
        if (text === ""){
            setBtnDisabled(true)
            setMessage(null)
        }
        else if(text !== "" && text.trim().length <=10){
            setBtnDisabled(true)
            setMessage("Text should be at least 10 characters")
        }
        else{
            setBtnDisabled(false)
            setMessage(null)
        }

        setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (text.trim().length > 10){
            const newFeedback ={
                text,
                rating,
            }

            handleAdd(newFeedback)
            setText("")
        }

        
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How would you like to rate our service with us? </h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input type="text" placeholder='Write a review' onChange={handleTextChange} value={text}/>
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className='message'>{message}</div>}
            </form>
        </Card>
    
  )
}

export default FeedbackForm